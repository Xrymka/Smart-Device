const buttonMore = document.querySelector('[data-company="btn-more"]');
const textExtended = document.querySelector('[data-company="text"]');


const showText = () => {
  buttonMore.classList.toggle('about__btn--hidden');
  textExtended.classList.toggle('about__description--hidden');
};

const initShowText = () => {
  buttonMore.addEventListener('click', showText);
};

export {initShowText};
