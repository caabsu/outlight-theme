/* Load from Shopify's theme only after the customer checkout has passed launch tests. */
(() => {
  const config = window.OutlightCheckout;
  if (!config?.enabled || config.origin !== 'https://checkout.outlight.us') return;
  const origin = new URL(config.origin);
  if (origin.protocol !== 'https:') return;
  const offerKey='outlight_welcome_offer_v1';
  const normalizeCode=value=>String(value||'').trim().toUpperCase();
  const params=new URLSearchParams(location.search);
  try{if(params.get('clear_welcome')==='1')localStorage.removeItem(offerKey);else if(normalizeCode(params.get('discount'))==='OUTLIGHT25')localStorage.setItem(offerKey,JSON.stringify({code:'OUTLIGHT25',expires:Date.now()+7*86400000}));}catch{}
  function savedOffer(){try{const value=JSON.parse(localStorage.getItem(offerKey)||'null');return value?.code==='OUTLIGHT25'&&value.expires>Date.now()?'OUTLIGHT25':'';}catch{return '';}}
  const storeOrigin=window.location.origin||location.origin;
  const cartRoot=window.Shopify?.routes?.root||'/';
  const cartPath=cartRoot+'cart';
  function checkoutEntry(href){
    try{
      const url=new URL(href,storeOrigin);
      if(url.origin!==storeOrigin)return null;
      const native=['/checkout','/cart/checkout',cartRoot+'checkout',cartRoot+'cart/checkout'].includes(url.pathname.replace(/\/$/,''));
      const bridge=url.pathname===cartPath&&url.searchParams.get('whop_checkout')==='1';
      if(native||bridge)return{codes:url.searchParams.get('discount')||''};
      const prefix=[cartRoot+'discount/','/discount/'].find(path=>url.pathname.startsWith(path));
      if(prefix){
        const redirect=new URL(url.searchParams.get('redirect')||'/cart',storeOrigin);
        if(redirect.origin===storeOrigin&&['/checkout','/cart/checkout',cartRoot+'checkout',cartRoot+'cart/checkout'].includes(redirect.pathname))return{codes:decodeURIComponent(url.pathname.slice(prefix.length))};
      }
    }catch{}
    return null;
  }
  function rewriteCheckoutLinks(){
    for(const link of document.querySelectorAll?.('a[href]')||[]){
      const entry=checkoutEntry(link.getAttribute('href'));
      if(!entry)continue;
      const url=new URL(cartPath,storeOrigin);url.searchParams.set('whop_checkout','1');
      if(entry.codes)url.searchParams.set('discount',entry.codes);
      if(link.href!==url.href)link.href=url.href;
    }
  }
  rewriteCheckoutLinks();
  if(typeof MutationObserver!=='undefined')new MutationObserver(rewriteCheckoutLinks).observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['href']});
  let leaving = false;
  // Browser Back may restore this script with its navigation lock still set.
  window.addEventListener('pageshow',event=>{if(event.persisted)leaving=false;});
  async function readCart(){
    // Retry only this read, never the checkout submission or a payment request.
    for(let attempt=0;attempt<2;attempt++){
      try{
        const response=await fetch(`${window.Shopify?.routes?.root||'/'}cart.js`,{cache:'no-store',signal:AbortSignal.timeout(7000)});
        if(!response.ok)throw Error('Cart unavailable');
        return await response.json();
      }catch(error){if(attempt===1)throw error;}
    }
  }
  const copy={title:'Checkout needs another try',unavailable:'We could not open secure checkout. Your bag is saved. Please try again.',unsupported:'We could not transfer all the details in this bag to secure checkout. Your bag is saved. Return to your bag or contact us for help.',retry:'Try secure checkout again',back:'Return to bag',help:'Contact Outlight',...(config.messages||{})};
  function showFailure(unsupported,codes=''){
    leaving=false;
    document.getElementById('outlight-checkout-recovery')?.remove();
    const dialog=document.createElement('dialog');dialog.id='outlight-checkout-recovery';dialog.className='ol-checkout-recovery';dialog.setAttribute('aria-labelledby','ol-checkout-recovery-title');
    const heading=document.createElement('h2');heading.id='ol-checkout-recovery-title';heading.textContent=copy.title;
    const text=document.createElement('p');text.textContent=unsupported?copy.unsupported:copy.unavailable;dialog.append(heading,text);
    if(!unsupported){const retry=document.createElement('button');retry.type='button';retry.textContent=copy.retry;retry.addEventListener('click',()=>{dialog.close();dialog.remove();void openCheckout(codes);});dialog.appendChild(retry);}
    const back=document.createElement('button');back.type='button';back.textContent=copy.back;back.className='ol-checkout-back';back.addEventListener('click',()=>{dialog.close();dialog.remove();});dialog.appendChild(back);
    const help=document.createElement('a');help.href='mailto:info@outlight.us';help.textContent=copy.help;help.className='ol-checkout-help';dialog.appendChild(help);
    dialog.addEventListener('close',()=>dialog.remove());document.body.appendChild(dialog);dialog.showModal();
  }
  if(params.get('checkout_retry')==='1')showFailure(false,params.get('discount')||'');
  async function openCheckout(requestedCodes='') {
    if (leaving) return;
    leaving = true;
    let nativeCodes=requestedCodes||savedOffer();
    try {
      const cart = await readCart();
      const codes=[...requestedCodes.split(','),...(cart.discount_codes||[]).filter(c=>c.applicable).map(c=>c.code),...(cart.cart_level_discount_applications||[]).filter(d=>d.type==='discount_code').map(d=>d.title),...(cart.items||[]).flatMap(item=>(item.line_level_discount_allocations||[]).map(a=>a.discount_application).filter(d=>d?.type==='discount_code').map(d=>d.title))].map(normalizeCode).filter(Boolean);
      if(codes.length)nativeCodes=[...new Set(codes)].join(',');
      // Preserve unsupported cart features for review before secure checkout.
      if (!cart.items?.length || cart.items.length > 20 || cart.currency !== 'USD' || cart.note || cart.total_price>250000 || Object.keys(cart.attributes || {}).some(key=>!key.startsWith('oa_'))) throw Error('unsupported');
      const coupon=codes.length?[...new Set(codes)].join(','):savedOffer();
      if(coupon.length>324||coupon.split(',').length>5||coupon.split(',').some(code=>code.length>64||/[\u0000-\u001f\u007f]/.test(code)))throw Error('unsupported');
      if (cart.items.some(item => item.selling_plan_allocation || item.gift_card || Object.keys(item.properties || {}).length || !Number.isSafeInteger(item.variant_id) || !Number.isSafeInteger(item.quantity) || item.quantity < 1 || item.quantity > 10)) throw Error('unsupported');
      // Shopify may split an ordinary variant into multiple discount lines.
      // The server quotes variant quantities, so merge only validated plain lines.
      const checkoutItems=new Map();
      for(const item of cart.items){
        const previous=checkoutItems.get(item.variant_id);
        if(previous){
          if(previous.quantity+item.quantity>10)throw Error('unsupported');
          previous.quantity+=item.quantity;
        }else checkoutItems.set(item.variant_id,{variant_id:item.variant_id,quantity:item.quantity});
      }
      const attributes={...cart.attributes};
      try{const state=JSON.parse(localStorage.getItem('outlight_attribution_v1')||'{}');for(const touch of ['ft','lt'])for(const [field,value]of Object.entries(state[touch]||{}))if(typeof value==='string')attributes[`oa_${touch}_${field}`]=value;}catch{}
      const privacy=window.Shopify?.customerPrivacy;
      const context={attributes,privacy:{analytics:privacy?.analyticsProcessingAllowed?.()===true,marketing:privacy?.marketingAllowed?.()===true}};
      // POST keeps advertising identifiers out of browser URLs and referrer headers.
      const form=document.createElement('form');form.method='POST';form.action=new URL('/start',origin).href;form.hidden=true;
      for(const [name,value]of Object.entries({items:[...checkoutItems.values()].map(item=>`${item.variant_id}:${item.quantity}`).join(','),coupon,context:JSON.stringify(context)})){const input=document.createElement('input');input.type='hidden';input.name=name;input.value=value;form.appendChild(input);}
      document.body.appendChild(form);form.submit();
    } catch(error) {
      showFailure(error?.message==='unsupported',nativeCodes);
    }
  }
  document.addEventListener('click', event => {
    const control = event.target.closest?.('button[name="checkout"],input[name="checkout"],a[href],[data-checkout-btn]');
    if (!control || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const entry=control.tagName==='A'?checkoutEntry(control.href):null;
    if(control.tagName==='A'&&!entry)return;
    event.preventDefault(); event.stopImmediatePropagation(); void openCheckout(entry?.codes||'');
  }, true);
  document.addEventListener('submit', event => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;
    const action = new URL(form.action, window.location.origin);
    const checkoutForm = checkoutEntry(action.href);
    if (!checkoutForm && event.submitter?.name !== 'checkout') return;
    event.preventDefault(); event.stopImmediatePropagation(); void openCheckout(checkoutForm?.codes||'');
  }, true);
  const entry=checkoutEntry(location.href||storeOrigin+cartPath+location.search);
  if(entry&&new URLSearchParams(location.search).get('whop_checkout')==='1')void openCheckout(entry.codes);
})();
