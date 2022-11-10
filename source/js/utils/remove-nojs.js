let nojsElements = document.querySelectorAll('.no-js');

const resetDefaultClass = () => {
  nojsElements.forEach((element) => {
    element.classList.remove('no-js');
  });

};

export {resetDefaultClass};
