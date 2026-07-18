function localizedBlog(obj) {
  var lang = window.getLang ? window.getLang() : "en";
  if (!obj) return "";
  if (typeof obj === "string") return obj;
  return obj[lang] || obj.en || "";
}

var blogActiveCategory = "all";
var blogSearchTerm = "";

function blogCategories() {
  var seen = {};
  var list = [];
  (window.BLOG_POSTS || []).forEach(function (post) {
    var key = post.category && post.category.en ? post.category.en : "";
    if (key && !seen[key]) {
      seen[key] = true;
      list.push({ key: key, category: post.category });
    }
  });
  return list;
}

function renderBlogFilters() {
  var wrap = document.getElementById("blog-filters");
  if (!wrap) return;
  var allLabel = window.t ? window.t("blog.all") : "All";
  var html =
    '<button type="button" class="blog-filter' +
    (blogActiveCategory === "all" ? " active" : "") +
    '" data-cat="all">' +
    allLabel +
    "</button>";
  html += blogCategories()
    .map(function (c) {
      return (
        '<button type="button" class="blog-filter' +
        (blogActiveCategory === c.key ? " active" : "") +
        '" data-cat="' +
        c.key +
        '">' +
        localizedBlog(c.category) +
        "</button>"
      );
    })
    .join("");
  wrap.innerHTML = html;

  wrap.querySelectorAll(".blog-filter").forEach(function (btn) {
    btn.addEventListener("click", function () {
      blogActiveCategory = btn.getAttribute("data-cat");
      renderBlogFilters();
      renderBlogGrid();
    });
  });
}

function filteredPosts() {
  var term = blogSearchTerm.trim().toLowerCase();
  return (window.BLOG_POSTS || []).filter(function (post) {
    var catOk =
      blogActiveCategory === "all" ||
      (post.category && post.category.en === blogActiveCategory);
    if (!catOk) return false;
    if (!term) return true;
    var hay =
      (localizedBlog(post.title) + " " + localizedBlog(post.excerpt) + " " + localizedBlog(post.category)).toLowerCase();
    return hay.indexOf(term) !== -1;
  });
}

function renderBlogGrid() {
  var grid = document.getElementById("blog-grid");
  if (!grid || !window.BLOG_POSTS) return;

  var readLabel = window.t ? window.t("blog.read") : "Read more";
  var posts = filteredPosts();

  var empty = document.getElementById("blog-empty");
  if (empty) empty.hidden = posts.length !== 0;

  grid.innerHTML = posts
    .map(function (post) {
      return `
      <article class="blog-card">
        <a class="blog-card__media" href="blog-post.html?id=${post.id}">
          <img src="${post.image}" alt="${localizedBlog(post.title)}" class="blog-card__img" loading="lazy" />
        </a>
        <div class="blog-card__body">
          <span class="blog-card__meta">${window.formatBlogDate ? window.formatBlogDate(post.date) : post.date} · ${localizedBlog(post.category)} · ${window.blogReadingTime ? window.blogReadingTime(post) : ""}</span>
          <h2 class="blog-card__title">
            <a href="blog-post.html?id=${post.id}">${localizedBlog(post.title)}</a>
          </h2>
          <p class="blog-card__excerpt">${localizedBlog(post.excerpt)}</p>
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

function initBlogSearch() {
  var input = document.getElementById("blog-search-input");
  if (!input) return;
  input.addEventListener("input", function () {
    blogSearchTerm = input.value || "";
    renderBlogGrid();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderBlogFilters();
  initBlogSearch();
  renderBlogGrid();

  if (window.setPageMeta) {
    var isTr = window.getLang && window.getLang() === "tr";
    window.setPageMeta({
      title: isTr ? "Blog | Yusuf İncesu" : "Blog | Yusuf İncesu",
      description: isTr
        ? "İş akışı, .NET, veritabanı ve frontend üzerine yazılar."
        : "Notes on workflow, .NET, databases and frontend engineering.",
      url: window.SITE.url + "/blog.html",
      type: "website",
    });
  }

  if (window.injectJsonLd && window.BLOG_POSTS) {
    window.injectJsonLd({
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Yusuf İncesu Blog",
      url: window.SITE.url + "/blog.html",
      author: { "@type": "Person", name: "Yusuf İncesu" },
      blogPost: window.BLOG_POSTS.slice(0, 10).map(function (post) {
        return {
          "@type": "BlogPosting",
          headline: localizedBlog(post.title),
          datePublished: post.date,
          url: window.SITE.url + "/blog-post.html?id=" + post.id,
          image: window.SITE.url + "/" + post.image,
        };
      }),
    });
  }
});

document.addEventListener("langchange", function () {
  renderBlogFilters();
  renderBlogGrid();
});
