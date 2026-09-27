(function(){"use strict";if(window.outlightReviewBadgesLoaded)return;window.outlightReviewBadgesLoaded=true;const l="#C5A059";function m(){const e=document.querySelectorAll("script[src]");let t="",o="";for(const r of e){const a=r;if(a.src.includes("review-badge")){try{t=a.getAttribute("data-backend-url")||new URL(a.src).origin}catch{}o=a.getAttribute("data-brand")||"";break}}return{backendUrl:t||"http://localhost:3001",brandSlug:o}}function h(e,t){const o="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z";if(e==="full")return`<svg viewBox="0 0 24 24" width="${t}" height="${t}" style="flex-shrink:0"><path d="${o}" fill="${l}" stroke="${l}" stroke-width="1"/></svg>`;if(e==="half"){const r="orbh"+Math.random().toString(36).slice(2,6);return`<svg viewBox="0 0 24 24" width="${t}" height="${t}" style="flex-shrink:0"><defs><clipPath id="${r}"><rect x="0" y="0" width="12" height="24"/></clipPath></defs><path d="${o}" fill="${l}" stroke="${l}" stroke-width="1" clip-path="url(#${r})"/><path d="${o}" fill="none" stroke="${l}" stroke-width="1"/></svg>`}return`<svg viewBox="0 0 24 24" width="${t}" height="${t}" style="flex-shrink:0"><path d="${o}" fill="none" stroke="${l}" stroke-width="1" opacity="0.35"/></svg>`}function b(e){const t=Math.floor(e),o=e-t>=.25&&e-t<.75,a=e-t>=.75?t+1:t;let i="";for(let n=0;n<5;n++)n<a?i+=h("full",14):n===a&&o?i+=h("half",14):i+=h("empty",14);return i}function y(){if(document.getElementById("orb-styles"))return;const e=document.createElement("style");e.id="orb-styles",e.textContent=`
.orb-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.15s;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  line-height: 1;
}
.orb-badge:hover { opacity: 0.75; }
.orb-stars {
  display: inline-flex;
  align-items: center;
  gap: 1px;
}
.orb-count {
  font-size: 13px;
  font-weight: 400;
  color: #6B7280;
  white-space: nowrap;
}
`,document.head.appendChild(e)}async function p(){y();const{backendUrl:e,brandSlug:t}=m(),o=t?`?brand=${t}`:"",r=document.querySelectorAll(".outlight-review-badge, [data-outlight-badge]");if(r.length===0)return;const a=new Set;r.forEach(n=>{const s=n.getAttribute("data-product-handle");s&&a.add(s)});const i={};await Promise.all(Array.from(a).map(async n=>{try{const s=await fetch(`${e}/api/reviews/product/${encodeURIComponent(n)}/summary${o}`);s.ok&&(i[n]=await s.json())}catch{}})),r.forEach(n=>{const s=n.getAttribute("data-product-handle");if(!s)return;const d=i[s];if(!d||d.total_count===0){n.style.display="none";return}const c=document.createElement("a");c.className="orb-badge",c.href=(window.Shopify?.routes?.root||"/")+"products/"+encodeURIComponent(s)+"#outlight-reviews";const u=document.createElement("span");u.className="orb-stars",u.innerHTML=b(d.average_rating),c.appendChild(u);const f=document.createElement("span");f.className="orb-count",f.textContent=`${d.total_count} Review${d.total_count!==1?"s":""}`,c.appendChild(f),c.addEventListener("click",w=>{const g=document.getElementById("outlight-reviews");g&&g.getAttribute("data-product-handle")===s&&(w.preventDefault(),g.scrollIntoView({behavior:"smooth",block:"start"}))}),n.innerHTML="",n.appendChild(c)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",p):p()})();
