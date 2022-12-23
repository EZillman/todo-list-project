(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const m=document.querySelector("#newToDoForm"),f=document.querySelector("#newToDoField"),p=document.querySelector("#deadlineField"),g=document.querySelector("#sorting");let d=[""];function h(){d=JSON.parse(localStorage.getItem("toDos"))||[],r(),localStorage.setItem("toDos",JSON.stringify(d))}function L(o){if(o.preventDefault(),!(f.value.length===0||p.value.length===0)&&o!==void 0){const e={content:o.target.elements.toDoContent.value,complete:!1,createdAt:new Date().getTime(),deadline:o.target.elements.deadlineDate.value};d.push(e),r()}}function D(o){const e=d[o.target.dataset.id];e.complete=o.target.checked,localStorage.setItem("toDos",JSON.stringify(d));const s=o.target.parentElement.parentElement,c=o.target.nextElementSibling;e.complete?(s.classList.add("complete"),c.classList.add("checked")):(s.classList.remove("complete"),c.classList.remove("checked"))}function y(o){const e=o.target.dataset.id;d.splice(e,1),localStorage.setItem("toDos",JSON.stringify(d)),r()}function v(o){localStorage.setItem("toDos",JSON.stringify(d)),o.target.value==="deadline"&&d.sort((e,s)=>e.deadline===s.deadline?0:e.deadline<s.deadline?-1:1),o.target.value==="name"&&d.sort((e,s)=>{let c=e.content.toLowerCase(),t=s.content.toLowerCase();return c===t?0:c<t?-1:1}),o.target.value==="added"&&d.sort((e,s)=>s.createdAt===e.createdAt?0:s.createdAt<e.createdAt?-1:1),r()}function r(){localStorage.setItem("toDos",JSON.stringify(d));const o=document.querySelector("#thingsToDo");o.innerHTML="",d.forEach((e,s)=>{const c=document.createElement("li");c.classList.add("to-do-item");const t=document.createElement("div"),n=document.createElement("input"),l=document.createElement("label"),i=document.createElement("span"),u=document.createElement("span"),a=document.createElement("button");n.type="checkbox",n.checked=e.complete,t.classList.add("checkbox"),n.classList.add("check-btn"),n.setAttribute("data-id",s),l.htmlFor="checkBtn",l.classList.add("check-btn-style"),a.setAttribute("data-id",s),e.complete?(c.classList.add("complete"),l.classList.add("checked")):(c.classList.remove("complete"),l.classList.remove("checked")),n.ariaLabel="checkbox",i.classList.add("to-do-text"),u.classList.add("deadline"),a.classList.add("delete-btn"),i.innerHTML=`${e.content}`,u.innerHTML=`Deadline: ${e.deadline}`,a.innerHTML="Delete",c.appendChild(t),t.appendChild(n),t.appendChild(l),c.appendChild(i),c.appendChild(u),c.appendChild(a),o.appendChild(c),n.addEventListener("click",D),a.addEventListener("click",y),g.addEventListener("change",v)})}window.addEventListener("load",h);m.addEventListener("submit",L);
