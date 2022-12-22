(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const m=document.querySelector("#newToDoForm"),f=document.querySelector("#newToDoField"),p=document.querySelector("#deadlineField"),g=document.querySelector("#sorting");let s=[""];function h(){s=JSON.parse(localStorage.getItem("toDos"))||[],r(),localStorage.setItem("toDos",JSON.stringify(s))}function L(n){if(n.preventDefault(),!(f.value.length===0||p.value.length===0)&&n!==void 0){const e={content:n.target.elements.toDoContent.value,complete:!1,createdAt:new Date().getTime(),deadline:n.target.elements.deadlineDate.value};s.push(e),r()}}function D(n){const e=s[n.target.dataset.id];e.complete=n.target.checked,localStorage.setItem("toDos",JSON.stringify(s));const c=n.target.parentElement.parentElement,d=n.target.nextElementSibling;e.complete?(c.classList.add("complete"),d.classList.add("checked")):(c.classList.remove("complete"),d.classList.remove("checked"))}function y(n){const e=n.target.dataset.id;s.splice(e,1),localStorage.setItem("toDos",JSON.stringify(s)),r()}function v(n){localStorage.setItem("toDos",JSON.stringify(s)),n.target.value==="deadline"&&s.sort((e,c)=>e.deadline===c.deadline?0:e.deadline<c.deadline?-1:1),n.target.value==="name"&&s.sort((e,c)=>e.content===c.content?0:e.content<c.content?-1:1),n.target.value==="added"&&s.sort((e,c)=>c.createdAt===e.createdAt?0:c.createdAt<e.createdAt?-1:1),r()}function r(){localStorage.setItem("toDos",JSON.stringify(s));const n=document.querySelector("#thingsToDo");n.innerHTML="",s.forEach((e,c)=>{const d=document.createElement("li");d.classList.add("to-do-item");const t=document.createElement("div"),o=document.createElement("input"),l=document.createElement("label"),a=document.createElement("span"),u=document.createElement("span"),i=document.createElement("button");o.type="checkbox",o.checked=e.complete,t.classList.add("checkbox"),o.classList.add("check-btn"),o.setAttribute("data-id",c),l.htmlFor="checkBtn",l.classList.add("check-btn-style"),i.setAttribute("data-id",c),e.complete?(d.classList.add("complete"),l.classList.add("checked")):(d.classList.remove("complete"),l.classList.remove("checked")),a.classList.add("to-do-text"),u.classList.add("deadline"),i.classList.add("delete-btn"),a.innerHTML=`${e.content}`,u.innerHTML=`Deadline: ${e.deadline}`,i.innerHTML="Delete",d.appendChild(t),t.appendChild(o),t.appendChild(l),d.appendChild(a),d.appendChild(u),d.appendChild(i),n.appendChild(d),o.addEventListener("click",D),i.addEventListener("click",y),g.addEventListener("change",v)})}window.addEventListener("load",h);m.addEventListener("submit",L);