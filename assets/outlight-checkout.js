/* Load from Shopify's theme only after the customer checkout has passed launch tests. */
(() => {
  const config = window.OutlightCheckout;
  if (!config?.enabled || !config.origin) return;
  const origin = new URL(config.origin);
  if (origin.protocol !== 'https:') return;
  const offerKey='outlight_welcome_offer_v1';
  const normalizeCode=value=>String(value||'').trim().toUpperCase();
  const params=new URLSearchParams(location.search);
  try{if(params.get('clear_welcome')==='1')localStorage.removeItem(offerKey);else if(normalizeCode(params.get('discount'))==='OUTLIGHT25')localStorage.setItem(offerKey,JSON.stringify({code:'OUTLIGHT25',expires:Date.now()+7*86400000}));}catch{}
  function savedOffer(){try{const value=JSON.parse(localStorage.getItem(offerKey)||'null');return value?.code==='OUTLIGHT25'&&value.expires>Date.now()?'OUTLIGHT25':'';}catch{return '';}}
  let leaving = false;
  const copy={title:'Checkout needs another try',unavailable:'We could not open secure checkout. Your bag is saved. Try again, or continue with PayPal.',unsupported:'This bag needs our alternative checkout, where PayPal is currently available. You can also return to your bag or contact us for help.',retry:'Try secure checkout again',paypal:'Continue with PayPal',back:'Return to bag',help:'Contact Outlight',...(config.messages||{})};
  function showFailure(unsupported,codes=''){
    leaving=false;
    document.getElementById('outlight-checkout-recovery')?.remove();
    const dialog=document.createElement('dialog');dialog.id='outlight-checkout-recovery';dialog.className='ol-checkout-recovery';dialog.setAttribute('aria-labelledby','ol-checkout-recovery-title');
    const heading=document.createElement('h2');heading.id='ol-checkout-recovery-title';heading.textContent=copy.title;
    const text=document.createElement('p');text.textContent=unsupported?copy.unsupported:copy.unavailable;dialog.append(heading,text);
    if(!unsupported){const retry=document.createElement('button');retry.type='button';retry.textContent=copy.retry;retry.addEventListener('click',()=>{dialog.close();dialog.remove();void openCheckout();});dialog.appendChild(retry);}
    const paypal=document.createElement('a');paypal.href=codes?'/checkout?discount='+encodeURIComponent(codes):'/checkout';paypal.dataset.nativeCheckout='true';paypal.textContent=copy.paypal;dialog.appendChild(paypal);
    const back=document.createElement('button');back.type='button';back.textContent=copy.back;back.className='ol-checkout-back';back.addEventListener('click',()=>{dialog.close();dialog.remove();});dialog.appendChild(back);
    const help=document.createElement('a');help.href='mailto:info@outlight.us';help.textContent=copy.help;help.className='ol-checkout-help';dialog.appendChild(help);
    dialog.addEventListener('close',()=>dialog.remove());document.body.appendChild(dialog);dialog.showModal();
  }
  if(params.get('checkout_retry')==='1')showFailure(false);
  async function openCheckout() {
    if (leaving) return;
    leaving = true;
    let nativeCodes=savedOffer();
    try {
      const response = await fetch(`${window.Shopify?.routes?.root || '/'}cart.js`, {cache:'no-store',signal:AbortSignal.timeout(7000)});
      if (!response.ok) throw Error('Cart unavailable');
      const cart = await response.json();
      const codes=[...(cart.discount_codes||[]).filter(c=>c.applicable).map(c=>c.code),...(cart.cart_level_discount_applications||[]).filter(d=>d.type==='discount_code').map(d=>d.title)].map(normalizeCode);
      if(codes.length)nativeCodes=[...new Set(codes)].join(',');
      // Preserve unsupported cart features through the existing Shopify checkout.
      if (!cart.items?.length || cart.items.length > 20 || cart.currency !== 'USD' || cart.note || cart.total_price>250000 || Object.keys(cart.attributes || {}).some(key=>!key.startsWith('oa_'))) throw Error('unsupported');
      const coupon=codes.length?[...new Set(codes)].join(','):savedOffer();
      if(coupon.length>324||coupon.split(',').length>5||coupon.split(',').some(code=>code.length>64||/[\u0000-\u001f\u007f]/.test(code)))throw Error('unsupported');
      if (cart.items.some(item => item.selling_plan_allocation || item.gift_card || Object.keys(item.properties || {}).length || !Number.isSafeInteger(item.variant_id) || item.quantity < 1 || item.quantity > 10)) throw Error('unsupported');
      const ids = cart.items.map(item => String(item.variant_id));
      if (new Set(ids).size !== ids.length) throw Error('unsupported');
      const attributes={...cart.attributes};
      try{const state=JSON.parse(localStorage.getItem('outlight_attribution_v1')||'{}');for(const touch of ['ft','lt'])for(const [field,value]of Object.entries(state[touch]||{}))if(typeof value==='string')attributes[`oa_${touch}_${field}`]=value;}catch{}
      const privacy=window.Shopify?.customerPrivacy;
      const context={attributes,privacy:{analytics:privacy?.analyticsProcessingAllowed?.()===true,marketing:privacy?.marketingAllowed?.()===true}};
      // POST keeps advertising identifiers out of browser URLs and referrer headers.
      const form=document.createElement('form');form.method='POST';form.action=new URL('/start',origin).href;form.hidden=true;
      for(const [name,value]of Object.entries({items:cart.items.map(item=>`${item.variant_id}:${item.quantity}`).join(','),coupon,context:JSON.stringify(context)})){const input=document.createElement('input');input.type='hidden';input.name=name;input.value=value;form.appendChild(input);}
      document.body.appendChild(form);form.submit();
    } catch(error) {
      showFailure(error?.message==='unsupported',nativeCodes);
    }
  }
  document.addEventListener('click', event => {
    const control = event.target.closest?.('button[name="checkout"],input[name="checkout"],a[href="/checkout"],a[href="/cart/checkout"],[data-checkout-btn]');
    if(control?.closest('[data-native-checkout]'))return;
    if (!control || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault(); event.stopImmediatePropagation(); void openCheckout();
  }, true);
  document.addEventListener('submit', event => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;
    const action = new URL(form.action, window.location.origin);
    const checkoutForm = action.origin === window.location.origin && ['/checkout','/cart/checkout'].includes(action.pathname);
    if (!checkoutForm && event.submitter?.name !== 'checkout') return;
    event.preventDefault(); event.stopImmediatePropagation(); void openCheckout();
  }, true);
})();
