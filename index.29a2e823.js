(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-toggle-btn"),o=document.querySelectorAll(".nav__link"),c=o=>{t.classList.contains("active")&&(e.classList.remove("menu-open"),t.classList.remove("active")),console.log(o.target),console.log(o.currentTarget)};o.forEach((e=>e.addEventListener("click",c))),t.addEventListener("click",(o=>{const c="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!c),e.classList.toggle("menu-open"),t.classList.toggle("active");bodyScrollLock[c?"enableBodyScroll":"disableBodyScroll"](document.body)}));const s=document.querySelector(".js-modal"),n=document.querySelector(".js-btn-form"),r=document.querySelector(".js-form"),a=document.querySelector(".js-btn-close");n.addEventListener("click",(()=>{s.classList.remove("modal-close"),document.body.classList.add("modal-open")})),s.addEventListener("click",(e=>{e.target!==e.currentTarget&&e.target!==a||(s.classList.add("modal-close"),document.body.classList.remove("modal-open"),r.reset())})),r.addEventListener("submit",(e=>{e.preventDefault(),new FormData(e.currentTarget).forEach(((e,t)=>console.log(`${t}: ${e}`))),s.classList.add("modal-close"),e.currentTarget.reset()})),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("menu-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();
//# sourceMappingURL=index.29a2e823.js.map
