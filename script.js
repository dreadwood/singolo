'use strict';

// Мобильное меню
let header = document.querySelector('.page-header');
let headerButton = document.querySelector('.page-header__toogle');
let headerShadow = document.querySelector('.page-header__shadow')

headerButton.addEventListener('click', function(evt) {
  evt.preventDefault;
  header.classList.toggle('page-header--open');
});

headerShadow.addEventListener('click', function(evt) {
  evt.preventDefault;
  header.classList.toggle('page-header--open');
});


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
  if (evt.target.classList.contains('nav__item')) {
    navItems.forEach(function (item) {
      item.classList.remove('nav__item--active');
    });
    evt.target.classList.add('nav__item--active');
    header.classList.toggle('page-header--open');
    section[evt.target.hash].scrollIntoView({block: "start", behavior: "smooth"});
  };
});

// document.addEventListener('scroll', function (evt) {
//   let section = document.querySelectorAll('section');
//   let currentY = window.scrollY;
//   // console.log(window.scrollY);

//   section.forEach(function (item) {
//     if (item.offsetTop <= currentY) {
//       navItems.forEach(function (item) {
//         item.classList.remove('nav__item--active');
//       });
//     }
//     console.log(item.offsetTop)
//   })
// })


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
  backgroundVerticalPhone.classList.toggle('slider__image-bg--off')
});

buttonHorizontalPhone.addEventListener('click', function () {
  backgroundHorizontalPhone.classList.toggle('slider__image-bg--off')
});

buttonSlider2Phone.addEventListener('click', function () {
  backgroundSlide2Phone.classList.toggle('slider__image-bg--off')
});


// Фильтр работ в портфолио
let portfolioList = document.querySelector('.portfolio__list');
let works = document.querySelectorAll('.portfolio__item');

let buttons = document.querySelectorAll('.portfolio__filter-button');
let allButton = document.querySelector('.portfolio__filter-button--all');
let listButtons = document.querySelector('.portfolio__filter');


listButtons.addEventListener('click', function (evt) {
  evt.preventDefault;

  if (evt.target.classList.contains('portfolio__filter-button')) {
    buttons.forEach(function (button) {
      button.classList.remove('portfolio__filter-button--active');
    });
    evt.target.classList.add('portfolio__filter-button--active');


    if (evt.target.classList.contains('portfolio__filter-button--all')) {
      works.forEach(function (work) {
        work.remove();
      });
      works.forEach(function (work) {
        portfolioList.appendChild(work);
      });
    } else {
      for (let i = 0; i < 2; i++) {
        let oldChild = portfolioList.removeChild(portfolioList.firstElementChild);
        portfolioList.appendChild(oldChild)
      }
    }
  }
});

// Взаимодействие с работой в портфолио
works.forEach(function (work) {
  work.addEventListener('click', function () {
    if (!work.classList.contains('portfolio__item--active')) {
      works.forEach(function(itemWork) {
        itemWork.classList.remove('portfolio__item--active');
      });
    }
    work.classList.toggle('portfolio__item--active');
  })
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
