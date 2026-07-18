window.EXPERIENCE = [
  {
    role: { en: "Software Developer", tr: "Yazılım Geliştirici" },
    company: "SUMO Yazılım & Danışmanlık",
    type: { en: "Full-time", tr: "Tam zamanlı" },
    period: { en: "Aug 2024 - Present", tr: "Ağu 2024 - Devam ediyor" },
    location: { en: "Şişli, İstanbul", tr: "Şişli, İstanbul" },
    desc: {
      en: "Design, develop and deploy enterprise workflow solutions on Bimser Synergy (CSP) and eBA. Build REST APIs and integrations between external systems, configure complex access control, and develop custom modules with C#, .NET, TypeScript and JavaScript. Deliver reporting and data analysis with MSSQL / T-SQL, and handle troubleshooting in distributed production environments.",
      tr: "Bimser Synergy (CSP) ve eBA üzerinde kurumsal iş akışı çözümleri tasarlıyor, geliştiriyor ve devreye alıyorum. Dış sistemler arasında REST API'ler ve entegrasyonlar yazıyor, karmaşık erişim kontrolü yapılandırıyor; C#, .NET, TypeScript ve JavaScript ile özel modüller geliştiriyorum. MSSQL / T-SQL ile raporlama ve veri analizi sağlıyor, dağıtık üretim ortamlarında sorun çözümü yapıyorum.",
    },
    tech: ["Synergy (CSP)", "eBA", "REST API", "C#", ".NET", "MSSQL", "T-SQL", "TypeScript", "JavaScript"],
  },
  {
    role: { en: "Software Developer Intern", tr: "Yazılım Geliştirici Stajyeri" },
    company: "SUMO Yazılım & Danışmanlık",
    type: { en: "Internship", tr: "Staj" },
    period: { en: "Jun 2024 - Aug 2024", tr: "Haz 2024 - Ağu 2024" },
    location: { en: "İstanbul", tr: "İstanbul" },
    desc: {
      en: "Developed and published eBA workflow projects, created user accounts and defined access permissions, managed user support and issue resolution, and generated detailed SQL reports. Ran comprehensive testing for new projects using eBA, SQL and C# / .NET.",
      tr: "eBA iş akışı projeleri geliştirip yayınladım, kullanıcı hesapları oluşturup erişim izinlerini tanımladım, kullanıcı desteği ve sorun çözümü sağladım, ayrıntılı SQL raporları hazırladım. Yeni projeler için eBA, SQL ve C# / .NET ile kapsamlı testler yürüttüm.",
    },
    tech: ["eBA", "SQL", "C#", ".NET"],
  },
  {
    role: { en: "Software Developer Intern", tr: "Yazılım Geliştirici Stajyeri" },
    company: "XINERJI Software",
    type: { en: "Internship", tr: "Staj" },
    period: { en: "Feb 2024 - Jun 2024", tr: "Şub 2024 - Haz 2024" },
    location: { en: "Şişli, İstanbul", tr: "Şişli, İstanbul" },
    desc: {
      en: "Contributed to the Tmaxx ERP system: set up Metabase and built diverse reports, developed the Angular components required for Metabase integration, and wrote tailored PostgreSQL queries. Handled routine database maintenance — data cleansing, log monitoring and query optimization — and used Knime for database transfers and Docker for Metabase.",
      tr: "Tmaxx ERP sistemine katkı sağladım: Metabase kurulumu yapıp çeşitli raporlar oluşturdum, Metabase entegrasyonu için gerekli Angular bileşenlerini geliştirdim ve ihtiyaca özel PostgreSQL sorguları yazdım. Rutin veritabanı bakımı (veri temizleme, log takibi, sorgu optimizasyonu) yaptım; veritabanı aktarımları için Knime, Metabase için Docker kullandım.",
    },
    tech: ["Angular", "TypeScript", "SCSS", "PostgreSQL", "Metabase", "Knime", "Docker"],
  },
  {
    role: { en: "Software Intern", tr: "Yazılım Stajyeri" },
    company: "Arnavutköy Belediyesi",
    type: { en: "Internship", tr: "Staj" },
    period: { en: "Jul 2023 - Sep 2023", tr: "Tem 2023 - Eyl 2023" },
    location: { en: "Arnavutköy, İstanbul", tr: "Arnavutköy, İstanbul" },
    desc: {
      en: "In the IT department, learned to build an e-commerce site with Laravel, used Figma for UI design, and worked with Adobe tools (Illustrator, Photoshop) at a beginner level.",
      tr: "Bilgi işlem biriminde Laravel ile e-ticaret sitesi geliştirmeyi öğrendim, arayüz tasarımı için Figma kullandım ve Adobe araçlarıyla (Illustrator, Photoshop) başlangıç seviyesinde çalıştım.",
    },
    tech: ["PHP", "Laravel", "JavaScript", "Bootstrap", "MySQL", "Figma"],
    link: "https://github.com/yusufinc/e-commerce",
  },
];

(function () {
  function localizedExp(obj) {
    var lang = window.getLang ? window.getLang() : "en";
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    return obj[lang] || obj.en || "";
  }

  function renderExperience() {
    var mount = document.getElementById("experience-timeline");
    if (!mount || !window.EXPERIENCE) return;

    var linkLabel = window.t ? window.t("exp.link") : "View project";

    mount.innerHTML = window.EXPERIENCE.map(function (item) {
      var tech = (item.tech || [])
        .map(function (t) {
          return '<li class="timeline__tag">' + t + "</li>";
        })
        .join("");
      var link = item.link
        ? '<a class="timeline__link" href="' +
          item.link +
          '" target="_blank" rel="noopener noreferrer">' +
          linkLabel +
          ' <i class="bx bxl-github"></i></a>'
        : "";
      return (
        '<div class="timeline__item">' +
        '<div class="timeline__dot"></div>' +
        '<div class="timeline__card">' +
        '<div class="timeline__head">' +
        '<h3 class="timeline__role">' +
        localizedExp(item.role) +
        "</h3>" +
        '<span class="timeline__period">' +
        localizedExp(item.period) +
        "</span>" +
        "</div>" +
        '<span class="timeline__company">' +
        item.company +
        " · " +
        localizedExp(item.type) +
        "</span>" +
        '<p class="timeline__desc">' +
        localizedExp(item.desc) +
        "</p>" +
        '<ul class="timeline__tags">' +
        tech +
        "</ul>" +
        link +
        "</div>" +
        "</div>"
      );
    }).join("");
  }

  document.addEventListener("DOMContentLoaded", renderExperience);
  document.addEventListener("langchange", renderExperience);
})();
