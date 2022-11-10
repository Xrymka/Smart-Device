import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {resetDefaultClass} from './utils/remove-nojs';
import {initAccordion} from './modules/accordion';
import {initShowText} from './modules/more-btn';
import {initPhoneMask} from './modules/phone-mask';
import {resetDefaultForm} from './modules/reset-form';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('[data-form="form"]');
  // Utils
  resetDefaultClass();

  iosVhFix();

  // Modules
  initShowText();
  initPhoneMask();
  initAccordion();
  resetDefaultForm(form);

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });

  window.addEventListener('resize', ()=> {
    initAccordion();
  });
});

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
