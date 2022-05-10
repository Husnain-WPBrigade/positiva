var swiper = new Swiper(".hero-card-slider", {
  slidesPerView: 4,
  spaceBetween: 12,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    // when window width is >= 320px
    200: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    // when window width is >= 480px
    420: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
    980: {
      slidesPerView: 4,
      spaceBetween: 12,
    },
  },
});

//----------------------------- Hero Slider ------------------------------
var swiper = new Swiper(".hero-slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//----------------------------- Showcase-Card Slider ------------------------------

var swiper = new Swiper(".showcase-card-slider", {
  slidesPerView: 3,
  spaceBetween: 25,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    200: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    // when window width is >= 480px
    // 420: {
    //   slidesPerView: 2,
    //   spaceBetween: 12,
    // },
    // when window width is >= 640px
    440: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
  },
});

//----------------------------- content Slider ------------------------------
var swiper = new Swiper(".content-slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//----------------------------- banner-slider ------------------------------
var swiper = new Swiper(".banner-slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//----------------------------- Hero Cards Slider ----------------

const btnOne = document.querySelector(".btn-form-1");
const btnTwo = document.querySelector(".btn-form-2");
const formOne = document.querySelector(".select-form--1");
const formTwo = document.querySelector(".select-form--2");
const eventBtnOne = document.querySelector(".btn--event-1");
const eventBtnTwo = document.querySelector(".btn--event-2");
const eventBodyOne = document.querySelector(".event-form-body-1");
const eventBodyTwo = document.querySelector(".event-form-body-2");
const menuIcon = document.querySelector(".menu-icon");
const navbarMenu = document.querySelector(".navbar-container");

btnTwo.addEventListener("click", () => {
  console.log("worked");
  btnOne.classList.remove("btn-active");
  btnTwo.classList.add("btn-active");
  formOne.classList.remove("active");
  formTwo.classList.add("active");
});

btnOne.addEventListener("click", () => {
  btnTwo.classList.remove("btn-active");
  btnOne.classList.add("btn-active");
  formTwo.classList.remove("active");
  formOne.classList.add("active");
});

eventBtnOne.addEventListener("click", () => {
  eventBtnTwo.classList.remove("event-btn-active");
  eventBtnOne.classList.add("event-btn-active");
  eventBodyTwo.classList.remove("event-active");
  eventBodyOne.classList.add("event-active");
});

eventBtnTwo.addEventListener("click", () => {
  eventBtnOne.classList.remove("event-btn-active");
  eventBtnTwo.classList.add("event-btn-active");
  eventBodyOne.classList.remove("event-active");
  eventBodyTwo.classList.add("event-active");
});

menuIcon.addEventListener("click", (e) => {
  e.preventDefault();
  menuIcon.classList.toggle("menu-active");
  navbarMenu.classList.toggle("mobile-menu-hide");
});

// $('.menu-icon').on('click', function (e) {
//   e.preventDefault);
//   $(this).toggle('menu-active')
// })
