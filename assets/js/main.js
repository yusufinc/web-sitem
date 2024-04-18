/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SERVICES MODAL ===============*/

document.addEventListener("click", function (event) {
  const clickedElement = event.target;

  if (clickedElement.classList.contains("services__button")) {
    const modal =
      clickedElement.parentElement.querySelector(".services__modal");
    modal.style.visibility = "visible";
    modal.style.opacity = 1;
  }

  if (clickedElement.classList.contains("services__modal-close")) {
    const modal = clickedElement.closest(".services__modal");
    modal.style.visibility = "hidden";
    modal.style.opacity = 0;
  }
});

// const modalViews = document.querySelectorAll(".service__modal"),
//   modalBtns = document.querySelectorAll(".service__button"),
//   modalCloseBtn = document.querySelectorAll(".service__modal-close");

// let modal = function (modalClick) {
//   modalViews[modalClick].classList.add("active-modal");
// };

// modalBtns.forEach((mb, i) => {
//   mb.addEventListener("click", () => {
//     modal(i);
//   });
// });

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active work */

const linkWork = document.querySelectorAll(".work__item");

// work__items.forEach((item) => {
//   item.addEventListener("click", addWorkItem);
// });

// function addWorkItem() {
//   // Tüm öğelerden "active-work" sınıfını kaldır
//   work__items.forEach((item) => {
//     item.classList.remove("active-work");
//   });

//   // Tıklanan öğeye "active-work" sınıfını ekle
//   this.classList.add("active-work");
// }

function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));
/*=============== SWIPER TESTIMONIAL ===============*/
let swiper = new Swiper(".testimonial__container", {
  spaceBetween: 24,

  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== LIGHT DARK THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
