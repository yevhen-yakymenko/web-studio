(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-toggle-btn"),o=document.querySelectorAll(".nav__link"),c=o=>{t.classList.contains("active")&&(e.classList.remove("menu-open"),t.classList.remove("active")),console.log(o.target),console.log(o.currentTarget)};o.forEach((e=>e.addEventListener("click",c))),t.addEventListener("click",(o=>{const c="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!c),e.classList.toggle("menu-open"),t.classList.toggle("active"),bodyScrollLock[c?"enableBodyScroll":"disableBodyScroll"](document.body)}));const n=document.querySelector(".js-modal"),r=document.querySelector(".js-btn-form"),s=document.querySelector(".js-form"),a=document.querySelector(".js-btn-close");r.addEventListener("click",(()=>{n.classList.remove("modal-close"),document.body.classList.add("modal-open")})),n.addEventListener("click",(e=>{e.target!==e.currentTarget&&e.target!==a||(n.classList.add("modal-close"),document.body.classList.remove("modal-open"),s.reset())})),s.addEventListener("submit",(e=>{e.preventDefault(),new FormData(e.currentTarget).forEach(((e,t)=>console.log(`${t}: ${e}`))),n.classList.remove("modal-open"),e.currentTarget.reset()})),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("menu-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();
//# sourceMappingURL=index.b9b83925.js.map