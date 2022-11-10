const buttonMore = document.querySelector('[data-company="more"]');
const textMore = document.querySelector('[data-company="text"]');


const showText = () => {
  if (textMore.classList.contains('about__description--hidden')) {
    textMore.classList.remove('about__description--hidden');
    buttonMore.textContent = 'Свернуть';
  } else {
    textMore.classList.add('about__description--hidden');
    buttonMore.textContent = 'Подробнее';
  }
};

const initShowText = () => {
  buttonMore.addEventListener('click', showText);
};

export {initShowText};
