/*=============== CV REQUEST FUNCTION ===============*/
/*=============== CV REQUEST FUNCTION ===============*/
function requestCV() {
  toast.info(
    "CV'nizi almak için lütfen <strong>yince8603@gmail.com</strong> adresine mail gönderin. En kısa sürede size CV'yi ekte göndereceğim! 📧",
    "CV Talebi"
  );

  // Contact form'daki Name alanına focus yap
  setTimeout(() => {
    const nameInput = document.querySelector('input[name="user_name"]');
    if (nameInput) {
      nameInput.focus();
      // Smooth scroll ile contact section'a git
      document.querySelector("#contact").scrollIntoView({
        behavior: "smooth",
      });
    }
  }, 500);
}

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

/*=============== TOAST NOTIFICATION SYSTEM ===============*/
class ToastNotification {
  constructor() {
    this.container = document.getElementById("toast-container");
  }

  show(type, title, message, duration = 4000) {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;

    const iconMap = {
      success: "fa-solid fa-check-circle",
      error: "fa-solid fa-times-circle",
      warning: "fa-solid fa-exclamation-triangle",
      info: "fa-solid fa-info-circle",
    };

    const titleMap = {
      success: "Başarılı!",
      error: "Hata!",
      warning: "Uyarı!",
      info: "Bilgi",
    };

    toast.innerHTML = `
      <div class="toast-header">
        <div class="toast-title">
          <i class="toast-icon ${iconMap[type]}"></i>
          ${title || titleMap[type]}
        </div>
        <button class="toast-close" onclick="this.parentElement.parentElement.remove()">
          <i class="fa-solid fa-times"></i>
        </button>
      </div>
      <div class="toast-message">${message}</div>
      <div class="toast-progress"></div>
    `;

    this.container.appendChild(toast);

    // Auto remove after duration
    setTimeout(() => {
      if (toast.parentElement) {
        toast.classList.add("hiding");
        setTimeout(() => {
          if (toast.parentElement) {
            toast.remove();
          }
        }, 300);
      }
    }, duration);

    return toast;
  }

  success(message, title) {
    return this.show("success", title, message);
  }

  error(message, title) {
    return this.show("error", title, message);
  }

  warning(message, title) {
    return this.show("warning", title, message);
  }

  info(message, title) {
    return this.show("info", title, message);
  }
}

// Global toast instance
const toast = new ToastNotification();

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  const userName = contactForm.elements["user_name"].value.trim();
  const userEmail = contactForm.elements["user_email"].value.trim();
  const userMessage = contactForm.elements["user_mesage"].value.trim();

  // Alanların boş olup olmadığını kontrol et
  if (userName === "" || userEmail === "" || userMessage === "") {
    toast.error("Lütfen tüm alanları doldurun", "Eksik Bilgi");
    return;
  }

  // Loading toast göster
  const loadingToast = toast.info("Mesajınız gönderiliyor...", "Gönderiliyor");

  emailjs
    .sendForm(
      "service_9yjqgr6",
      "template_5yjbq1h",
      "#contact-form",
      "U7eEM3ZXfKe2TDN3-"
    )
    .then(
      () => {
        // Loading toast'u kaldır
        if (loadingToast.parentElement) {
          loadingToast.remove();
        }

        // Başarı toast'u göster
        toast.success(
          "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.",
          "Başarılı!"
        );

        // Formu temizle
        contactForm.reset();
      },
      () => {
        // Loading toast'u kaldır
        if (loadingToast.parentElement) {
          loadingToast.remove();
        }

        // Hata toast'u göster
        toast.error(
          "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.",
          "Gönderim Hatası"
        );
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
