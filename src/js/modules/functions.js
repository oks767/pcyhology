export function isWebp() {
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  });
}

export function mobileMenu() {
  const burgerBtn = document.querySelector('.header__burger');
  const closeBtn = document.querySelector('.header__mobile-close');
  const menu = document.querySelector('.header__top');
  burgerBtn.addEventListener('click', function () {
    menu.classList.add('header__top--active');
  });
  closeBtn.addEventListener('click', function () {
    menu.classList.remove('header__top--active');
  });
}

export function observer() {
  // устанавливаем настройки
  const options = {
    // родитель целевого элемента - область просмотра, не конкретный DOM элемент
    root: null,
    // без отступов
    rootMargin: '50px',
    // процент пересечения
    threshold: 0.7,
  };

  // создаем наблюдатель
  const observer = new IntersectionObserver((entries, observer) => {
    // для каждой записи-целевого элемента
    entries.forEach((entry) => {
      // если элемент является наблюдаемым
      if (entry.isIntersecting) {
        const tagTarget = entry.target;

        console.log('Наблюдатель работает');

        let aboutAnimate = document
          .querySelectorAll('.about--animate')
          .forEach(function (element) {
            element.classList.add('about--active');
          });
        // animate.classList.add('animate')

        // прекращаем наблюдение
        // observer.unobserve(tagTarget)
      }
    });
  }, options);

  // следим за всеми элементами с классом 'statistic__item' на странице
  const arr = document.querySelectorAll('.video__wrapper');

  const arrayAbout = document.querySelectorAll('.about__inner');
  arrayAbout.forEach((i) => {
    observer.observe(i);
  });

  arr.forEach((i) => {
    observer.observe(i);
  });
}

export function observerSocial() {
  // устанавливаем настройки
  const optionsSocial = {
    // родитель целевого элемента - область просмотра, не конкретный DOM элемент
    root: null,
    // без отступов
    rootMargin: '50px',
    // процент пересечения
    threshold: 0.7,
  };

  // создаем наблюдатель
  const observerSocial = new IntersectionObserver((entries, observer) => {
    // для каждой записи-целевого элемента
    entries.forEach((entry) => {
      // если элемент является наблюдаемым
      if (entry.isIntersecting) {
        const tagTarget = entry.target;

        console.log('Наблюдатель работает');

        let socialArray = document
          .querySelectorAll('.social__item')
          .forEach(function (item) {
            item.classList.add('social--active');
          });

        // animate.classList.add('animate')

        // прекращаем наблюдение
        // observer.unobserve(tagTarget)
      }
    });
  }, optionsSocial);

  // следим за всеми элементами с классом 'statistic__item' на странице

  const arrSocial = document.querySelectorAll('.social__icons');

  arrSocial.forEach((i) => {
    observerSocial.observe(i);
  });
}
export function observerVideo() {
  // устанавливаем настройки
  const optionsVideo = {
    // родитель целевого элемента - область просмотра, не конкретный DOM элемент
    root: null,
    // без отступов
    rootMargin: '50px',
    // процент пересечения
    threshold: 0.7,
  };

  // создаем наблюдатель
  const observerVideo = new IntersectionObserver((entries, observer) => {
    // для каждой записи-целевого элемента
    entries.forEach((entry) => {
      // если элемент является наблюдаемым
      if (entry.isIntersecting) {
        const tagTarget = entry.target;

        console.log('Наблюдатель работает');

        let array = document
          .querySelectorAll('.video__item')
          .forEach(function (elem) {
            elem.classList.add('video--active');
          });
        // animate.classList.add('animate')

        // прекращаем наблюдение
        // observer.unobserve(tagTarget)
      }
    });
  }, optionsVideo);

  // следим за всеми элементами с классом 'statistic__item' на странице
  const arr = document.querySelectorAll('.video__wrapper');

  arr.forEach((i) => {
    observerVideo.observe(i);
  });
}

export function modalActive() {
  const headerButton = document.querySelector('.header__button');
  const purposeButton = document.querySelector('.purpose__btn');
  const footerButton = document.querySelector('.footer__button');

  headerButton.addEventListener('click', function () {
    document.querySelector('.pop-up').classList.add('pop-up--active');
  });
  purposeButton.addEventListener('click', function () {
    document.querySelector('.pop-up').classList.add('pop-up--active');
  });
  footerButton.addEventListener('click', function () {
    document.querySelector('.pop-up').classList.add('pop-up--active');
  });
}
export function modalClose() {
  const closeModalButton = document.querySelector('.pop-up-close');
  closeModalButton.addEventListener('click', function () {
    document.querySelector('.pop-up').classList.remove('pop-up--active');
  });
}
