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
let allWorks = document.querySelectorAll('.portfolio__item');
let graphicWorks = document.querySelectorAll('.portfolio__item--graphic');
let webWorks = document.querySelectorAll('.portfolio__item--web');
let artworkWorks = document.querySelectorAll('.portfolio__item--artwork');

let allButtons = document.querySelectorAll('.portfolio__filter-button');
let allButton = document.querySelector('.portfolio__filter-button--all');
let webButton = document.querySelector('.portfolio__filter-button--web');
let graphicButton = document.querySelector('.portfolio__filter-button--graphic');
let artworkButton = document.querySelector('.portfolio__filter-button--artwork');

// let portfolioWorks = {
//   all: document.querySelectorAll('.portfolio__item'),
//   graphic: document.querySelectorAll('.portfolio__item--graphic'),
//   web: document.querySelectorAll('.portfolio__item--web'),
//   artwork: document.querySelectorAll('.portfolio__item--artwork'),
// };

// let portfolioButtons = {
//   all: document.querySelector('.portfolio__filter-button--all'),
//   web: document.querySelector('.portfolio__filter-button--web'),
//   graphic: document.querySelector('.portfolio__filter-button--graphic'),
//   artwork: document.querySelector('.portfolio__filter-button--artwork')
// };

allButton.addEventListener('click', function (evt) {
  allButtons.forEach(function (button) {
    button.classList.remove('portfolio__filter-button--active');
  });
  evt.target.classList.add('portfolio__filter-button--active');
  allWorks.forEach(function (work) {
    work.remove();
  });
  graphicWorks.forEach(function (work) {
    portfolioList.appendChild(work);
  });
  webWorks.forEach(function (work) {
    portfolioList.appendChild(work);
  });
  artworkWorks.forEach(function (work) {
    portfolioList.appendChild(work);
  });
});

webButton.addEventListener('click', function (evt) {
  allButtons.forEach(function (button) {
    button.classList.remove('portfolio__filter-button--active');
  });
  evt.target.classList.add('portfolio__filter-button--active');
  allWorks.forEach(function (work) {
    work.remove();
  });
  webWorks.forEach(function (work) {
    portfolioList.appendChild(work);
  });
  artworkWorks.forEach(function (work) {
    portfolioList.appendChild(work);
  });
  graphicWorks.forEach(function (work) {
    portfolioList.appendChild(work);
  });
});

graphicButton.addEventListener('click', function (evt) {
  allButtons.forEach(function (button) {
    button.classList.remove('portfolio__filter-button--active');
  });
  evt.target.classList.add('portfolio__filter-button--active');
  allWorks.forEach(function (work) {
    work.remove();
  });
  graphicWorks.forEach(function (work) {
    portfolioList.appendChild(work);
  });
  webWorks.forEach(function (work) {
    portfolioList.appendChild(work);
  });
  artworkWorks.forEach(function (work) {
    portfolioList.appendChild(work);
  });
});

artworkButton.addEventListener('click', function (evt) {
  allButtons.forEach(function (button) {
    button.classList.remove('portfolio__filter-button--active');
  });
  evt.target.classList.add('portfolio__filter-button--active');
  allWorks.forEach(function (work) {
    work.remove();
  });
  artworkWorks.forEach(function (work) {
    portfolioList.appendChild(work);
  });
  graphicWorks.forEach(function (work) {
    portfolioList.appendChild(work);
  });
  webWorks.forEach(function (work) {
    portfolioList.appendChild(work);
  });
});


// Взаимодействие с работой в портфолио
let works = document.querySelectorAll('.portfolio__item-link');
works.forEach(function (work) {
  work.addEventListener('click', function () {
    if (!work.classList.contains('portfolio__item-link--active')) {
      works.forEach(function(itemWork) {
        itemWork.classList.remove('portfolio__item-link--active');
      });
    }
    work.classList.toggle('portfolio__item-link--active');
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
