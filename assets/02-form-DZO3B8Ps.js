const e=document.querySelector("#feedback-form");document.addEventListener("DOMContentLoaded",function(){const a=JSON.parse(localStorage.getItem("feedback-form-state"));a&&(e.elements.email.value=a.email,e.elements.message.value=a.message),o(),m()});function o(){if(localStorage.getItem("feedback-form-state")){const a=JSON.parse(localStorage.getItem("feedback-form-state"));e.elements.email.value=a.email||"",e.elements.message.value=a.message||""}e.addEventListener("input",a=>{const t={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()},s=a.target;s.name==="email"?(s.value,console.log(`Email: ${t.email}`)):s.name==="message"&&(s.value,console.log(`Message: ${t.message}`)),localStorage.setItem("feedback-form-state",JSON.stringify(t)),console.log(`local storage Email: ${t.email}  Message: ${t.message}`)})}function m(){e.addEventListener("submit",a=>{a.preventDefault();const t=e.elements.email.value.trim(),s=e.elements.message.value.trim();if(t!==""&&s!==""){console.log(`Email: ${t}`),console.log(`Message: ${s}`);const l={email:t,message:s};localStorage.setItem("feedback-form-state",JSON.stringify(l)),console.log(`local storage: ${localStorage.getItem("feedback-form-state")}`),e.reset(),localStorage.removeItem("feedback-form-state")}else alert("Please enter both values.")})}
//# sourceMappingURL=02-form-DZO3B8Ps.js.map
