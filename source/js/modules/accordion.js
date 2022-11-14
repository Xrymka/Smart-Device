const body = document.querySelector('body');
const accordionTitles = document.querySelectorAll('[data-footer="accordion"]');

const accordionHandler = (item) => {
  const parent = item.parentNode;
  if (body.clientWidth >= 768) {
    return;
  }

  parent.classList.toggle('is-open');

  document.querySelectorAll('.is-open').forEach((child) => {
    if (parent !== child) {
      child.classList.remove('is-open');
    }
  });
};

const initAccordion = () => {
  accordionTitles.forEach((item) => {
    item.addEventListener('click', () => accordionHandler(item));
  });
};

export {initAccordion};
