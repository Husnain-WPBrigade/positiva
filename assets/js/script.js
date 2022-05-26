// ------------------------------ Feature - Card-Slider ---------------------
var swiper = new Swiper(".feature-card-slider", {
  slidesPerView: 4,
  spaceBetween: 12,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".feature-card-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".feature-card-next",
    prevEl: ".feature-card-prev",
  },

  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
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
    el: ".hero-slider-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".hero-slider-next",
    prevEl: ".hero-slider-prev",
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
    200: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
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
const searchInput = document.querySelector(".input-search");
const searchBtn = document.querySelector(".search-btn");
const dropdownBtn = document.querySelector(".dropdown-nav");
const dropdwonContent = document.querySelector(".dropdown-content");

btnTwo.addEventListener("click", () => {
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

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("menu-active");
  navbarMenu.classList.toggle("navbar-active");

  if (
    navbarMenu.classList.contains("navbar-active") &&
    window.matchMedia("(max-width: 840px)")
  ) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

function submitSearch(e) {
  e.preventDefault();
  searchInput.focus();
  searchInput.value = "";
}

searchBtn.addEventListener("click", submitSearch);

dropdownBtn.addEventListener("click", function () {
  dropdownBtn.classList.toggle("dropdown-active");
});

// -----------------------Logo Slider.
const logoSliderBreakpoint = window.matchMedia(`(min-width: 768px)`);
let logoSlider;

const logoSliderBreakChecker = function () {
  if (logoSliderBreakpoint.matches === true) {
    if (logoSlider !== undefined) logoSlider.destroy(true, true);

    return;
  } else if (logoSliderBreakpoint.matches === false) {
    return enableLogoSlider();
  }
};

const enableLogoSlider = function () {
  logoSlider = new Swiper(".logo-slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".logo-slider-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".logo-slider-next",
      prevEl: ".logo-slider-prev",
    },

    breakpoints: {
      767: {
        slidesPerGroup: 8,
        slidesPerView: 8,
      },
    },
  });
};

logoSliderBreakpoint.addListener(logoSliderBreakChecker);
logoSliderBreakChecker();
