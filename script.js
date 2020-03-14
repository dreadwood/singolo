'use strict';

// Переход по странице с помощью навигации в header
let nav = document.querySelector('.nav');
let navItems = nav.querySelectorAll('.nav__item');

let section = {
  '#home': document.getElementById('home'),
  '#services': document.getElementById('services'),
  '#portfolio': document.getElementById('portfolio'),
  '#about': document.getElementById('about'),
  '#form': document.getElementById('form')
}

nav.addEventListener('click', function (evt) {
  evt.preventDefault();
  navItems.forEach(function (item) {
    item.classList.remove('nav__item--active');
  });
  evt.target.classList.add('nav__item--active');
  section[evt.target.hash].scrollIntoView({block: "start", behavior: "smooth"});
});
