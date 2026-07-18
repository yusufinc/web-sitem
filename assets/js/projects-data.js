/* Project catalog — no company/client names */
window.PROJECTS = [
  {
    id: "is-ortagim",
    category: "mobile",
    image: "assets/img/projects/mobile-app.svg",
    github: "https://github.com/yusufinc/is-ortagim",
    title: {
      en: "İş Ortağım",
      tr: "İş Ortağım",
    },
    summary: {
      en: "Mobile app that connects entrepreneurs, investors and SMEs.",
      tr: "Girişimcileri, yatırımcıları ve KOBİ'leri buluşturan mobil uygulama.",
    },
    description: {
      en: "A React Native (Expo) mobile product for discovering partners, chatting and managing listings. It's built with TypeScript on top of a Supabase backend, so authentication, data and real-time chat all live behind one consistent API.",
      tr: "Ortak bulma, sohbet ve ilan yönetimi için React Native (Expo) mobil ürün. TypeScript ve Supabase altyapısıyla geliştirildi; kimlik doğrulama, veri ve gerçek zamanlı sohbet tek tutarlı bir API'nin arkasında yaşıyor.",
    },
    highlights: {
      en: [
        "Partner discovery feed with filters and listings",
        "In-app chat between entrepreneurs and investors",
        "TypeScript codebase with a Supabase backend",
        "Expo-based release flow tested on real devices",
      ],
      tr: [
        "Filtreli ortak bulma akışı ve ilanlar",
        "Girişimci ve yatırımcılar arası uygulama içi sohbet",
        "Supabase altyapılı TypeScript kod tabanı",
        "Gerçek cihazlarda test edilen Expo tabanlı yayın akışı",
      ],
    },
    tech: ["React Native", "Expo", "TypeScript", "Supabase"],
  },
  {
    id: "actsenso",
    category: "web",
    image: "assets/img/projects/monitoring.svg",
    github: "https://github.com/yusufinc/ActSenso",
    title: {
      en: "ActSenso",
      tr: "ActSenso",
    },
    summary: {
      en: "React frontend for activity tracking and operational dashboards.",
      tr: "Aktivite takibi ve operasyon panelleri için React arayüzü.",
    },
    description: {
      en: "A responsive web client for monitoring activity streams and basic operational metrics, with token-based login and a mobile-first layout.",
      tr: "Aktivite akışlarını ve temel operasyon metriklerini izlemek için responsive bir web istemcisi; token tabanlı giriş ve mobil öncelikli düzen içerir.",
    },
    highlights: {
      en: [
        "Dashboard for live activity streams",
        "Token-based authentication and protected routes",
        "Mobile-first layout built with Vite and React",
      ],
      tr: [
        "Canlı aktivite akışları için pano",
        "Token tabanlı kimlik doğrulama ve korumalı rotalar",
        "Vite ve React ile mobil-öncelikli düzen",
      ],
    },
    tech: ["React", "TypeScript", "Vite", "CSS"],
  },
  {
    id: "cozycose",
    category: "web",
    image: "assets/img/projects/web-app.svg",
    github: "https://github.com/yusufinc/CozyCose",
    title: {
      en: "CozyCose",
      tr: "CozyCose",
    },
    summary: {
      en: "ASP.NET web application with MVC structure and service layer.",
      tr: "MVC yapısı ve servis katmanına sahip ASP.NET web uygulaması.",
    },
    description: {
      en: "A small full-stack .NET web app with controllers, a service layer and server-rendered views for everyday business flows. The service layer keeps business rules separate from the MVC plumbing.",
      tr: "Günlük iş akışları için controller, servis katmanı ve sunucu taraflı view'lara sahip küçük bir tam yığın .NET web uygulaması. Servis katmanı, iş kurallarını MVC altyapısından ayrı tutar.",
    },
    highlights: {
      en: [
        "MVC structure with a dedicated service layer",
        "SQL-backed persistence for core business data",
        "Server-rendered views with shared layouts",
      ],
      tr: [
        "Ayrı bir servis katmanına sahip MVC yapısı",
        "Temel iş verileri için SQL destekli kalıcılık",
        "Paylaşılan layout'lara sahip sunucu taraflı view'lar",
      ],
    },
    tech: ["C#", "ASP.NET", "MVC", "SQL"],
  },
  {
    id: "daily-manager",
    category: "web",
    image: "assets/img/projects/web-app.svg",
    github: "https://github.com/yusufinc/DailyManager",
    title: {
      en: "Daily Manager",
      tr: "Daily Manager",
    },
    summary: {
      en: "Day-focused notes and todo application.",
      tr: "Gün odaklı not ve yapılacaklar uygulaması.",
    },
    description: {
      en: "Daily Manager gives each day its own notes and task list, so nothing from yesterday clutters today's view. It's a small, modern TypeScript web app built for personal productivity rather than team project management.",
      tr: "Daily Manager, her güne kendi not ve görev listesini verir; böylece dünden kalan hiçbir şey bugünün görünümünü kalabalıklaştırmaz. Ekip proje yönetiminden çok kişisel verimlilik için hazırlanmış küçük, modern bir TypeScript web uygulaması.",
    },
    highlights: {
      en: [
        "Per-day notes and task lists",
        "Local persistence between sessions",
        "Minimal, distraction-free React UI",
        "Built entirely in TypeScript",
      ],
      tr: [
        "Güne özel not ve görev listeleri",
        "Oturumlar arası lokal kalıcılık",
        "Dikkat dağıtmayan sade React arayüzü",
        "Tamamen TypeScript ile geliştirildi",
      ],
    },
    tech: ["TypeScript", "React", "CSS"],
  },
  {
    id: "baklava-site",
    category: "web",
    image: "assets/img/projects/web-app.svg",
    github: "https://github.com/yusufinc/bababakava",
    title: {
      en: "Baklava Business Site",
      tr: "Baklava İşletme Sitesi",
    },
    summary: {
      en: "Corporate website for a baklava business.",
      tr: "Baklava işletmesi için kurumsal web sitesi.",
    },
    description: {
      en: "A marketing-focused site built with React, TypeScript, Vite and Tailwind CSS for a local food business. The goal was a fast, clean presentation of products and contact details, without naming the business itself here.",
      tr: "Yerel bir gıda işletmesi için React, TypeScript, Vite ve Tailwind CSS ile hazırlanmış, tanıtım odaklı bir site. Hedef, işletmenin adını burada belirtmeden ürünlerin ve iletişim bilgilerinin hızlı ve sade bir şekilde sunulmasıydı.",
    },
    highlights: {
      en: [
        "Fast-loading marketing pages with Vite",
        "Tailwind CSS for consistent, responsive styling",
        "Product showcase and contact sections",
      ],
      tr: [
        "Vite ile hızlı yüklenen tanıtım sayfaları",
        "Tutarlı, responsive stil için Tailwind CSS",
        "Ürün vitrini ve iletişim bölümleri",
      ],
    },
    tech: ["React", "TypeScript", "Vite", "Tailwind"],
  },
  {
    id: "construction-site",
    category: "web",
    image: "assets/img/projects/web-app.svg",
    github: "https://github.com/yusufinc/ersa-yapi",
    title: {
      en: "Construction Corporate Site",
      tr: "İnşaat Kurumsal Sitesi",
    },
    summary: {
      en: "SEO-first corporate website for a construction business.",
      tr: "İnşaat işletmesi için SEO odaklı kurumsal web sitesi.",
    },
    description: {
      en: "A Next.js corporate site built around programmatic SEO pages, blog content and structured data for a construction company, kept anonymous here. Discoverability was the primary design constraint from the start.",
      tr: "Bir inşaat firması için programatik SEO sayfaları, blog içeriği ve yapılandırılmış veri etrafında kurulmuş, burada isimsiz tutulan bir Next.js kurumsal sitesi. Baştan itibaren temel tasarım kısıtı bulunabilirlikti.",
    },
    highlights: {
      en: [
        "Programmatically generated SEO landing pages",
        "Structured data (JSON-LD) for rich results",
        "Blog section for ongoing content marketing",
        "Server-side rendering with Next.js",
      ],
      tr: [
        "Programatik olarak üretilen SEO iniş sayfaları",
        "Zengin sonuçlar için yapılandırılmış veri (JSON-LD)",
        "Sürekli içerik pazarlaması için blog bölümü",
        "Next.js ile sunucu taraflı render",
      ],
    },
    tech: ["Next.js", "TypeScript", "Tailwind", "SEO"],
  },
  {
    id: "tcmb-rate-sync",
    category: "database",
    image: "assets/img/projects/database.svg",
    github: "https://github.com/yusufinc/TCMBRateSync",
    title: {
      en: "TCMB Rate Sync",
      tr: "TCMB Kur Senkronu",
    },
    summary: {
      en: "Syncs TCMB exchange rates into a SQL database.",
      tr: "TCMB döviz kurlarını SQL veritabanına senkronize eder.",
    },
    description: {
      en: "A C# automation tool that pulls the Turkish Central Bank's (TCMB) official exchange rates on a schedule and writes them into SQL storage for downstream ERP and workflow integrations. It's built to run unattended, with retries and clear failure logging.",
      tr: "Türkiye Cumhuriyet Merkez Bankası'nın (TCMB) resmi döviz kurlarını belirli aralıklarla çekip ERP ve iş akışı entegrasyonları için SQL depolamasına yazan bir C# otomasyon aracı. Gözetimsiz çalışacak, yeniden deneme mantığına ve açık hata loglamasına sahip şekilde tasarlandı.",
    },
    highlights: {
      en: [
        "Scheduled pull of daily TCMB exchange rate data",
        "Automated SQL updates for downstream systems",
        "Retry logic for transient network failures",
        "Logging for unattended, scheduled runs",
      ],
      tr: [
        "Günlük TCMB döviz kuru verisinin zamanlanmış çekimi",
        "Alt sistemler için otomatik SQL güncellemeleri",
        "Geçici ağ hataları için yeniden deneme mantığı",
        "Gözetimsiz, zamanlanmış çalıştırmalar için loglama",
      ],
    },
    tech: ["C#", "SQL", "Automation"],
  },
  {
    id: "bookstore-api",
    category: "web",
    image: "assets/img/projects/api.svg",
    github: "https://github.com/yusufinc/BookStoreAPI",
    title: {
      en: "BookStore API",
      tr: "BookStore API",
    },
    summary: {
      en: "REST API for bookstore inventory and orders.",
      tr: "Kitapçı envanter ve siparişleri için REST API.",
    },
    description: {
      en: "An ASP.NET Core API with Entity Framework, Swagger docs and a clean layered structure for managing inventory, orders and catalog data. Originally built as a practical test-case project to demonstrate a straightforward, well-organized Web API.",
      tr: "Envanter, sipariş ve katalog verisini yönetmek için Entity Framework, Swagger dokümantasyonu ve temiz katmanlı yapıya sahip bir ASP.NET Core API. Sade ve düzenli bir Web API göstermek amacıyla pratik bir test-case projesi olarak geliştirildi.",
    },
    highlights: {
      en: [
        "CRUD endpoints for books, orders and inventory",
        "EF Core migrations for schema evolution",
        "Swagger docs generated from the API contract",
        "Layered structure separating controllers and services",
      ],
      tr: [
        "Kitap, sipariş ve envanter için CRUD uç noktaları",
        "Şema evrimi için EF Core migration'ları",
        "API sözleşmesinden üretilen Swagger dokümantasyonu",
        "Controller ve servisleri ayıran katmanlı yapı",
      ],
    },
    tech: ["ASP.NET Core", "EF Core", "SQL Server", "Swagger"],
  },
  {
    id: "growthhub",
    category: "web",
    image: "assets/img/projects/web-app.svg",
    github: "https://github.com/yusufinc/GrowthHub",
    title: {
      en: "GrowthHub",
      tr: "GrowthHub",
    },
    summary: {
      en: "Personal growth and habit tracking web platform.",
      tr: "Kişisel gelişim ve alışkanlık takip web platformu.",
    },
    description: {
      en: "GrowthHub is a web platform designed to help users track their personal development and habits efficiently, with daily check-ins and simple progress views over time.",
      tr: "GrowthHub, kullanıcıların kişisel gelişimlerini ve alışkanlıklarını verimli bir şekilde takip etmelerine yardımcı olmak için tasarlanmış bir web platformu; günlük kontrol noktaları ve zaman içinde sade ilerleme görünümleri sunar.",
    },
    highlights: {
      en: [
        "Habit tracking with daily check-ins",
        "Progress views over weeks and months",
        "Simple, focused web UI for staying consistent",
      ],
      tr: [
        "Günlük kontrol noktalarıyla alışkanlık takibi",
        "Haftalar ve aylar üzerinden ilerleme görünümleri",
        "Tutarlılığı desteklemek için sade, odaklı web arayüzü",
      ],
    },
    tech: ["PHP", "Web", "SQL"],
  },
  {
    id: "act-monitoring",
    category: "web",
    image: "assets/img/projects/monitoring.svg",
    github: "",
    title: {
      en: "Act Monitoring",
      tr: "Act Monitoring",
    },
    summary: {
      en: "Monitoring solution for activity and operational logs.",
      tr: "Aktivite ve operasyon logları için izleme çözümü.",
    },
    description: {
      en: "A local monitoring tool that watches activity streams and operational logs in near real time, with basic alerts when something looks off.",
      tr: "Aktivite akışlarını ve operasyon loglarını gerçek zamana yakın izleyen, bir şeyler tuhaf göründüğünde temel uyarılar veren lokal bir izleme aracı.",
    },
    highlights: {
      en: [
        "Near real-time view of activity and log streams",
        "Alerting for unusual operational signals",
        "Built with C# and .NET for local deployment",
      ],
      tr: [
        "Aktivite ve log akışlarının gerçek zamana yakın görünümü",
        "Olağandışı operasyon sinyalleri için uyarı",
        "Lokal dağıtım için C# ve .NET ile geliştirildi",
      ],
    },
    tech: ["C#", ".NET", "Monitoring"],
  },
  {
    id: "invoice-compare",
    category: "database",
    image: "assets/img/projects/database.svg",
    github: "",
    title: {
      en: "Invoice Compare Tool",
      tr: "Fatura Karşılaştırma Aracı",
    },
    summary: {
      en: "Compares invoice data sets and highlights differences.",
      tr: "Fatura veri setlerini karşılaştırır ve farkları vurgular.",
    },
    description: {
      en: "A utility that reads two invoice data sets, compares them field by field, and reports mismatches so they can be reviewed before the data is finalized.",
      tr: "İki fatura veri setini okuyan, alan alan karşılaştıran ve veri kesinleşmeden önce gözden geçirilmesi için uyuşmazlıkları raporlayan bir araç.",
    },
    highlights: {
      en: [
        "Field-by-field comparison of invoice records",
        "Mismatch report for manual review",
        "Reads structured record input for validation",
      ],
      tr: [
        "Fatura kayıtlarının alan alan karşılaştırılması",
        "Manuel gözden geçirme için uyuşmazlık raporu",
        "Doğrulama için yapılandırılmış kayıt girdisi okuma",
      ],
    },
    tech: ["C#", "JSON", "Data"],
  },
  {
    id: "workflow-rest-api",
    category: "workflow",
    image: "assets/img/projects/workflow.svg",
    github: "",
    title: {
      en: "Workflow REST API",
      tr: "Workflow REST API",
    },
    summary: {
      en: "REST integration layer for workflow platforms.",
      tr: "İş akışı platformları için REST entegrasyon katmanı.",
    },
    description: {
      en: "A REST layer that wraps workflow platform operations — forms, cases and approvals — so external systems can integrate without touching platform internals directly.",
      tr: "Dış sistemlerin platformun iç yapısına doğrudan dokunmadan entegre olabilmesi için iş akışı platform işlemlerini — formlar, dosyalar ve onaylar — saran bir REST katmanı.",
    },
    highlights: {
      en: [
        "REST endpoints wrapping workflow platform operations",
        "Form and case data exposed to external systems",
        "Consistent error handling and correlation logging",
      ],
      tr: [
        "İş akışı platform işlemlerini saran REST uç noktaları",
        "Dış sistemlere açılan form ve dosya verisi",
        "Tutarlı hata yönetimi ve korelasyon loglama",
      ],
    },
    tech: ["C#", "REST", "Workflow"],
  },
  {
    id: "music-app",
    category: "web",
    image: "assets/img/projects/web-app.svg",
    github: "https://github.com/yusufinc/MusicApp",
    title: {
      en: "Music App",
      tr: "Müzik Uygulaması",
    },
    summary: {
      en: "Music player built with pure JavaScript.",
      tr: "Saf JavaScript ile yapılmış müzik çalar.",
    },
    description: {
      en: "A lightweight playlist and audio player built with plain JavaScript, no framework involved. It's a hands-on exercise in DOM manipulation and custom player controls rather than a production product.",
      tr: "Framework kullanılmadan, düz JavaScript ile geliştirilmiş hafif bir çalma listesi ve ses çalar. Bir üretim ürünü olmaktan çok, DOM manipülasyonu ve özel çalar kontrolleri üzerinde pratik yapmak için hazırlandı.",
    },
    highlights: {
      en: [
        "Playlist management with plain JavaScript",
        "Custom audio player controls",
        "No framework dependencies",
      ],
      tr: [
        "Düz JavaScript ile çalma listesi yönetimi",
        "Özel ses çalar kontrolleri",
        "Framework bağımlılığı yok",
      ],
    },
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: "quiz-app",
    category: "web",
    image: "assets/img/projects/web-app.svg",
    github: "https://github.com/yusufinc/QuizApp",
    title: {
      en: "Quiz App",
      tr: "Quiz Uygulaması",
    },
    summary: {
      en: "Interactive quiz application for learning JavaScript.",
      tr: "JavaScript öğrenirken geliştirilen etkileşimli quiz uygulaması.",
    },
    description: {
      en: "A small quiz flow with live scoring and instant feedback, written in plain JavaScript while learning core DOM manipulation concepts.",
      tr: "JavaScript öğrenirken temel DOM manipülasyonu kavramları üzerinde çalışırken düz JavaScript ile yazılmış, canlı puanlama ve anlık geri bildirime sahip küçük bir quiz akışı.",
    },
    highlights: {
      en: [
        "Question flow with live scoring",
        "Instant feedback on each answer",
        "Pure JavaScript DOM manipulation",
      ],
      tr: [
        "Canlı puanlamayla soru akışı",
        "Her cevap için anlık geri bildirim",
        "Saf JavaScript ile DOM manipülasyonu",
      ],
    },
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: "asset-tracker",
    category: "database",
    image: "assets/img/projects/database.svg",
    github: "",
    title: {
      en: "Asset Tracker",
      tr: "Demirbaş Takip",
    },
    summary: {
      en: "Asset inventory tracking application.",
      tr: "Demirbaş envanter takip uygulaması.",
    },
    description: {
      en: "Tracks assets, assignments and inventory records in a structured way, so ownership history stays clear over time even as items move between owners.",
      tr: "Sahiplik geçmişinin, eşyalar sahipler arasında hareket etse bile zaman içinde net kalması için demirbaşları, zimmetleri ve envanter kayıtlarını yapılandırılmış şekilde takip eder.",
    },
    highlights: {
      en: [
        "Asset registry with assignment history",
        "Form-based data entry for daily use",
        "SQL storage for inventory records",
      ],
      tr: [
        "Zimmet geçmişine sahip demirbaş kayıt defteri",
        "Günlük kullanım için form tabanlı veri girişi",
        "Envanter kayıtları için SQL depolama",
      ],
    },
    tech: ["C#", "SQL", "Forms"],
  },
  {
    id: "home-workout",
    category: "web",
    image: "assets/img/projects/web-app.svg",
    github: "https://github.com/yusufinc/home-dumbell-delights",
    title: {
      en: "Home Workout App",
      tr: "Ev Antrenman Uygulaması",
    },
    summary: {
      en: "Home dumbbell workout web experience.",
      tr: "Evde dambıl antrenmanı için web deneyimi.",
    },
    description: {
      en: "A small TypeScript web app that presents home dumbbell workout routines clearly, grouping exercises by muscle group and difficulty for a quick, no-gym session.",
      tr: "Ev dambıl antrenman rutinlerini net bir şekilde sunan, egzersizleri kas grubu ve zorluk seviyesine göre gruplayan, spor salonu gerektirmeyen hızlı bir seans için hazırlanmış küçük bir TypeScript web uygulaması.",
    },
    highlights: {
      en: [
        "Workout routines grouped by muscle group",
        "Difficulty levels for different experience levels",
        "Clean, mobile-friendly routine presentation",
      ],
      tr: [
        "Kas grubuna göre gruplanmış antrenman rutinleri",
        "Farklı deneyim seviyeleri için zorluk seçenekleri",
        "Sade, mobil uyumlu rutin sunumu",
      ],
    },
    tech: ["TypeScript", "React", "CSS"],
  },
];

window.getProjectById = function (id) {
  return (window.PROJECTS || []).find(function (p) {
    return p.id === id;
  });
};
