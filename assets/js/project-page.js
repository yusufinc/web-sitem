function localizedProject(obj) {
  var lang = window.getLang ? window.getLang() : "en";
  if (!obj) return "";
  if (typeof obj === "string") return obj;
  return obj[lang] || obj.en || "";
}

function getQueryId() {
  return new URLSearchParams(window.location.search).get("id");
}

function renderProjectPage() {
  var mount = document.getElementById("project-content");
  if (!mount) return;

  var project = window.getProjectById ? window.getProjectById(getQueryId()) : null;

  if (!project) {
    mount.innerHTML =
      '<p class="page-empty">' +
      (window.t ? window.t("project.notFound") : "Project not found.") +
      "</p>";
    return;
  }

  var title = localizedProject(project.title);
  var summary = localizedProject(project.summary);
  var description = localizedProject(project.description);
  var highlights = (project.highlights && localizedProject(project.highlights)) || [];

  document.title = title + " | Yusuf İncesu";

  var githubHtml = project.github
    ? '<a class="button" href="' +
      project.github +
      '" target="_blank" rel="noopener noreferrer">' +
      (window.t ? window.t("project.github") : "View on GitHub") +
      "</a>"
    : "";

  var highlightsHtml = "";
  if (Array.isArray(highlights) && highlights.length) {
    highlightsHtml =
      '<h2 class="project-detail__tech-title">' +
      (window.t ? window.t("project.highlights") : "Highlights") +
      '</h2><ul class="project-detail__highlights">' +
      highlights
        .map(function (item) {
          return "<li>" + item + "</li>";
        })
        .join("") +
      "</ul>";
  }

  var shots = project.screenshots;
  if (!shots && project.github) {
    shots = [
      "assets/img/projects/screens/" + project.id + "-1.png",
      "assets/img/projects/screens/" + project.id + "-2.png",
      "assets/img/projects/screens/" + project.id + "-3.png",
    ];
  }
  var shotsHtml = "";
  if (Array.isArray(shots) && shots.length) {
    shotsHtml =
      '<div class="project-detail__shots" id="project-shots">' +
      '<h2 class="project-detail__tech-title">' +
      (window.t ? window.t("project.screens") : "Screenshots") +
      '</h2><div class="project-detail__gallery">' +
      shots
        .map(function (src) {
          return (
            '<a class="project-shot" href="' +
            src +
            '" target="_blank" rel="noopener noreferrer">' +
            '<img src="' +
            src +
            '" alt="' +
            title +
            '" loading="lazy" onerror="var a=this.closest(\'.project-shot\'); if(a) a.remove();" />' +
            "</a>"
          );
        })
        .join("") +
      "</div></div>";
  }

  mount.innerHTML = `
    <div class="project-detail__media">
      <img src="${project.image}" alt="${title}" class="project-detail__img" loading="lazy" />
    </div>
    <div class="project-detail__body">
      <span class="project-detail__category">${project.category}</span>
      <h1 class="project-detail__title">${title}</h1>
      <p class="project-detail__summary">${summary}</p>
      <div class="project-detail__description blog-post__body"><p>${description}</p></div>
      ${highlightsHtml}
      ${shotsHtml}
      <h2 class="project-detail__tech-title">${
        window.t ? window.t("project.tech") : "Tech stack"
      }</h2>
      <ul class="project-detail__tech">
        ${(project.tech || [])
          .map(function (item) {
            return "<li>" + item + "</li>";
          })
          .join("")}
      </ul>
      <div class="project-detail__actions">${githubHtml}</div>
    </div>
  `;

  setTimeout(function () {
    var gallery = document.querySelector(".project-detail__gallery");
    var block = document.getElementById("project-shots");
    if (gallery && block && gallery.children.length === 0) {
      block.remove();
    }
  }, 2000);

  if (window.setPageMeta) {
    window.setPageMeta({
      title: title + " | Yusuf İncesu",
      description: summary,
      url: window.SITE.url + "/project.html?id=" + project.id,
      image: window.SITE.url + "/" + project.image,
      type: "article",
    });
  }

  if (window.injectJsonLd) {
    var old = document.querySelectorAll('script[data-project-schema="1"]');
    old.forEach(function (node) {
      node.remove();
    });
    var script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-project-schema", "1");
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: title,
      description: summary,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      url: window.SITE.url + "/project.html?id=" + project.id,
      image: window.SITE.url + "/" + project.image,
      author: { "@type": "Person", name: "Yusuf İncesu" },
    });
    document.head.appendChild(script);
  }
}

document.addEventListener("DOMContentLoaded", renderProjectPage);
document.addEventListener("langchange", renderProjectPage);
