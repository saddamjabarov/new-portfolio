const hamburger = document.querySelector('.hamburger');
const cloEm = document.querySelector('.menu__close');
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu__list');
const menuItem = document.querySelectorAll('.menu__item');
const close = document.querySelector('.close');
hamburger.addEventListener('click', function () {
  menu.classList.add('active');
});
cloEm.addEventListener('click', function () {
  menu.classList.remove('active');
});
hamburger.addEventListener('click', () => {
  menu.classList.remove('close');
});
menuItem.forEach((item) => {
  item.addEventListener('click', function () {
    item.classList.toggle('close');
    menu.classList.toggle('close');
  });
});
