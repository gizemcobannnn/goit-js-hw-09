const t=document.querySelector("#feedback-form");function n(){t.addEventListener("input",o=>{const e=o.target;e.name==="email"?console.log(`Email: ${e.value}`):e.name==="message"&&console.log(`Message: ${e.value}`)})}function l(){t.addEventListener("submit",o=>{o.preventDefault();const e=t.elements.email.value.trim();console.log(`Email: ${e}`);const a=t.elements.message.value.trim();console.log(`Message: ${a}`);const s={email:e,message:a};localStorage.setItem("feedback-form-state",JSON.stringify(s)),console.log(`local storage: ${localStorage.getItem("feedback-form-state")}`)})}document.addEventListener("DOMContentLoaded",function(){n(),l()});
//# sourceMappingURL=02-form-BUa1tM-9.js.map
