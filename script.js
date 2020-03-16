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

// Переключение экрана у слайдера
let buttonVerticalPhone = document.querySelector('.slider__button-home--vertical');
let buttonHorizontalPhone = document.querySelector('.slider__button-home--horizontal');
let backgroundVerticalPhone = document.querySelector('.slider__image-bg--vertical');
let backgroundHorizontalPhone = document.querySelector('.slider__image-bg--horizontal');

buttonVerticalPhone.addEventListener('click', function () {
  backgroundVerticalPhone.classList.toggle('slider__image-bg--hidden')
});

buttonHorizontalPhone.addEventListener('click', function () {
  backgroundHorizontalPhone.classList.toggle('slider__image-bg--hidden')
});
