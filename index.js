import{a as d,S as p,i as m}from"./assets/vendor-DggqAQP3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="49186769-dabefba962826c776b77806d1",f="https://pixabay.com/api/";function h(s){return d.get(f,{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>(console.error("Error fetching images:",t.message),[]))}const g=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function b(s){return s.map(({webformatURL:t,largeImageURL:o,tags:l,likes:e,views:r,comments:a,downloads:u})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img class="gallery-image" src="${t}" alt="${l}" loading="lazy" />
        </a>
        <div class="thumb-block">
          <div class="block"><h2 class="tittle">Likes</h2><p class="amount">${e}</p></div>
          <div class="block"><h2 class="tittle">Views</h2><p class="amount">${r}</p></div>
          <div class="block"><h2 class="tittle">Comments</h2><p class="amount">${a}</p></div>
          <div class="block"><h2 class="tittle">Downloads</h2><p class="amount">${u}</p></div>
        </div>
      </li>`).join("")}function v(s){const t=document.querySelector(".gallery");t.innerHTML=b(s),g.refresh()}function n(s){m.error({title:"Error",message:s,position:"topRight"})}const c=document.querySelector(".form"),L=document.querySelector(".input-search"),q=document.querySelector(".gallery"),i=document.querySelector(".loader");i.style.display="none";c.addEventListener("submit",function(s){s.preventDefault(),i.style.display="block";const t=L.value.trim();if(t===""){n("Please enter a search query!");return}q.innerHTML="",i.style.display="block",h(t).then(o=>{if(i.style.display="none",o.length===0){n("Sorry, there are no images matching your search query. Please try again!");return}v(o)}).catch(o=>{i.style.display="none",n("Error fetching images. Please try again!"),console.error("Помилка сервера:",o.message)}),c.reset()});
//# sourceMappingURL=index.js.map
