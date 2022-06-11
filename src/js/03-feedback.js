var throttle = require('lodash.throttle');
const KEY_NAME = "feedback-form-state";

const formData = {};

const refs = {
    form: document.querySelector(".feedback-form"),
    textarea:document.querySelector(".feedback-form textarea"),
    email: document.querySelector("[name='email']"),
}

refs.form.addEventListener("submit", onFormSubmit);

refs.form.addEventListener('input', 
throttle(function(event) {
    formData[event.target.name] = event.target.value;
    
    localStorage.setItem(KEY_NAME, JSON.stringify(formData));
},500)

);

setTextFromLocal();

function onFormSubmit(event){
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(KEY_NAME);
    console.log( formData);
};

function setTextFromLocal(){
    const savedData = localStorage.getItem(KEY_NAME);

    if (savedData){
        refs.textarea.value = JSON.parse(savedData).message;
        refs.email.value = JSON.parse(savedData).email;
    }
    
}