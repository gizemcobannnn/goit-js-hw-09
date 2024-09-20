const form = document.querySelector("#feedback-form");

document.addEventListener("DOMContentLoaded", function() {
  const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formData) {
    form.elements['email'].value = formData.email;
    form.elements['message'].value = formData.message;
  }
  listenForm();
  submitForm();

});
export function listenForm(){

  if(localStorage.getItem("feedback-form-state")){
    const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));
    form.elements['email'].value = savedData.email || ''; // Eğer email yoksa boş bırak
    form.elements['message'].value = savedData.message || ''; // Eğer message yoksa boş bırak
  }

  form.addEventListener("input",(event)=>{
    const formData = {
      email: form.elements['email'].value.trim(),
      message: form.elements['message'].value.trim()
    };


    const target = event.target;
    if(target.name === 'email'){
      const email=target.value;
      console.log(`Email: ${formData.email}`);

    }else if(target.name==='message'){
      const message=target.value;
      console.log(`Message: ${formData.message}`);

    }
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    console.log(`local storage Email: ${formData.email}  Message: ${formData.message}`);

  });
};

export function submitForm(){
  form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const email = form.elements['email'].value.trim();
    const message = form.elements['message'].value.trim();
    if( email !== "" && message !== ""){

      console.log(`Email: ${email}`);
      console.log(`Message: ${message}`);
      const objForm = {email:email,message:message}
      localStorage.setItem("feedback-form-state",JSON.stringify(objForm));
      console.log(`local storage: ${localStorage.getItem("feedback-form-state")}`);

      form.reset();

      localStorage.removeItem("feedback-form-state");
  
    }else{
      alert("Please enter both values.");
    }

  });
}

