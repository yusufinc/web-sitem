/*=============== SEO HELPERS ===============*/
window.SITE = {
  name: "Yusuf İncesu",
  url: "https://yusufincesu.netlify.app",
  email: "yince8603@gmail.com",
  sameAs: [
    "https://github.com/yusufinc",
    "https://www.linkedin.com/in/yusuf-incesu/",
    "https://www.instagram.com/yusuf.incesuuu/",
  ],
};

window.injectJsonLd = function (data) {
  var script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

window.setPageMeta = function (options) {
  options = options || {};
  var title = options.title || "Yusuf İncesu | Software Developer";
  var description =
    options.description ||
    "Yusuf İncesu — Software developer focused on workflow platforms, .NET, web apps and databases.";
  var url = options.url || window.SITE.url + window.location.pathname.replace(/^\//, "/");
  var image = options.image || window.SITE.url + "/assets/img/favicon.png";
  var lang = window.getLang ? window.getLang() : "en";

  document.title = title;

  function upsertMeta(attr, key, content) {
    var el = document.querySelector("meta[" + attr + '="' + key + '"]');
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  upsertMeta("name", "description", description);
  upsertMeta("name", "author", window.SITE.name);
  upsertMeta("name", "robots", "index, follow, max-image-preview:large");
  upsertMeta("name", "theme-color", "#0d1520");
  upsertMeta("name", "language", lang === "tr" ? "Turkish" : "English");
  upsertMeta("property", "og:type", options.type || "website");
  upsertMeta("property", "og:site_name", window.SITE.name);
  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:url", url);
  upsertMeta("property", "og:image", image);
  upsertMeta("property", "og:locale", lang === "tr" ? "tr_TR" : "en_US");
  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", description);
  upsertMeta("name", "twitter:image", image);

  var canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", url);

  var alternateEn = document.querySelector('link[hreflang="en"]');
  if (!alternateEn) {
    alternateEn = document.createElement("link");
    alternateEn.setAttribute("rel", "alternate");
    alternateEn.setAttribute("hreflang", "en");
    document.head.appendChild(alternateEn);
  }
  alternateEn.setAttribute("href", url);

  var alternateTr = document.querySelector('link[hreflang="tr"]');
  if (!alternateTr) {
    alternateTr = document.createElement("link");
    alternateTr.setAttribute("rel", "alternate");
    alternateTr.setAttribute("hreflang", "tr");
    document.head.appendChild(alternateTr);
  }
  alternateTr.setAttribute("href", url);
};

window.personSchema = function () {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yusuf İncesu",
    url: window.SITE.url,
    email: window.SITE.email,
    jobTitle: "Software Developer",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Sakarya University",
    },
    knowsAbout: [
      "Workflow platforms",
      "C#",
      ".NET",
      "TypeScript",
      "PostgreSQL",
      "MSSQL",
      "REST APIs",
      "Synergy CSP",
      "eBA",
    ],
    sameAs: window.SITE.sameAs,
  };
};

window.websiteSchema = function () {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Yusuf İncesu Portfolio",
    url: window.SITE.url,
    inLanguage: ["en", "tr"],
    potentialAction: {
      "@type": "SearchAction",
      target: window.SITE.url + "/blog.html",
      "query-input": "required name=search_term_string",
    },
  };
};

window.faqSchema = function () {
  var isTr = window.getLang && window.getLang() === "tr";
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: isTr
          ? "Yusuf İncesu hangi alanlarda çalışıyor?"
          : "What does Yusuf İncesu work on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isTr
            ? "İş akışı platformları, .NET / C# backend, web arayüzleri ve veritabanı çözümleri."
            : "Workflow platforms, .NET / C# backends, web interfaces and database solutions.",
        },
      },
      {
        "@type": "Question",
        name: isTr
          ? "Hangi teknolojileri kullanıyor?"
          : "Which technologies does he use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isTr
            ? "C#, .NET, TypeScript, JavaScript, PostgreSQL, MSSQL, MongoDB, Redis, SQLite, Synergy CSP ve eBA / eBA Plus."
            : "C#, .NET, TypeScript, JavaScript, PostgreSQL, MSSQL, MongoDB, Redis, SQLite, Synergy CSP and eBA / eBA Plus.",
        },
      },
      {
        "@type": "Question",
        name: isTr ? "Nasıl iletişime geçilir?" : "How can I contact him?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isTr
            ? "yince8603@gmail.com adresine e-posta gönderebilir veya sitedeki iletişim formunu kullanabilirsiniz."
            : "Email yince8603@gmail.com or use the contact form on the website.",
        },
      },
    ],
  };
};
