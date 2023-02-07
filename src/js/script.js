const hamburger = document.querySelector('.hamburger');
const cloEm = document.querySelector('.menu__close');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
  menu.classList.add('active');
});
cloEm.addEventListener('click', function () {
  menu.classList.remove('active');
});
