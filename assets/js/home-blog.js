function localizedHomeBlog(obj) {
  var lang = window.getLang ? window.getLang() : "en";
  if (!obj) return "";
  if (typeof obj === "string") return obj;
  return obj[lang] || obj.en || "";
}

function renderHomeBlogPreview() {
  var grid = document.getElementById("home-blog-grid");
  if (!grid || !window.BLOG_POSTS) return;

  var readLabel = window.t ? window.t("blog.read") : "Read more";
  var posts = window.BLOG_POSTS.slice(0, 3);

  grid.innerHTML = posts
    .map(function (post) {
      return `
      <article class="blog-card">
        <a class="blog-card__media" href="blog-post.html?id=${post.id}">
          <img src="${post.image}" alt="${localizedHomeBlog(post.title)}" class="blog-card__img" loading="lazy" />
        </a>
        <div class="blog-card__body">
          <span class="blog-card__meta">${window.formatBlogDate ? window.formatBlogDate(post.date) : post.date} · ${localizedHomeBlog(post.category)} · ${window.blogReadingTime ? window.blogReadingTime(post) : ""}</span>
          <h3 class="blog-card__title">
            <a href="blog-post.html?id=${post.id}">${localizedHomeBlog(post.title)}</a>
          </h3>
          <p class="blog-card__excerpt">${localizedHomeBlog(post.excerpt)}</p>
          <a class="blog-card__link" href="blog-post.html?id=${post.id}">
            ${readLabel}
            <i class="bx bxs-right-arrow-alt"></i>
          </a>
        </div>
      </article>
    `;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", function () {
  renderHomeBlogPreview();

  if (window.setPageMeta) {
    var isTr = window.getLang && window.getLang() === "tr";
    window.setPageMeta({
      title: isTr
        ? "Yusuf İncesu | Yazılım Geliştirici"
        : "Yusuf İncesu | Software Developer",
      description: isTr
        ? "İş akışı platformları, .NET, web uygulamaları ve veritabanı çözümleri üzerine çalışan yazılım geliştirici."
        : "Software developer focused on workflow platforms, .NET, web apps and databases.",
      url: window.SITE.url + "/",
      image: window.SITE.url + "/assets/img/favicon.png",
    });
  }

  if (window.injectJsonLd) {
    window.injectJsonLd(window.personSchema());
    window.injectJsonLd(window.websiteSchema());
    window.injectJsonLd(window.faqSchema());
  }
});

document.addEventListener("langchange", function () {
  renderHomeBlogPreview();
  if (window.setPageMeta) {
    var isTr = window.getLang() === "tr";
    window.setPageMeta({
      title: isTr
        ? "Yusuf İncesu | Yazılım Geliştirici"
        : "Yusuf İncesu | Software Developer",
      description: isTr
        ? "İş akışı platformları, .NET, web uygulamaları ve veritabanı çözümleri üzerine çalışan yazılım geliştirici."
        : "Software developer focused on workflow platforms, .NET, web apps and databases.",
      url: window.SITE.url + "/",
    });
  }
});
