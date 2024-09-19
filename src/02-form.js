import './css/styles.css';

const form = document.querySelector("#feedback-form");

export function listenForm(){
  form.addEventListener("input",(event)=>{
    const target = event.target;
    if(target.name === 'email'){
      console.log(`${target.value}`);
    }else if(target.name==='message'){
      console.log(`${target.value}`);
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



  });
}

