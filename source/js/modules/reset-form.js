const resetDefaultForm = (form) => {
  if (form) {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      evt.target.reset();
    }, {once: true});
  }

};

export {resetDefaultForm};
