const hamburger = document.querySelector('.hamburger');
const cloEm = document.querySelector('.menu__close');
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu__list');
hamburger.addEventListener('click', function () {
  menu.classList.add('active');
});
cloEm.addEventListener('click', function () {
  menu.classList.remove('active');
});

menuList.addEventListener('click', function () {
  menu.classList.add('close');
});
hamburger.addEventListener('click', function () {
  menu.classList.remove('close');
});
