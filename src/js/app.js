import * as flsFunctions from './modules/functions.js';
flsFunctions.isWebp();
flsFunctions.mobileMenu();
flsFunctions.observer();
flsFunctions.observerSocial();
flsFunctions.observerVideo();
flsFunctions.modalActive();
flsFunctions.modalClose();
window.onload = () => {
  observer();
  observerSocial();
  observerVideo();
};
// Подключение слайдера
import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  spaceBetween: 10,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },

  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
});
const testimonials = new Swiper('.swiper-testimonials', {
  modules: [Navigation, Pagination],
  spaceBetween: 10,
  slidesPerView: 1,
  autoplay: {
    delay: 1000,
  },
  pagination: {
    el: '.pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
