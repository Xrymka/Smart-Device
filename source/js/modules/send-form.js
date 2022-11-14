import {modals} from './modals/init-modals';

const form = document.querySelectorAll('[data-form="form"]');

function serializeForm(formNode) {
  return new FormData(formNode);
}

function handleFormSubmit(event) {
  event.preventDefault();

  const data = serializeForm(event.target);
  localStorage.setItem('data', JSON.stringify(Object.fromEntries(data)));

  fetch('https://echo.htmlacademy.ru/', {
    method: 'POST',
    body: data,
  });

  setTimeout(() => {
    event.target.reset();
  }, 100);

  if (status === 200) {
    modals.open('success');
  }
}

const initForm = () => {
  if (!form) {
    return;
  }

  form.forEach((element) => {
    element.addEventListener('submit', handleFormSubmit);
  });
};

export {initForm};
