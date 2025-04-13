var C=Object.defineProperty;var v=(n,e,t)=>e in n?C(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var T=(n,e,t)=>v(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const E="myTodos";function u(n){localStorage.setItem(E,JSON.stringify(n))}function L(){const n=localStorage.getItem(E);if(!n)return[];try{return JSON.parse(n)}catch(e){return console.error("Error parsing todos from localStorage",e),[]}}class w{constructor(){T(this,"todos",[]);this.todos=L()}addTodo(e,t){if(!e.trim()||![1,2,3].includes(t))return!1;const s={task:e,completed:!1,priority:t};return this.todos.push(s),!0}removeTodo(e){this.todos.splice(e,1),p("Todo was removed.","success")}markTodoCompleted(e){const t=this.todos[e];t&&(t.completed=!t.completed)}getTodos(){return this.todos}loadFromLocalStorage(e){this.todos=e}saveToLocalStorage(){return JSON.stringify(this.todos)}}const d=new w;m();const y=document.getElementById("todo-form"),S=document.getElementById("task"),I=document.getElementById("priority"),l=document.getElementById("message-container");y.addEventListener("submit",n=>{n.preventDefault();const e=S.value,t=I.value;if(!d.addTodo(e,Number(t))){p("Incorrect user input. Insert a task and a priority between 1 and 3.","error");return}u(d.getTodos()),m(),y.reset(),p("Todo was added!","success")});function p(n,e){l.innerText=n,l.className=`message ${e}`,setTimeout(()=>{l.innerText="",l.className="message"},3e3)}function m(){const n=document.getElementById("todo-container");n.innerHTML="";const e=d.getTodos();if(e.length===0){const t=document.createElement("tr"),s=document.createElement("td");s.colSpan=5,s.innerText="No todos to show right now.",t.appendChild(s),n.appendChild(t);return}e.forEach((t,s)=>{const o=document.createElement("tr"),r=document.createElement("td");r.innerText=t.task;const c=document.createElement("td");c.innerText=`${t.priority}`;const f=document.createElement("td");f.innerText=t.completed?"Completed":"Not completed";const g=document.createElement("td"),a=document.createElement("input");a.type="checkbox",a.checked=t.completed,a.addEventListener("change",()=>{d.markTodoCompleted(s),u(d.getTodos()),m()}),g.appendChild(a);const h=document.createElement("td"),i=document.createElement("button");i.classList.add("remove-button"),i.innerText="Remove",i.addEventListener("click",()=>{d.removeTodo(s),u(d.getTodos()),m()}),h.appendChild(i),o.appendChild(r),o.appendChild(c),o.appendChild(f),o.appendChild(g),o.appendChild(h),n.appendChild(o)})}
