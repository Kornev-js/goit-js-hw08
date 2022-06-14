

import throttle from 'lodash.throttle';

const formRefEl = document.querySelector('.feedback-form');
const KEY_NAME = 'feedback-form-state';
const formData = {};

const fillFormRefs = form => {
  const storageData = JSON.parse(
    localStorage.getItem(KEY_NAME)
  );
  

  for (const key in storageData) {
    if (storageData.hasOwnProperty(key)) {
      form.elements[key].value = storageData[key];
    }
  }
};

fillFormRefs(formRefEl);

const onFormInput = e => {
  

  formData[e.target.name] = e.target.value;

  localStorage.setItem(KEY_NAME, JSON.stringify(formData));
};

const onFormSubmit = e => {
  e.preventDefault();

  const formValues = {
    email: formRefEl.email.value,
    message: formRefEl.message.value,
  };

  console.log(formValues);

  e.currentTarget.reset();
  localStorage.removeItem(KEY_NAME);
};

formRefEl.addEventListener('input', throttle(onFormInput, 500));
formRefEl.addEventListener('submit', onFormSubmit);