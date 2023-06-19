const slides = document.querySelectorAll('.slide');

slides.forEach((el) => {
  el.addEventListener('click', () => {
    removeClass();
    el.classList.add('activ');
  });
});

function removeClass() {
  slides.forEach((el) => {
    el.classList.remove('activ');
  });
}
