import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const e={email:"",message:""},r="feedback-form-state",o=document.querySelector(".feedback-form"),m=o.querySelector('input[name="email"]'),n=o.querySelector("textarea");function l(){localStorage.setItem(r,JSON.stringify(e))}function i(){const t=localStorage.getItem(r);if(t){const a=JSON.parse(t);e.message=a.message||"",n.value=e.message,e.email=a.email||"",m.value=e.email}}i();o.addEventListener("submit",u);o.addEventListener("input",c);function c(t){const{name:a,value:s}=t.target;a in e&&(e[a]=s,l())}function u(t){if(t.preventDefault(),!e.email.trim()||!e.message.trim()){alert("Fill please all fields");return}o.reset(),localStorage.removeItem(r),e.email="",e.message=""}console.log(e);
//# sourceMappingURL=2-form.js.map