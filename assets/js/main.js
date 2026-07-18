/*=============== TOAST ===============*/
class ToastNotification {
  constructor() {
    this.container = document.getElementById("toast-container");
  }

  show(type, title, message, duration = 4000) {
    if (!this.container) return null;
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;

    const iconMap = {
      success: "fa-solid fa-check-circle",
      error: "fa-solid fa-times-circle",
      warning: "fa-solid fa-exclamation-triangle",
      info: "fa-solid fa-info-circle",
    };

    const titleMap = {
      success: window.getLang && window.getLang() === "tr" ? "Başarılı!" : "Success!",
      error: window.getLang && window.getLang() === "tr" ? "Hata!" : "Error!",
      warning: window.getLang && window.getLang() === "tr" ? "Uyarı!" : "Warning!",
      info: window.getLang && window.getLang() === "tr" ? "Bilgi" : "Info",
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

    setTimeout(() => {
      if (toast.parentElement) {
        toast.classList.add("hiding");
        setTimeout(() => {
          if (toast.parentElement) toast.remove();
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

const toast = new ToastNotification();
window.toast = toast;

/*=============== HELPERS ===============*/
function currentLang() {
  return window.getLang ? window.getLang() : "en";
}

function localized(obj) {
  if (!obj) return "";
  if (typeof obj === "string") return obj;
  return obj[currentLang()] || obj.en || "";
}

function updateBilingualNodes() {
  document.querySelectorAll("[data-en][data-tr]").forEach(function (el) {
    el.textContent = currentLang() === "tr" ? el.getAttribute("data-tr") : el.getAttribute("data-en");
  });
}

document.addEventListener("langchange", updateBilingualNodes);
document.addEventListener("DOMContentLoaded", updateBilingualNodes);

/*=============== HEADER SCROLL ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  if (!header) return;
  window.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== RENDER PROJECTS (HOME) ===============*/
let mixerPortfolio = null;

function renderWorkCards() {
  const container = document.getElementById("work-container");
  if (!container || !window.PROJECTS) return;

  const detailLabel = window.t ? window.t("work.detail") : "Details";

  container.innerHTML = window.PROJECTS.map(function (project) {
    return `
      <div class="work__card mix ${project.category}">
        <img src="${project.image}" alt="${localized(project.title)}" class="work__img" loading="lazy" />
        <h3 class="work__title">${localized(project.title)}</h3>
        <p class="work__summary">${localized(project.summary)}</p>
        <a href="project.html?id=${project.id}" class="work__button">
          ${detailLabel}
          <i class="bx bxs-right-arrow-alt work__icon"></i>
        </a>
      </div>
    `;
  }).join("");

  if (typeof mixitup !== "undefined") {
    if (mixerPortfolio) {
      mixerPortfolio.destroy();
    }
    mixerPortfolio = mixitup(container, {
      selectors: { target: ".work__card" },
      animation: { duration: 300 },
    });
  }
}

function initWorkFilters() {
  const linkWork = document.querySelectorAll(".work__item");
  linkWork.forEach(function (item) {
    item.addEventListener("click", function () {
      linkWork.forEach(function (l) {
        l.classList.remove("active-work");
      });
      item.classList.add("active-work");

      const filter = item.getAttribute("data-filter");
      if (mixerPortfolio) {
        mixerPortfolio.filter(filter === "all" ? "all" : filter);
      }
    });
  });
}

/*=============== SWIPER ===============*/
function initSwiper() {
  if (typeof Swiper === "undefined") return;
  if (!document.querySelector(".testimonial__container")) return;

  new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576: { slidesPerView: 2 },
      768: { slidesPerView: 2, spaceBetween: 40 },
    },
  });
}

/*=============== EMAIL JS ===============*/
function initContactForm() {
  const contactForm = document.getElementById("contact-form");
  if (!contactForm || typeof emailjs === "undefined") return;

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const userName = contactForm.elements["user_name"].value.trim();
    const userEmail = contactForm.elements["user_email"].value.trim();
    const userMessage = contactForm.elements["user_project"].value.trim();
    const isTr = currentLang() === "tr";

    if (!userName || !userEmail || !userMessage) {
      toast.error(
        isTr ? "Lütfen tüm alanları doldurun" : "Please fill in all fields",
        isTr ? "Eksik Bilgi" : "Missing info"
      );
      return;
    }

    const loadingToast = toast.info(
      isTr ? "Mesajınız gönderiliyor..." : "Sending your message...",
      isTr ? "Gönderiliyor" : "Sending"
    );

    emailjs
      .sendForm("service_9yjqgr6", "template_5yjbq1h", "#contact-form", "U7eEM3ZXfKe2TDN3-")
      .then(
        function () {
          if (loadingToast && loadingToast.parentElement) loadingToast.remove();
          toast.success(
            isTr
              ? "Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağım."
              : "Your message was sent successfully!",
            isTr ? "Başarılı!" : "Success!"
          );
          contactForm.reset();
        },
        function () {
          if (loadingToast && loadingToast.parentElement) loadingToast.remove();
          toast.error(
            isTr
              ? "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin."
              : "Could not send the message. Please try again later.",
            isTr ? "Gönderim Hatası" : "Send error"
          );
        }
      );
  });
}

/*=============== SCROLL ACTIVE ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");
    const sectionsClass = document.querySelector(
      '.nav_menu a[href*="' + sectionId + '"]'
    );

    if (!sectionsClass) return;

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== THEME ===============*/
function initTheme() {
  const themeButton = document.getElementById("theme-button");
  if (!themeButton) return;

  const lightTheme = "light-theme";
  const iconTheme = "bx-sun";
  const selectedTheme = localStorage.getItem("selected-theme");
  const selectedIcon = localStorage.getItem("selected-icon");

  const getCurrentTheme = () =>
    document.body.classList.contains(lightTheme) ? "dark" : "light";
  const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

  if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](lightTheme);
    themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](iconTheme);
  }

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle(lightTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  });
}

