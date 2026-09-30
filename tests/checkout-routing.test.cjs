const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const folder = fs.existsSync(path.join(__dirname,'../assets')) ? 'assets' : 'integrations';
const brand = fs.existsSync(path.join(__dirname,`../${folder}/wbd-checkout.js`)) ? 'wbd' : 'outlight';
const source = fs.readFileSync(process.env.CHECKOUT_HANDOFF_SOURCE || path.join(__dirname,`../${folder}/${brand}-checkout.js`),'utf8');
const store = brand==='wbd' ? 'https://warmbydesign.com' : 'https://outlight.us';
const checkout = brand==='wbd' ? 'https://checkout.warmbydesign.com' : 'https://checkout.outlight.us';
const configName = brand==='wbd' ? 'WBDCheckout' : 'OutlightCheckout';

function harness(options={}){
 const listeners={},links=[],dialogs=[],submissions=[],reads=[],observers=[];
 const url=new URL(options.url||'/products/fixture',store);
 const bag=options.cart||{currency:'USD',items:[{variant_id:123,quantity:2,properties:{}}],total_price:30000,attributes:{},discount_codes:[]};
 const original=JSON.stringify(bag),responses=[...(options.responses||[])];
 class Form{constructor(){this.tagName='FORM';this.children=[];this.events={};this.style={};}appendChild(node){this.children.push(node);}submit(){submissions.push({action:this.action,method:this.method,fields:Object.fromEntries(this.children.map(node=>[node.name,node.value]))});}}
 function node(tag){return{tagName:tag.toUpperCase(),children:[],dataset:{},style:{},events:{},append(...children){this.children.push(...children);},appendChild(child){this.children.push(child);},setAttribute(){},addEventListener(name,callback){this.events[name]=callback;},remove(){},close(){},showModal(){dialogs.push(this);}};}
 function anchor(href){return{tagName:'A',raw:href,get href(){return new URL(this.raw,store).href;},set href(value){this.raw=value;},getAttribute(name){return name==='href'?this.raw:null;},closest(){return null;}};}
 for(const href of options.links||[])links.push(anchor(href));
 const location={origin:store,href:url.href,search:url.search};
 const context={URL,URLSearchParams,Date,Promise,AbortSignal,setTimeout,clearTimeout,HTMLFormElement:Form,CustomEvent:class{},navigator:{globalPrivacyControl:false},location,
  MutationObserver:class{constructor(callback){observers.push(callback);}observe(){}},
  document:{documentElement:{hasAttribute:()=>false},querySelectorAll:()=>links,getElementById:()=>null,createElement:tag=>tag==='form'?new Form():node(tag),body:{appendChild(){}},addEventListener:(name,callback)=>listeners[name]=callback},
  localStorage:{getItem:()=>null,setItem(){},removeItem(){}},
  window:{[configName]:{enabled:true,origin:options.checkoutOrigin||checkout},location,addEventListener:(name,callback)=>listeners[name]=callback,dispatchEvent(){},Shopify:{routes:{root:options.root||'/'},customerPrivacy:{analyticsProcessingAllowed:()=>false,marketingAllowed:()=>false}}},
  fetch:async(href,init)=>{reads.push({href,init});const response=responses.shift();if(response instanceof Error)throw response;return response||{ok:true,json:async()=>bag};},
 };
 vm.runInNewContext(source,context);
 function click(control=node('button'),extra={}){let prevented=false;listeners.click?.({target:{closest:()=>control},button:0,preventDefault(){prevented=true;},stopImmediatePropagation(){},...extra});return prevented;}
 return{links,dialogs,submissions,reads,bag,click,flush:()=>new Promise(resolve=>setImmediate(resolve)),restore(){listeners.pageshow({persisted:true});},insert(href){const link=anchor(href);links.push(link);observers.forEach(callback=>callback());return link;},submit(action,submitter){const form=new Form();form.action=new URL(action,store).href;listeners.submit({target:form,submitter,preventDefault(){},stopImmediatePropagation(){}});},unchanged(){assert.equal(JSON.stringify(bag),original);}};
}

for(const href of ['/checkout','/checkout?discount=FIXTURE25','/cart/checkout','/cart/checkout?discount=FIXTURE25',`${store}/checkout?discount=FIXTURE25`,'/discount/FIXTURE25?redirect=%2Fcheckout','/cart?whop_checkout=1&discount=FIXTURE25']){
 test(`${brand}: checkout link ${href} stays external for ordinary and new-tab entry`,async()=>{
  const h=harness({links:[href]}),link=h.links[0];
  assert.equal(new URL(link.href).pathname,'/cart');assert.equal(new URL(link.href).searchParams.get('whop_checkout'),'1');
  assert.equal(h.click(link),true);await h.flush();assert.equal(h.submissions[0].action,checkout+'/start');assert.equal(h.submissions[0].fields.items,'123:2');
  if(href.includes('FIXTURE25'))assert.equal(h.submissions[0].fields.coupon,'FIXTURE25');
  const modified=harness({links:[href]});assert.equal(modified.click(modified.links[0],{metaKey:true}),false);assert.equal(modified.reads.length,0);
  const newTab=harness({url:modified.links[0].href});await newTab.flush();assert.equal(newTab.submissions[0].action,checkout+'/start');
  if(href.includes('FIXTURE25'))assert.equal(newTab.submissions[0].fields.coupon,'FIXTURE25');h.unchanged();
 });
}

