import"./assets/modulepreload-polyfill-ec808ebb.js";const e=document.querySelector(".feedback-form"),a="feedback-form-state",l=e.elements.email,m=e.elements.message;let t={};localStorage.getItem(a)&&(t=JSON.parse(localStorage.getItem(a)),l.value=t.email,m.value=t.message);e.addEventListener("input",r);function r(){const o={email:l.value.trim(),message:m.value.trim()};localStorage.setItem(a,JSON.stringify(o))}e.addEventListener("submit",s);function s(o){o.preventDefault(),l.value.trim()==""||m.value.trim()==""?alert("All form fields must be filled in."):(console.log(t),localStorage.removeItem(a),e.reset())}
//# sourceMappingURL=commonHelpers2.js.map