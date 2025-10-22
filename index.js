import{a as d,S as u,i as m}from"./assets/vendor-BSTwZ_tR.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function p(a){return d.get("https://pixabay.com/api/",{params:{key:"52741134-5926d2746c8ce75ed1523309f",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:36}}).then(s=>s.data.hits).catch(()=>[])}const o=document.querySelector(".gallery"),c=document.querySelector(".span-loader");document.querySelector(".form-btn-load");const y=new u(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:1});function f(a){const s=a.map(r=>`<li class="gallery-item">
                        <a class="gallery-link" href="${r.largeImageURL}">
                        <img
                            class="gallery-img"
                            src="${r.webformatURL}"
                            alt="${r.tags}"
                        />
                        <ul class="gallery-desc">
                            <li class="gallery-desc-item">
                                <span class="gallery-desc-item-name">Likes</span>
                                <span class="gallery-desc-item-value">${r.likes}</span>
                            </li>
                            <li class="gallery-desc-item">
                                <span class="gallery-desc-item-name">Views</span>
                                <span class="gallery-desc-item-value">${r.views}</span>
                            </li>
                            <li class="gallery-desc-item">
                                <span class="gallery-desc-item-name">Comments</span>
                                <span class="gallery-desc-item-value">${r.comments}</span>
                            </li>
                            <li class="gallery-desc-item">
                                <span class="gallery-desc-item-name">Downloads</span>
                                <span class="gallery-desc-item-value">${r.downloads}</span>
                            </li>
                        </ul>
                        </a>
                    </li>`).join("");o.insertAdjacentHTML("beforeend",s),y.refresh()}function g(){o.innerHTML=""}function h(){c.classList.add("loader")}function L(){c.classList.remove("loader")}const i=document.querySelector(".form"),v=a=>{a.preventDefault();const s=a.target.elements["search-text"].value.trim();i.reset(),s&&(g(),h(),p(s).then(r=>{if(L(),r.length===0)throw new Error("Invalid search query");f(r)}).catch(()=>{m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}))};i.addEventListener("submit",v);
//# sourceMappingURL=index.js.map
