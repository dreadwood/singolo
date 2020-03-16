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


// Слайдер карусель
let sliderSection = document.querySelector('.slider')
let sliderButtonBack = sliderSection.querySelector('.slider__control--back');
let sliderButtonNext = sliderSection.querySelector('.slider__control--next');
let sliders = sliderSection.querySelectorAll('.slider__item');
let curentSlide = 0;

function changeSlider () {
  sliderSection.classList.toggle('slider--blue');
  sliders.forEach(function(slide) {
    slide.classList.remove('slider__item--active');
  });
  sliders[curentSlide].classList.add('slider__item--active');
};

sliderButtonBack.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (curentSlide > 0) {
    curentSlide--;
  } else {
    curentSlide = sliders.length - 1;
  }
  changeSlider();
})

sliderButtonNext.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (curentSlide < sliders.length - 1) {
    curentSlide++;
  } else {
    curentSlide = 0;
  }
  changeSlider();
})


// Переключение экрана у слайдера
let buttonVerticalPhone = document.querySelector('.slider__button-home--vertical');
let buttonHorizontalPhone = document.querySelector('.slider__button-home--horizontal');
let buttonSlider2Phone = document.querySelector('.slider__button-home--slide2');
let backgroundVerticalPhone = document.querySelector('.slider__image-bg--vertical');
let backgroundHorizontalPhone = document.querySelector('.slider__image-bg--horizontal');
let backgroundSlide2Phone = document.querySelector('.slider__item--slide2 .slider__image-bg');

buttonVerticalPhone.addEventListener('click', function () {
  backgroundVerticalPhone.classList.toggle('slider__image-bg--hidden')
});

buttonHorizontalPhone.addEventListener('click', function () {
  backgroundHorizontalPhone.classList.toggle('slider__image-bg--hidden')
});

buttonSlider2Phone.addEventListener('click', function () {
  backgroundSlide2Phone.classList.toggle('slider__image-bg--slide2')
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
