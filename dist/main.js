(()=>{"use strict";const t=class{constructor(t,e,o,n,d){this.isCompleted=t,this.title=e,this.description=o,this.dueDate=n,this.project=d}};let e=new Array;e.push(new t(!1,"test todo 1","test desc",null,null)),e.push(new t(!1,"test todo 2","test desc",null,null)),e.push(new t(!1,"test todo 3","test desc",null,null)),e.push(new t(!1,"test todo 4","test desc",null,null)),e.push(new t(!1,"test todo 5","test desc",null,null)),e.push(new t(!1,"test todo 6","test desc",null,null));const o=document.body,n=function(t){const e=document.createElement("div");return e.id="todo-list",t.forEach((t=>{const o=document.createElement("div");o.classList.add("todo");const n=document.createElement("button");n.type="button",n.addEventListener("click",(function(){n.innerHTML='<img src="../assets/icons/checkbox-outline.svg">'})),n.classList.add("completed-button");const d=document.createElement("img");d.src="../assets/icons/checkbox-blank-outline.svg",n.appendChild(d),o.appendChild(n);const s=document.createElement("h3");s.classList.add("todo-title"),s.textContent=t.title,o.appendChild(s),e.appendChild(o)})),e}(e);o.appendChild(n),document.getElementById("add-todo-button");const d=document.createElement("form");d.action="/add-todo",d.method="post",d.id="todo-form",d.autocomplete="off";const s=document.createElement("div");s.classList.add("todo-form-left-section");const c=document.createElement("div");c.type="button",c.id="todo-form-completed-button";const l=document.createElement("img");l.src="../assets/icons/checkbox-blank-outline.svg",c.appendChild(l),s.appendChild(c),d.appendChild(s);const i=document.createElement("div");i.classList.add("todo-form-middle-section");const a=document.createElement("input");a.type="text",a.id="todo-form-title",a.placeholder="new todo",i.appendChild(a);const u=document.createElement("textarea");u.id="todo-form-description",u.placeholder="description",u.rows="4",i.appendChild(u),d.appendChild(i);const m=document.createElement("div");m.classList.add("todo-form-right-section");const r=document.createElement("input");r.type="date",r.id="todo-form-date",m.appendChild(r);const p=document.createElement("div");p.type="button",p.id="todo-form-delete-button",p.addEventListener("click",(function(){d.remove()}));const h=document.createElement("img");h.src="../assets/icons/trash-can-outline.svg",p.appendChild(h),m.appendChild(p),d.appendChild(m),n.insertBefore(d,n.firstChild)})();