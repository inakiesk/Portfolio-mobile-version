let closeX = document.getElementById('closeX');
let toolbar = document.getElementById('toolbar');
let hamburger = document.getElementById('hamburger');

[closeX, toolbar, hamburger].forEach((elements) => {
  elements.addEventListener('click', function () {
    closeX.classList.toggle('hide');
    toolbar.classList.toggle('hide');
    hamburger.classList.toggle('hide');
  });
});