test(`${brand}: late drawer links and href updates are rewritten without hijacking ordinary links`,async()=>{
 const h=harness({links:['/products/fixture','/discount/FIXTURE25?redirect=%2Fproducts%2Ffixture','https://example.com/checkout']});
 for(const link of h.links)assert.equal(h.click(link),false);
 assert.equal(h.reads.length,0);
 const late=h.insert('/checkout?discount=FIXTURE25');assert.match(late.href,/whop_checkout=1/);
 assert.equal(h.click(late),true);await h.flush();assert.equal(h.submissions[0].fields.coupon,'FIXTURE25');
});

test(`${brand}: localized links and forms preserve the coupon and external merchant`,async()=>{
 const h=harness({root:'/en-us/',links:['/en-us/checkout?discount=FIXTURE25']});
 assert.equal(new URL(h.links[0].href).pathname,'/en-us/cart');h.click(h.links[0]);await h.flush();assert.equal(h.submissions[0].action,checkout+'/start');
 const form=harness({root:'/en-us/'});form.submit('/en-us/cart/checkout?discount=FIXTURE25');await form.flush();assert.equal(form.submissions[0].fields.coupon,'FIXTURE25');
 const named=harness();named.submit('/cart',{name:'checkout'});await named.flush();assert.equal(named.submissions[0].action,checkout+'/start');
 const update=harness();update.submit('/cart',{name:'update'});await update.flush();assert.equal(update.submissions.length,0);
});

test(`${brand}: duplicate clicks submit once and cached Back permits a second handoff`,async()=>{
 const h=harness();h.click();h.click();await h.flush();assert.equal(h.submissions.length,1);assert.equal(h.reads.length,1);
 h.restore();h.click();await h.flush();assert.equal(h.submissions.length,2);h.unchanged();
});

for(const failed of [new Error('network'),{ok:false},{ok:true,json:async()=>{throw Error('JSON');}}])test(`${brand}: transient cart failure is retried without repeating a checkout submission`,async()=>{
 const h=harness({responses:[failed]});h.click();await h.flush();assert.equal(h.reads.length,2);assert.equal(h.submissions.length,1);
 assert.ok(h.reads.every(read=>!read.init.method&&read.init.cache==='no-store'));h.unchanged();
});

test(`${brand}: persistent read failure stays in recovery and retries the original requested coupon`,async()=>{
 const h=harness({links:['/checkout?discount=FIXTURE25'],responses:[new Error('offline'),new Error('offline')]});
 h.click(h.links[0]);await h.flush();assert.equal(h.submissions.length,0);assert.equal(h.reads.length,2);assert.equal(h.dialogs.length,1);
 assert.ok(!h.dialogs[0].children.some(child=>child.tagName==='A'&&/checkout/.test(child.href||'')));
 const retry=h.dialogs[0].children.find(child=>child.textContent==='Try secure checkout again');retry.events.click();await h.flush();
 assert.equal(h.submissions.length,1);assert.equal(h.submissions[0].fields.coupon,'FIXTURE25');h.unchanged();
});

for(const [label,extra] of [
 ['empty',{items:[]}],['notes',{note:'preserve me'}],['currency',{currency:'EUR'}],['large amount',{total_price:250001}],
 ['fractional quantity',{items:[{variant_id:123,quantity:1.5}]}],['subscription',{items:[{variant_id:123,quantity:1,selling_plan_allocation:{id:1}}]}],
 ['gift card',{items:[{variant_id:123,quantity:1,gift_card:true}]}],['properties',{items:[{variant_id:123,quantity:1,properties:{engraving:'preserve me'}}]}],
])test(`${brand}: unsupported ${label} preserves the bag and never offers native checkout`,async()=>{
 const bag={currency:'USD',items:[{variant_id:123,quantity:1}],total_price:30000,attributes:{},...extra},h=harness({cart:bag});
 h.click();await h.flush();assert.equal(h.submissions.length,0);assert.equal(h.dialogs.length,1);
 assert.ok(!h.dialogs[0].children.some(child=>child.tagName==='A'&&/checkout/.test(child.href||'')));h.unchanged();
});

test(`${brand}: an unrelated merchant origin cannot enable this integration`,async()=>{
 const h=harness({checkoutOrigin:'https://checkout.example.com'});assert.equal(h.click(),false);await h.flush();assert.equal(h.reads.length,0);assert.equal(h.submissions.length,0);
});

test(`${brand}: server-side handoff recovery retains the requested coupon`,async()=>{
 const h=harness({url:'/cart?checkout_retry=1&discount=FIXTURE25'});assert.equal(h.submissions.length,0);assert.equal(h.dialogs.length,1);
 h.dialogs[0].children.find(child=>child.textContent==='Try secure checkout again').events.click();await h.flush();
 assert.equal(h.submissions[0].action,checkout+'/start');assert.equal(h.submissions[0].fields.coupon,'FIXTURE25');h.unchanged();
});
