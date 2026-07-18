function localizedBlog(obj) {
  var lang = window.getLang ? window.getLang() : "en";
  if (!obj) return "";
  if (typeof obj === "string") return obj;
  return obj[lang] || obj.en || "";
}

function getQueryId() {
  return new URLSearchParams(window.location.search).get("id");
}

function renderBlogPost() {
  var mount = document.getElementById("blog-post-content");
  if (!mount) return;

  var post = window.getBlogPostById ? window.getBlogPostById(getQueryId()) : null;

  if (!post) {
    mount.innerHTML =
      '<p class="page-empty">' +
      (window.t ? window.t("blog.notFound") : "Post not found.") +
      "</p>";
    return;
  }

  var title = localizedBlog(post.title);
  var excerpt = localizedBlog(post.excerpt);
  var content = localizedBlog(post.content);
  var dateStr = window.formatBlogDate ? window.formatBlogDate(post.date) : post.date;
  var readStr = window.blogReadingTime ? window.blogReadingTime(post) : "";
  var t = window.t || function (k) { return k; };

  document.title = title + " | Yusuf İncesu";

  var pageUrl = window.location.href;
  var encUrl = encodeURIComponent(pageUrl);
  var encTitle = encodeURIComponent(title);
  var shareHtml =
    '<div class="blog-post__share">' +
    '<span class="blog-post__share-label">' + t("blog.share") + "</span>" +
    '<a class="share-btn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" href="https://www.linkedin.com/sharing/share-offsite/?url=' + encUrl + '"><i class="bx bxl-linkedin"></i></a>' +
    '<a class="share-btn" target="_blank" rel="noopener noreferrer" aria-label="X" href="https://twitter.com/intent/tweet?url=' + encUrl + "&text=" + encTitle + '"><i class="bx bxl-twitter"></i></a>' +
    '<a class="share-btn" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" href="https://api.whatsapp.com/send?text=' + encTitle + "%20" + encUrl + '"><i class="bx bxl-whatsapp"></i></a>' +
    '<button type="button" class="share-btn" id="copy-link-btn" aria-label="' + t("blog.copyLink") + '"><i class="bx bx-link"></i></button>' +
    "</div>";

  var related = (window.BLOG_POSTS || []).filter(function (p) {
    return (
      p.id !== post.id &&
      p.category &&
      post.category &&
      p.category.en === post.category.en
    );
  });
  (window.BLOG_POSTS || []).forEach(function (p) {
    if (related.length < 3 && p.id !== post.id && related.indexOf(p) === -1) {
      related.push(p);
    }
  });
  related = related.slice(0, 3);

  var relatedHtml = "";
  if (related.length) {
    relatedHtml =
      '<section class="blog-related"><h2 class="blog-related__title">' +
      t("blog.related") +
      '</h2><div class="blog-related__grid">' +
      related
        .map(function (p) {
          return (
            '<a class="blog-related__card" href="blog-post.html?id=' +
            p.id +
            '">' +
            '<img src="' +
            p.image +
            '" alt="' +
            localizedBlog(p.title) +
            '" class="blog-related__img" loading="lazy" />' +
            '<span class="blog-related__meta">' +
            (window.formatBlogDate ? window.formatBlogDate(p.date) : p.date) +
            " · " +
            localizedBlog(p.category) +
            "</span>" +
            '<h3 class="blog-related__name">' +
            localizedBlog(p.title) +
            "</h3>" +
            "</a>"
          );
        })
        .join("") +
      "</div></section>";
  }

  mount.innerHTML =
    '<img src="' +
    post.image +
    '" alt="' +
    title +
    '" class="blog-post__cover" loading="lazy" />' +
    '<span class="blog-post__meta">' +
    dateStr +
    " · " +
    localizedBlog(post.category) +
    (readStr ? " · " + readStr : "") +
    "</span>" +
    '<h1 class="blog-post__title">' +
    title +
    "</h1>" +
    '<p class="blog-post__lead">' +
    excerpt +
    "</p>" +
    '<div class="blog-post__body">' +
    content +
    "</div>" +
    shareHtml +
    relatedHtml;

  var copyBtn = document.getElementById("copy-link-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var done = function () {
        if (window.toast) window.toast.success(t("blog.copied"));
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(pageUrl).then(done, done);
      } else {
        done();
      }
    });
  }

  if (window.setPageMeta) {
    window.setPageMeta({
      title: title + " | Yusuf İncesu",
      description: excerpt,
      url: window.SITE.url + "/blog-post.html?id=" + post.id,
      image: window.SITE.url + "/" + post.image,
      type: "article",
    });
  }

  if (window.injectJsonLd) {
    document.querySelectorAll('script[data-blog-schema="1"]').forEach(function (node) {
      node.remove();
    });
    var script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "1");
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: title,
      description: excerpt,
      datePublished: post.date,
      image: window.SITE.url + "/" + post.image,
      author: { "@type": "Person", name: "Yusuf İncesu" },
      mainEntityOfPage: window.SITE.url + "/blog-post.html?id=" + post.id,
      inLanguage: window.getLang ? window.getLang() : "en",
    });
    document.head.appendChild(script);
  }
}

document.addEventListener("DOMContentLoaded", renderBlogPost);
document.addEventListener("langchange", renderBlogPost);
