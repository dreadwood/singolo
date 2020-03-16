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


// Отправка формы
let form = document.querySelector('.form__fieldset');
let formSubject = form.querySelector('.form__input--subject');
let formDescription = form.querySelector('.form__textarea');
let modal = document.querySelector('.modal');
let modaltSubject = modal.querySelector('.modal__text--subject');
let modalDescription = modal.querySelector('.modal__text--description');
let modalButton = modal.querySelector('.modal__button');

function modalCloseHandler (evt) {
  evt.preventDefault();
  modal.classList.add('modal--hidden');
  form.reset();
  modalButton.removeEventListener('click', modalCloseHandler);
}

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal--hidden');

  if (formSubject.value !== '') {
    modaltSubject.textContent = 'Subject: ' + formSubject.value;
  } else {
    modaltSubject.innerText = 'Without subject';
  }

  if (formDescription.value !== '') {
    modalDescription.textContent = 'Description: ' + formDescription.value
  } else {
    modalDescription.textContent = 'Without description';
  }

  modalButton.addEventListener('click', modalCloseHandler);
})
