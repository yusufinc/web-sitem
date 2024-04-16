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

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

/* Link active work */

/*=============== SWIPER TESTIMONIAL ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== LIGHT DARK THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
