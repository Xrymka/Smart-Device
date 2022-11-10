const body = document.querySelector('body');
const accordionTitles = document.querySelectorAll('[data-footer="accordion"]');

const accordionHandler = (item) => {
  const parent = item.parentNode;
  if (parent.classList.contains('is-open')) {
    parent.classList.remove('is-open');
  } else {
    document.querySelectorAll('.is-open').forEach((child) => {
      child.classList.remove('is-open');
    });
    parent.classList.add('is-open');
  }
};

const initAccordion = () => {
  accordionTitles.forEach((item) => {
    const listener = () => accordionHandler(item);
    if (body.clientWidth < 375) {
      item.addEventListener('click', listener);
    } else {
      item.removeEventListener('click', listener);
    }
  });
};

export {initAccordion};
