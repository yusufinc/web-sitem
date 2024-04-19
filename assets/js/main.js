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

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // Form alanlarını al
  const userName = contactForm.elements["user_name"].value.trim();
  const userEmail = contactForm.elements["user_email"].value.trim();
  const userMessage = contactForm.elements["user_mesage"].value.trim();

  // Alanların boş olup olmadığını kontrol et
  if (userName === "" || userEmail === "" || userMessage === "") {
    contactMessage.textContent = "Please fill out all fields ❌";
    return;
  }

  emailjs
    .sendForm(
      "service_9yjqgr6",
      "template_5yjbq1h",
      "#contact-form",
      "U7eEM3ZXfKe2TDN3-"
    )
    .then(
      () => {
        contactMessage.textContent = "Message sent successfully ✅";
        // Formu temizle
        contactForm.reset();
        // 3 saniye sonra mesajı gizle
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 3000);
      },
      () => {
        contactMessage.textContent = "Message not sent (service error) ❌ ";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav_menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the ligth-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the light / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset : true
});

sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, { delay: 700 });
sr.reveal(`.home__social, .home__scroll`, { delay: 900, origin: "bottom" });
sr.reveal(`.about, .skills, .services, .work, .testimonial`);
sr.reveal(`.contact`, { delay: 900, origin: "bottom" });