/*=============== CV LINK (LANGUAGE AWARE) ===============*/
function initCvLink() {
  const link = document.getElementById("cv-link");
  if (!link) return;
  const setHref = () => {
    link.href =
      currentLang() === "tr"
        ? "assets/pdf/Yusuf_Incesu_CV_TR.pdf"
        : "assets/pdf/Yusuf_Incesu_CV_EN.pdf";
  };
  setHref();
  document.addEventListener("langchange", setHref);
}

/*=============== BACK TO TOP ===============*/
function initBackToTop() {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "to-top";
  btn.setAttribute("aria-label", "Back to top");
  btn.innerHTML = '<i class="bx bx-up-arrow-alt"></i>';
  document.body.appendChild(btn);

  const toggle = () => {
    if (window.scrollY > 400) btn.classList.add("show");
    else btn.classList.remove("show");
  };
  window.addEventListener("scroll", toggle);
  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  toggle();
}

/*=============== READING PROGRESS (blog post) ===============*/
function initReadingProgress() {
  const article = document.querySelector(".blog-post");
  if (!article) return;

  const bar = document.createElement("div");
  bar.className = "reading-progress";
  document.body.appendChild(bar);

  const update = () => {
    const rect = article.getBoundingClientRect();
    const total = article.offsetHeight - window.innerHeight;
    const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
    const pct = total > 0 ? (scrolled / total) * 100 : 0;
    bar.style.width = pct + "%";
  };
  window.addEventListener("scroll", update);
  window.addEventListener("resize", update);
  update();
}

/*=============== SCROLL REVEAL ===============*/
function initScrollReveal() {
  if (typeof ScrollReveal === "undefined") return;

  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
  });

  if (document.querySelector(".home__data")) {
    sr.reveal(".home__data");
    sr.reveal(".home__handle", { delay: 700 });
    sr.reveal(".home__social, .home__scroll", { delay: 900, origin: "bottom" });
  }

  sr.reveal(".about, .skills, .experience, .work, .blog-home, .testimonial, .page-hero, .blog-grid, .project-detail");
  if (document.querySelector(".contact")) {
    sr.reveal(".contact", { delay: 900, origin: "bottom" });
  }
}

/*=============== PAGE BOOT ===============*/
document.addEventListener("DOMContentLoaded", function () {
  initTheme();
  renderWorkCards();
  initWorkFilters();
  initSwiper();
  initContactForm();
  initCvLink();
  initBackToTop();
  initReadingProgress();
  initScrollReveal();
});

document.addEventListener("langchange", function () {
  renderWorkCards();
  const active = document.querySelector(".work__item.active-work");
  if (active && mixerPortfolio) {
    const filter = active.getAttribute("data-filter");
    mixerPortfolio.filter(filter === "all" ? "all" : filter);
  }
});
