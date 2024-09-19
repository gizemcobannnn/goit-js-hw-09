import './css/styles.css';

const form = document.querySelector("#feedback-form");

export function listenForm(){
  form.addEventListener("input",(event)=>{
    const target = event.target;
    if(target.name === 'email'){
      console.log(`Email: ${target.value}`);
    }else if(target.name==='message'){
      console.log(`Message: ${target.value}`);
    }
  });
};

export function submitForm(){
  form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const email = form.elements['email'].value.trim();
    console.log(`Email: ${email}`);
    const message = form.elements['message'].value.trim();
    console.log(`Message: ${message}`);
    const objForm = {email:email,message:message}
    localStorage.setItem("feedback-form-state",JSON.stringify(objForm));
    console.log(`local storage: ${localStorage.getItem("feedback-form-state")}`);

  });
}

document.addEventListener("DOMContentLoaded", function() {
    listenForm();
    submitForm();
  });