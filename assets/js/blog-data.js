/* 21 blog posts — bilingual, full-length bodies */
window.BLOG_POSTS = [
  {
    id: "workflow-basics",
    date: "2026-06-12",
    category: { en: "Workflow", tr: "İş Akışı" },
    image: "assets/img/blog/workflow-cover.svg",
    title: {
      en: "What is a workflow platform, really?",
      tr: "İş akışı platformu gerçekte nedir?",
    },
    excerpt: {
      en: "A practical look at forms, steps, roles and approvals in enterprise workflow systems.",
      tr: "Kurumsal iş akışı sistemlerinde formlar, adımlar, roller ve onaylara pratik bakış.",
    },
    content: {
      en: `
        <p>A workflow platform takes a paper-like process — a request, a form, a signature chain — and turns it into a digital route that everyone can trust. Underneath the drag-and-drop diagrams, three things really matter: who the actors are, what states a case can be in, and what happens when something goes wrong.</p>
        <p>When I start mapping a new process, I always draw the happy path first: the request is created, moves through two or three approvals, and lands in an archive. Only after that do I add the messy branches — rejections, timeouts, delegated approvers, cancelled cases.</p>
        <p>Roles deserve more thought than they usually get. A "manager" in one department can mean something completely different in another, and workflow platforms tend to punish that ambiguity later, usually during an audit rather than during development.</p>
        <ul>
          <li>Name every step so a non-technical reviewer understands it</li>
          <li>Keep notifications short and action-oriented</li>
          <li>Make audit logs searchable, not just storable</li>
          <li>Design for the exception path before it becomes a support ticket</li>
        </ul>
        <p>Most workflow bugs I've debugged were never about the engine — they were about an assumption nobody wrote down, like "this role always has exactly one approver." Writing that assumption down, even in a one-line comment, saves the next person a very confusing afternoon.</p>
        <p>Over time, the platforms that age well are the ones where business users can read the flow diagram and recognize their own job in it. If only a developer can explain what a step does, the process has quietly become software instead of a business rule.</p>
      `,
      tr: `
        <p>Bir iş akışı platformu, kağıt üzerindeki bir süreci — bir talep, bir form, bir imza zinciri — herkesin güvenebileceği dijital bir rotaya çevirir. Sürükle-bırak diyagramların altında asıl önemli olan üç şey vardır: aktörler kim, bir kayıt hangi durumlarda olabilir ve bir şeyler ters gittiğinde ne oluyor.</p>
        <p>Yeni bir süreci haritalarken önce mutlu yolu çizerim: talep oluşturulur, iki üç onaydan geçer ve arşive düşer. Ancak bundan sonra dağınık dalları eklerim — reddler, zaman aşımları, vekil onaycılar, iptal edilen kayıtlar.</p>
        <p>Roller genelde hak ettiğinden daha az düşünülür. Bir departmanda "müdür" başka bir departmanda tamamen farklı bir şey anlamına gelebilir ve iş akışı platformları bu belirsizliği daha sonra, genelde geliştirme sırasında değil bir denetim sırasında cezalandırır.</p>
        <ul>
          <li>Her adımı teknik olmayan bir gözden geçirenin anlayacağı şekilde adlandırın</li>
          <li>Bildirimleri kısa ve aksiyona yönelik tutun</li>
          <li>Denetim loglarını sadece saklanabilir değil, aranabilir yapın</li>
          <li>İstisna yolunu bir destek talebi olmadan önce tasarlayın</li>
        </ul>
        <p>Ayıkladığım iş akışı hatalarının çoğu motorla ilgili değildi — kimsenin yazmadığı bir varsayımla ilgiliydi, örneğin "bu rolün her zaman tek bir onaycısı var" gibi. Bu varsayımı bir satırlık bir yorumla da olsa yazmak, sonraki kişiye çok kafa karıştırıcı bir öğleden sonrayı kurtarır.</p>
        <p>Zamanla iyi yaşlanan platformlar, iş kullanıcılarının akış diyagramını okuyup kendi işlerini içinde tanıyabildiği platformlardır. Bir adımı sadece bir geliştirici açıklayabiliyorsa, süreç sessizce bir iş kuralı olmaktan çıkıp yazılıma dönüşmüş demektir.</p>
      `,
    },
  },
  {
    id: "eba-plus-tips",
    date: "2026-06-05",
    category: { en: "Workflow", tr: "İş Akışı" },
    image: "assets/img/blog/eba-cover.svg",
    title: {
      en: "eBA / eBA Plus: keep processes maintainable",
      tr: "eBA / eBA Plus: süreçleri bakımı kolay tutun",
    },
    excerpt: {
      en: "Naming, reuse and small building blocks beat giant unreadable flows.",
      tr: "İsimlendirme, yeniden kullanım ve küçük yapı taşları okunamayan dev akışlardan iyidir.",
    },
    content: {
      en: `
        <p>Large eBA / eBA Plus flows get expensive fast when every small change turns into detective work. The fix is rarely a clever trick — it's discipline: reusable form parts, consistent field names, and decision points that are documented somewhere other than someone's memory.</p>
        <p>I also try to separate environment configuration from business rules as early as possible. A flow that hardcodes a server name or a role ID will eventually break the day someone reorganizes the org chart, usually at the worst possible time.</p>
        <p>Breaking a monster flow into smaller, named sub-flows pays off twice: it's easier to test in isolation, and it's easier to hand off to a colleague who only needs to understand one piece instead of the whole diagram.</p>
        <ul>
          <li>Use one naming convention for fields across all forms in a process</li>
          <li>Keep a short changelog per flow, even a two-line one</li>
          <li>Separate "who can approve" from "what gets approved" wherever possible</li>
        </ul>
        <p>Testing matters more than it looks. Approval chains behave differently for real role accounts than they do for an admin who can see and click everything, so a test pass with an admin account tells you almost nothing about the real experience.</p>
        <p>A short version note for the next developer — or future you — pays for itself the first time someone asks "why does this step exist?" and you can actually answer instead of guessing from the diagram alone.</p>
      `,
      tr: `
        <p>eBA / eBA Plus üzerinde büyük akışlar, her küçük değişiklik dedektiflik gerektirdiğinde hızla pahalılaşır. Çözüm genelde akıllıca bir hile değil, disiplindir: yeniden kullanılabilir form parçaları, tutarlı alan adları ve birinin hafızasından başka bir yerde belgelenmiş karar noktaları.</p>
        <p>Ortam ayarlarını iş kurallarından mümkün olduğunca erken ayırmaya çalışırım. Sunucu adını veya rol ID'sini sabit kodlayan bir akış, organizasyon şeması yeniden düzenlendiği gün, genelde en kötü zamanda er ya da geç bozulur.</p>
        <p>Devasa bir akışı daha küçük, adlandırılmış alt akışlara bölmek iki kez kazandırır: tek başına test etmek daha kolay olur, ve tüm diyagramı değil sadece bir parçayı anlaması gereken bir meslektaşa devretmek daha kolay olur.</p>
        <ul>
          <li>Bir sürecin tüm formlarında alanlar için tek bir isimlendirme kuralı kullanın</li>
          <li>Her akış için kısa bir değişiklik günlüğü tutun, iki satır olsa bile</li>
          <li>Mümkün olduğunda "kim onaylayabilir" ile "ne onaylanıyor" ayrımını yapın</li>
        </ul>
        <p>Test etmek göründüğünden daha önemli. Onay zincirleri, her şeyi görüp tıklayabilen bir admin için değil, gerçek rol hesapları için farklı davranır; bir admin hesabıyla yapılan test size gerçek deneyim hakkında neredeyse hiçbir şey söylemez.</p>
        <p>Sonraki geliştiriciye — ya da gelecekteki size — bırakılan kısa bir sürüm notu, biri "bu adım neden var?" diye sorduğu ilk anda, sadece diyagramdan tahmin etmek yerine gerçekten cevap verebildiğinizde kendini amorti eder.</p>
      `,
    },
  },
  {
    id: "synergy-csp-modules",
    date: "2026-05-28",
    category: { en: "Workflow", tr: "İş Akışı" },
    image: "assets/img/blog/synergy-cover.svg",
    title: {
      en: "Custom modules on Synergy CSP",
      tr: "Synergy CSP üzerinde özel modüller",
    },
    excerpt: {
      en: "When out-of-the-box is not enough: APIs, access control and custom screens.",
      tr: "Kutu dışı yetmediğinde: API'ler, erişim kontrolü ve özel ekranlar.",
    },
    content: {
      en: `
        <p>Enterprise platforms like Synergy CSP shine when they're extended carefully instead of fought against. A custom module should respect the existing security model, never hardcode a secret, and expose clean REST boundaries that another team could integrate with without reading your source code.</p>
        <p>My rule of thumb: reach for configuration first, and write custom code only where the business rule is genuinely unique to that organization. It keeps the footprint small and the upgrade path survivable when the platform itself moves forward.</p>
        <p>Custom screens are where teams most often over-invest. A screen that just mirrors the platform's own list view with two extra filters rarely justifies the maintenance cost of a fully custom UI — sometimes the honest answer is a saved view, not a new module.</p>
        <ul>
          <li>Wrap platform APIs behind your own thin service layer</li>
          <li>Version custom endpoints so platform upgrades don't break silently</li>
          <li>Log who called what — custom modules are audited just as hard as core ones</li>
        </ul>
        <p>Performance is worth checking early rather than late — permission checks and list screens have a habit of growing quietly until a report with ten thousand rows brings the whole thing to a crawl.</p>
        <p>The healthiest custom modules I've built are the ones a platform upgrade barely touches, because they talk to the platform through stable, documented contracts instead of poking at its internals.</p>
      `,
      tr: `
        <p>Synergy CSP gibi kurumsal platformlar, karşı savaşılmak yerine dikkatlice genişletildiğinde parlar. Özel bir modül, mevcut güvenlik modeline saygı göstermeli, hiçbir sırrı sabit kodlamamalı ve başka bir ekibin kaynak kodunuzu okumadan entegre olabileceği net REST sınırları sunmalıdır.</p>
        <p>Genel kuralım şu: önce yapılandırmaya bakın, özel kod yalnızca iş kuralı o kuruma gerçekten özgüyse yazılsın. Bu, ayak izini küçük ve platform ilerledikçe güncelleme yolunu sürdürülebilir tutar.</p>
        <p>Ekiplerin en çok fazla yatırım yaptığı yer özel ekranlardır. Platformun kendi liste görünümünü sadece iki ek filtreyle taklit eden bir ekran, tamamen özel bir arayüzün bakım maliyetini nadiren hak eder — bazen dürüst cevap yeni bir modül değil, kayıtlı bir görünümdür.</p>
        <ul>
          <li>Platform API'lerini kendi ince servis katmanınızın arkasında sarın</li>
          <li>Özel uç noktaları versiyonlayın, platform güncellemeleri sessizce bozmasın</li>
          <li>Kimin neyi çağırdığını loglayın — özel modüller çekirdek modüller kadar sıkı denetlenir</li>
        </ul>
        <p>Performansı geç değil erken kontrol etmeye değer — yetki kontrolleri ve liste ekranları sessizce büyüme huyundadır, ta ki on bin satırlı bir rapor her şeyi kilitleyene kadar.</p>
        <p>İnşa ettiğim en sağlıklı özel modüller, bir platform güncellemesinin nadiren dokunduğu modüllerdir; çünkü platformla iç yapısını didiklemek yerine kararlı, belgelenmiş sözleşmeler üzerinden konuşurlar.</p>
      `,
    },
  },
  {
    id: "csharp-clean-apis",
    date: "2026-05-20",
    category: { en: "Backend", tr: "Backend" },
    image: "assets/img/blog/csharp-cover.svg",
    title: {
      en: "Clean C# APIs without overengineering",
      tr: "Aşırı mühendislik olmadan temiz C# API'ler",
    },
    excerpt: {
      en: "Controllers thin, services focused, DTOs honest.",
      tr: "Controller'lar ince, servisler odaklı, DTO'lar dürüst.",
    },
    content: {
      en: `
        <p>A maintainable ASP.NET API keeps HTTP concerns — status codes, routing, model binding — in the controller, and business rules in a service that doesn't know or care that HTTP exists. That separation alone solves most of the "where do I put this?" arguments a growing codebase runs into.</p>
        <p>Validate input as early as possible, return status codes a client can actually rely on, and document endpoints while the context is still fresh in your head. Writing the OpenAPI description right after finishing an endpoint takes five minutes; writing it three months later takes an afternoon of re-reading your own code.</p>
        <p>It's tempting to invent repository interfaces, generic handlers and abstraction layers you'll never swap out. I've shipped plenty of clean APIs with a plain <code>DbContext</code> injected straight into a service, and nobody ever missed the extra interface.</p>
        <ul>
          <li>Start with the simplest structure that works</li>
          <li>Extract an abstraction only when duplication actually hurts</li>
          <li>Keep DTOs honest — don't leak internal fields "just in case"</li>
          <li>Return problem details, not a raw stack trace, on failure</li>
        </ul>
        <p>Error handling deserves its own pass instead of being an afterthought bolted on after a bug report. A consistent error shape across every endpoint makes a frontend team's life dramatically easier, and it costs almost nothing to set up with middleware.</p>
        <p>None of this is exotic. Clean C# APIs are mostly the result of saying no to complexity that hasn't earned its place yet, and revisiting that decision honestly once the project actually grows.</p>
      `,
      tr: `
        <p>Bakımı kolay bir ASP.NET API, HTTP kaygılarını — status kodları, routing, model binding — controller'da tutar; iş kurallarını ise HTTP'nin var olduğunu bilmeyen bir serviste bırakır. Bu ayrım tek başına, büyüyen bir kod tabanının karşılaştığı "bunu nereye koyayım?" tartışmalarının çoğunu çözer.</p>
        <p>Girdiyi olabildiğince erken doğrulayın, bir istemcinin gerçekten güvenebileceği status kodları dönün ve bağlam hâlâ kafanızda tazeyken uç noktaları belgeleyin. Bir endpoint'i bitirdikten hemen sonra OpenAPI açıklamasını yazmak beş dakika sürer; üç ay sonra yazmaya çalışmak ise kendi kodunuzu yeniden okuyarak bir öğleden sonra sürer.</p>
        <p>Asla değiştirmeyeceğiniz repository arayüzleri, generic handler'lar ve soyutlama katmanları icat etmek cazip gelir. Servise doğrudan enjekte edilmiş sade bir <code>DbContext</code> ile birçok temiz API teslim ettim ve kimse ekstra arayüzü hiç aramadı.</p>
        <ul>
          <li>İşe yarayan en basit yapıyla başlayın</li>
          <li>Soyutlamayı yalnızca tekrar gerçekten can yakınca çıkarın</li>
          <li>DTO'ları dürüst tutun — "belki gerekir" diye iç alanları sızdırmayın</li>
          <li>Hata durumunda ham stack trace değil, problem detayı dönün</li>
        </ul>
        <p>Hata yönetimi, bir hata raporundan sonra sonradan yamanan bir şey olmak yerine kendi başına bir geçiş hak eder. Her uç noktada tutarlı bir hata şekli, frontend ekibinin işini büyük ölçüde kolaylaştırır ve middleware ile kurmak neredeyse hiçbir şeye mal olmaz.</p>
        <p>Bunların hiçbiri egzotik değil. Temiz C# API'ler büyük ölçüde henüz yerini hak etmemiş karmaşıklığa hayır demenin ve proje gerçekten büyüdüğünde bu kararı dürüstçe yeniden gözden geçirmenin sonucudur.</p>
      `,
    },
  },
  {
    id: "ef-core-practical",
    date: "2026-05-12",
    category: { en: "Backend", tr: "Backend" },
    image: "assets/img/blog/efcore.svg",
    title: {
      en: "Entity Framework Core: practical habits",
      tr: "Entity Framework Core: pratik alışkanlıklar",
    },
    excerpt: {
      en: "Migrations, tracking and N+1 traps in daily work.",
      tr: "Günlük işte migration, tracking ve N+1 tuzakları.",
    },
    content: {
      en: `
        <p>EF Core is powerful and, unfortunately, easy to misuse. The classic trap is an N+1 query hiding inside a perfectly innocent-looking loop — a list page that feels fine with ten rows and grinds to a halt with ten thousand.</p>
        <p>For read-only paths I'm explicit about <code>AsNoTracking()</code>, and for lists I reach for projections instead of loading full entities just to show three fields on a screen. It's a small habit that adds up to a very real difference in memory and query time once the data grows.</p>
        <p>Migrations get reviewed like any other code change, not rubber-stamped. I want to know exactly what SQL a migration will run before it touches a table with real data, especially anything involving a column rename or a type change.</p>
        <ul>
          <li>Review the generated SQL for every migration, not just the model diff</li>
          <li>Use projections for list views instead of hydrating full entities</li>
          <li>Batch writes instead of looping <code>SaveChanges()</code> per row</li>
          <li>Keep long-running transactions out of request handlers</li>
        </ul>
        <p>Indexing follows the same logic: index the columns you actually filter and sort on in real queries, not every column that happens to exist in the table. A quick look at slow query logs usually tells you more than guessing ever will.</p>
        <p>Change tracking is convenient until it silently tracks a huge object graph you never meant to update. Being deliberate about when tracking is on saves both performance and a few genuinely confusing bugs down the line.</p>
      `,
      tr: `
        <p>EF Core güçlüdür ve ne yazık ki kolayca kötü kullanılır. Klasik tuzak, tamamen masum görünen bir döngünün içine gizlenmiş bir N+1 sorgudur — on satırla gayet iyi hissettiren bir liste sayfası, on bin satırda durma noktasına gelir.</p>
        <p>Salt okunur yollarda <code>AsNoTracking()</code>'i açıkça kullanırım, listelerde ise ekranda üç alan göstermek için tam entity yüklemek yerine projection'a yönelirim. Bu küçük alışkanlık, veri büyüdükçe bellek ve sorgu süresinde gerçek bir farka dönüşür.</p>
        <p>Migration'lar diğer kod değişiklikleri gibi gözden geçirilir, damgalanıp geçilmez. Gerçek verisi olan bir tabloya dokunmadan önce, özellikle bir sütun yeniden adlandırma veya tip değişikliği içeriyorsa, bir migration'ın tam olarak hangi SQL'i çalıştıracağını bilmek isterim.</p>
        <ul>
          <li>Her migration için sadece model diff'ini değil, üretilen SQL'i de gözden geçirin</li>
          <li>Liste görünümlerinde tam entity yüklemek yerine projection kullanın</li>
          <li>Satır başına <code>SaveChanges()</code> döngüsü yerine toplu yazma yapın</li>
          <li>Uzun süren transaction'ları request handler'ların dışında tutun</li>
        </ul>
        <p>İndeksleme de aynı mantığı takip eder: tabloda var olan her sütunu değil, gerçek sorgularda filtrelediğiniz ve sıraladığınız sütunları indeksleyin. Yavaş sorgu loglarına kısa bir bakış, genelde tahmin etmekten çok daha fazlasını söyler.</p>
        <p>Change tracking, hiç güncellemek istemediğiniz devasa bir nesne grafiğini sessizce takip etmeye başlayana kadar kullanışlıdır. Tracking'in ne zaman açık olduğu konusunda bilinçli olmak, hem performansı hem de yol boyunca gerçekten kafa karıştırıcı birkaç hatayı kurtarır.</p>
      `,
    },
  },
  {
    id: "postgresql-habits",
    date: "2026-05-04",
    category: { en: "Database", tr: "Veritabanı" },
    image: "assets/img/blog/postgresql-cover.svg",

    title: {
      en: "PostgreSQL habits that save weekends",
      tr: "Hafta sonlarını kurtaran PostgreSQL alışkanlıkları",
    },
    excerpt: {
      en: "Explain plans, indexes and sane naming.",
      tr: "Explain planları, indeksler ve sağlıklı isimlendirme.",
    },
    content: {
      en: `
        <p>Before reaching for another index, I look at <code>EXPLAIN ANALYZE</code> first. It's surprising how often the real problem is a missing constraint, a bad join order, or a query shape that never had a chance regardless of indexing.</p>
        <p>Consistent naming for tables and columns sounds boring until you're the third person joining a schema that mixes <code>userId</code>, <code>user_id</code> and <code>uid</code> in the same database. Picking one convention on day one and enforcing it in review is far cheaper than a rename migration a year later.</p>
        <p>Constraints beat silent bad data — a rejected insert is much cheaper to debug than a report that's quietly wrong for six months. Foreign keys, check constraints and <code>NOT NULL</code> are not bureaucracy, they're a very cheap form of documentation the database enforces for you.</p>
        <ul>
          <li>Run <code>EXPLAIN ANALYZE</code> before adding an index, not after</li>
          <li>Pick one naming convention and enforce it in code review</li>
          <li>Prefer a rejected insert over a silently wrong row</li>
          <li>Rehearse a restore, don't just trust the backup job succeeded</li>
        </ul>
        <p>Partial indexes and proper use of <code>JSONB</code> have saved me from adding extra tables more than once, but I still treat both as an exception rather than a default — a normalized table is easier for the next developer to reason about.</p>
        <p>Backups deserve a rehearsal, not a hope. Restoring one on a random Tuesday tells you far more than any monitoring dashboard about whether your disaster plan actually works.</p>
      `,
      tr: `
        <p>Yeni bir indeks eklemeden önce önce <code>EXPLAIN ANALYZE</code>'a bakarım. Gerçek sorunun eksik bir kısıt, kötü bir join sırası ya da indekslemeden bağımsız zaten şansı olmayan bir sorgu şekli olması şaşırtıcı derecede sık rastlanır.</p>
        <p>Tablo ve sütunlarda tutarlı isimlendirme, aynı veritabanında <code>userId</code>, <code>user_id</code> ve <code>uid</code>'yi karıştıran bir şemaya üçüncü katılan kişi olana kadar sıkıcı gelir. İlk günden bir kural seçmek ve gözden geçirmede zorunlu kılmak, bir yıl sonraki yeniden adlandırma migration'ından çok daha ucuzdur.</p>
        <p>Sessiz kötü veri yerine kısıtları tercih edin — reddedilen bir insert, altı ay boyunca sessizce yanlış olan bir rapordan çok daha ucuza debug edilir. Foreign key'ler, check kısıtları ve <code>NOT NULL</code> bürokrasi değildir; veritabanının sizin için uyguladığı çok ucuz bir belgeleme biçimidir.</p>
        <ul>
          <li>İndeks eklemeden önce, sonra değil, <code>EXPLAIN ANALYZE</code> çalıştırın</li>
          <li>Bir isimlendirme kuralı seçin ve kod incelemesinde zorunlu kılın</li>
          <li>Sessizce yanlış bir satır yerine reddedilen bir insert'i tercih edin</li>
          <li>Yedek görevinin başarılı olduğuna güvenmeyin, geri yüklemeyi prova edin</li>
        </ul>
        <p>Kısmi indeksler ve <code>JSONB</code>'nin doğru kullanımı beni birden fazla kez ekstra tablo eklemekten kurtardı, ama ikisini de varsayılan değil istisna olarak görürüm — normalize edilmiş bir tablo, sonraki geliştiricinin akıl yürütmesi için daha kolaydır.</p>
        <p>Yedekleme, umuttan çok prova hak eder. Rastgele bir salı günü bir yedeği geri yüklemek, felaket planınızın gerçekten işe yarayıp yaramadığı hakkında herhangi bir izleme panosundan çok daha fazlasını anlatır.</p>
      `,
    },
  },
  {
    id: "mssql-vs-postgres",
    date: "2026-04-26",
    category: { en: "Database", tr: "Veritabanı" },
    image: "assets/img/blog/mssql-cover.svg",
    title: {
      en: "MSSQL and PostgreSQL in the same career",
      tr: "Aynı kariyerde MSSQL ve PostgreSQL",
    },
    excerpt: {
      en: "Different dialects, same fundamentals: modeling, indexing, transactions.",
      tr: "Farklı diyalektler, aynı temeller: modelleme, indeksleme, transaction.",
    },
    content: {
      en: `
        <p>Switching between MSSQL and PostgreSQL is far less intimidating once you realize most of what transfers is set-based thinking, not syntax memorization. Both want you to describe what result you need, not how to loop toward it, and that mental model barely changes between engines.</p>
        <p>What's genuinely worth learning per engine is how it handles transactions, locking behavior under load, and JSON storage — those details differ enough to bite you if you assume one product behaves like the other. Isolation level defaults in particular have surprised more than one team mid-incident.</p>
        <p>Tooling differences matter too. SSMS and pgAdmin push you toward slightly different workflows for the same task, and getting comfortable with each engine's own explain-plan visualizer is worth the half day it takes.</p>
        <ul>
          <li>Learn each engine's transaction isolation defaults explicitly</li>
          <li>Don't assume JSON functions behave identically across engines</li>
          <li>Write connection strings and collation settings down, not just in your head</li>
        </ul>
        <p>Migrating a schema from one to the other is rarely a one-to-one translation. Data types, default collations and even how <code>NULL</code> sorts can differ just enough to produce a subtly wrong report weeks after the migration looked "done."</p>
        <p>Documenting connection strings and environment differences saves a specific kind of pain: the "it works on staging" bug that turns out to be a collation setting nobody wrote down.</p>
      `,
      tr: `
        <p>MSSQL ve PostgreSQL arasında geçiş yapmak, taşınan şeyin sözdizimi ezberi değil küme odaklı düşünme olduğunu fark ettiğinizde çok daha az korkutucu hale gelir. İkisi de sonucu nasıl döngüyle üreteceğinizi değil, hangi sonucu istediğinizi tanımlamanızı ister ve bu zihinsel model motorlar arasında pek değişmez.</p>
        <p>Motora özgü gerçekten öğrenmeye değer şey, transaction'ları nasıl ele aldığı, yük altında kilitleme davranışı ve JSON depolamasıdır — bu detaylar bir ürünün diğeri gibi davrandığını varsayarsanız sizi ısıracak kadar farklıdır. Özellikle varsayılan isolation seviyeleri, bir olayın ortasında birden fazla ekibi şaşırtmıştır.</p>
        <p>Araç farkları da önemlidir. SSMS ve pgAdmin, aynı görev için sizi biraz farklı iş akışlarına yönlendirir; her motorun kendi explain-plan görselleştiricisiyle rahat olmak, harcanan yarım güne değer.</p>
        <ul>
          <li>Her motorun transaction isolation varsayımlarını açıkça öğrenin</li>
          <li>JSON fonksiyonlarının motorlar arası aynı davrandığını varsaymayın</li>
          <li>Bağlantı dizelerini ve collation ayarlarını kafanızda değil, yazılı tutun</li>
        </ul>
        <p>Bir şemayı birinden diğerine taşımak nadiren birebir bir çeviridir. Veri tipleri, varsayılan collation'lar ve hatta <code>NULL</code>'ın nasıl sıralandığı, migration "bitti" göründükten haftalar sonra ince şekilde yanlış bir rapor üretecek kadar farklı olabilir.</p>
        <p>Bağlantı dizelerini ve ortam farklarını belgelemek özel bir acıyı önler: "staging'de çalışıyor" hatasının, kimsenin yazmadığı bir collation ayarı olduğu ortaya çıktığı anlar.</p>
      `,
    },
  },
  {
    id: "redis-caching",
    date: "2026-04-18",
    category: { en: "Database", tr: "Veritabanı" },
    image: "assets/img/blog/redis-cover.svg",

    title: {
      en: "Redis as a cache, not a magic box",
      tr: "Redis bir sihir kutusu değil, önbellektir",
    },
    excerpt: {
      en: "TTL, keys and invalidation strategy matter more than 'just cache it'.",
      tr: "TTL, anahtarlar ve invalidasyon; 'cache'le gitsin'den daha önemlidir.",
    },
    content: {
      en: `
        <p>Caching hides load right up until the moment it starts lying to users. Before dropping Redis into a project, I want a real answer to three questions: what's the key pattern, what's the TTL, and what happens to the cache on write.</p>
        <p>Key naming looks trivial and rarely is. A consistent prefix scheme per feature makes it possible to invalidate a whole family of keys with one pattern instead of guessing which ones might be stale after a data change.</p>
        <p>Cache stampedes are a real failure mode, not a theoretical one — when a hot key expires and a thousand requests rush to rebuild it at once, soft expiration or a simple lock saves the database behind it. I've watched a database nearly fall over from exactly this pattern on a single popular endpoint.</p>
        <ul>
          <li>Namespace keys by feature so invalidation stays scoped</li>
          <li>Set a TTL on everything — "forever" caches age into bugs</li>
          <li>Use a lock or soft expiry to avoid stampedes on hot keys</li>
          <li>Log cache hit/miss ratio per feature, not just globally</li>
        </ul>
        <p>Write-through versus write-around versus cache-aside is worth actually deciding per feature rather than defaulting to whatever pattern the last project used. The right choice depends on how stale a user can tolerate the data being.</p>
        <p>Hit ratio is the metric that actually tells the truth. A cache nobody hits is just another service you now have to operate, monitor and eventually debug at 2am.</p>
      `,
      tr: `
        <p>Önbellekleme, kullanıcılara yalan söylemeye başladığı ana kadar yükü gizler. Bir projeye Redis eklemeden önce üç soruya gerçek bir cevabım olsun isterim: anahtar kalıbı ne, TTL ne ve yazma anında cache'e ne oluyor.</p>
        <p>Anahtar isimlendirmesi önemsiz görünür ama nadiren öyledir. Özellik başına tutarlı bir prefix şeması, bir veri değişikliğinden sonra hangi anahtarların bayat olabileceğini tahmin etmek yerine, tek bir kalıpla bütün bir anahtar ailesini geçersiz kılmayı mümkün kılar.</p>
        <p>Cache stampede teorik değil gerçek bir arıza modudur — sıcak bir anahtarın süresi dolduğunda ve binlerce istek onu aynı anda yeniden inşa etmeye koşuştuğunda, yumuşak süre sonu veya basit bir kilit arkadaki veritabanını kurtarır. Popüler bir tek uç noktada tam olarak bu kalıptan bir veritabanının neredeyse çöktüğünü gördüm.</p>
        <ul>
          <li>Anahtarları özelliğe göre isim alanına ayırın, invalidasyon kapsamlı kalsın</li>
          <li>Her şeye bir TTL koyun — "sonsuz" cache'ler zamanla hataya dönüşür</li>
          <li>Sıcak anahtarlarda stampede'i önlemek için kilit veya yumuşak süre sonu kullanın</li>
          <li>Cache hit/miss oranını sadece global değil, özellik başına loglayın</li>
        </ul>
        <p>Write-through, write-around veya cache-aside arasında seçim yapmak, son projede kullanılan kalıba varsayılan geçmek yerine özellik başına gerçekten karar vermeye değer. Doğru seçim, bir kullanıcının verinin ne kadar bayat olmasına tahammül edebileceğine bağlıdır.</p>
        <p>Gerçeği söyleyen metrik isabet oranıdır. Kimsenin vurmadığı bir cache, artık işletmeniz, izlemeniz ve er ya da geç gece yarısı debug etmeniz gereken bir servisten ibarettir.</p>
      `,
    },
  },
  {
    id: "mongodb-when",
    date: "2026-04-10",
    category: { en: "Database", tr: "Veritabanı" },
    image: "assets/img/blog/mongodb-cover.svg",

    title: {
      en: "When MongoDB is the right tool",
      tr: "MongoDB ne zaman doğru araçtır?",
    },
    excerpt: {
      en: "Flexible documents help — until you need hard joins and reports.",
      tr: "Esnek dokümanlar yardımcı olur — sert join ve rapor ihtiyacına kadar.",
    },
    content: {
      en: `
        <p>Document stores are a genuinely good fit for payloads that evolve — event logs, user-generated content, anything where the shape of "one record" changes release after release. The trick is modeling around your actual query patterns instead of forcing a relational textbook mindset onto a document.</p>
        <p>Embedding versus referencing is the first real decision, and it deserves more thought than "just embed everything." If a sub-document grows unbounded or gets updated independently of its parent, it usually wants to be its own collection instead.</p>
        <p>Indexing still matters, and collection growth deserves the same attention a DBA would give a SQL table. Nothing about "schemaless" means "unmanaged" — a collection without the right compound index degrades just as badly as an unindexed SQL table under load.</p>
        <ul>
          <li>Model around your read patterns, not just how data arrives</li>
          <li>Prefer referencing over embedding for anything updated independently</li>
          <li>Add compound indexes deliberately, and check them with the query planner</li>
        </ul>
        <p>Aggregation pipelines can replace a surprising amount of what people reach for a separate reporting database to do, but they have a learning curve that's easy to underestimate on the first attempt.</p>
        <p>If your domain leans heavily relational — lots of joins, heavy reporting, strict referential integrity — a SQL database may still be the better default, even in 2026. MongoDB earns its place when the schema genuinely needs to flex, not just when SQL feels unfamiliar.</p>
      `,
      tr: `
        <p>Doküman depoları, evrilen yükler için gerçekten iyi bir uyum sağlar — olay logları, kullanıcı üretimi içerik, "bir kaydın" şeklinin sürüm sürüm değiştiği her şey. İncelik, bir doküman üzerine ilişkisel ders kitabı zihniyetini zorlamak değil, gerçek sorgu kalıplarınıza göre modellemektir.</p>
        <p>Gömme (embed) ile referans verme arasındaki seçim ilk gerçek karardır ve "her şeyi göm" demekten daha fazla düşünce hak eder. Bir alt doküman sınırsız büyüyorsa veya ebeveyninden bağımsız güncelleniyorsa, genelde kendi koleksiyonu olmak ister.</p>
        <p>İndeksleme yine önemlidir ve koleksiyon büyümesi bir DBA'nın bir SQL tablosuna vereceği ilgiyi hak eder. "Şemasız" olmak "yönetilmiyor" anlamına gelmez — doğru bileşik indeksi olmayan bir koleksiyon, yük altında indekssiz bir SQL tablosu kadar kötü performans gösterir.</p>
        <ul>
          <li>Verinin nasıl geldiğine değil, okuma kalıplarınıza göre modelleyin</li>
          <li>Bağımsız güncellenen her şey için gömme yerine referansı tercih edin</li>
          <li>Bileşik indeksleri bilinçli ekleyin ve query planner ile kontrol edin</li>
        </ul>
        <p>Aggregation pipeline'ları, insanların ayrı bir raporlama veritabanına yöneldiği şeylerin şaşırtıcı bir kısmının yerini alabilir, ama ilk denemede küçümsenmesi kolay bir öğrenme eğrisi vardır.</p>
        <p>Alanınız yoğun ilişkiselse — çok join, ağır raporlama, sıkı referans bütünlüğü — 2026'da bile SQL veritabanı hâlâ daha iyi varsayılan olabilir. MongoDB, şema gerçekten esnemesi gerektiğinde yerini haklı çıkarır, sadece SQL yabancı geldiğinde değil.</p>
      `,
    },
  },
  {
    id: "sqlite-local",
    date: "2026-04-02",
    category: { en: "Database", tr: "Veritabanı" },
    image: "assets/img/blog/sqlite-cover.svg",

    title: {
      en: "SQLite for tools and local apps",
      tr: "Araçlar ve lokal uygulamalar için SQLite",
    },
    excerpt: {
      en: "Zero-server SQL that still deserves migrations and backups.",
      tr: "Hâlâ migration ve yedek hak eden sıfır sunuculu SQL.",
    },
    content: {
      en: `
        <p>SQLite is my default choice for desktop utilities, quick prototypes and embedded stores where spinning up a full database server would be overkill. It's easy to underestimate precisely because it's so easy to start with — a single file and you're already writing queries.</p>
        <p>That doesn't excuse skipping the basics: take schema changes seriously, enable WAL mode once any concurrency shows up, and never assume the single file on disk is immortal — copy it, back it up, treat it like data that matters even in a "just a tool" project.</p>
        <p>Full-text search and JSON functions cover more use cases than people expect from something this lightweight, which is part of why it quietly ends up inside so many mobile apps, browsers and desktop tools without users ever noticing.</p>
        <ul>
          <li>Enable WAL mode the moment more than one process touches the file</li>
          <li>Version your schema with real migrations, not manual <code>ALTER TABLE</code> runs</li>
          <li>Back up the file on a schedule, even for "just a local tool"</li>
        </ul>
        <p>Once you have multiple writers hammering the same file under real load, that's the signal to graduate to a proper client-server engine rather than fighting SQLite's limits. It's a fantastic tool for its actual niche, not a universal database replacement.</p>
        <p>I still reach for it first when starting a new personal project, precisely because the friction of "let's just try the idea" is close to zero.</p>
      `,
      tr: `
        <p>SQLite, masaüstü araçları, hızlı prototipler ve tam bir veritabanı sunucusu kurmanın gereğinden fazla olacağı gömülü depolar için varsayılan seçimim. Başlaması bu kadar kolay olduğu için tam da küçümsenmesi kolaydır — tek bir dosya ve zaten sorgu yazmaya başlarsınız.</p>
        <p>Bu, temelleri atlamayı mazur göstermez: şema değişikliklerini ciddiye alın, herhangi bir eşzamanlılık ortaya çıktığında WAL modunu açın ve diskteki o tek dosyanın ölümsüz olduğunu asla varsaymayın — "sadece bir araç" projesinde bile kopyalayın, yedekleyin, önemli veri gibi davranın.</p>
        <p>Full-text search ve JSON fonksiyonları, bu kadar hafif bir şeyden beklenenden daha fazla kullanım senaryosunu kapsar; bu da neden sessizce bu kadar çok mobil uygulamanın, tarayıcının ve masaüstü aracının içine, kullanıcılar hiç fark etmeden yerleştiğinin bir kısmıdır.</p>
        <ul>
          <li>Dosyaya birden fazla süreç dokunduğu anda WAL modunu açın</li>
          <li>Manuel <code>ALTER TABLE</code> çalıştırmaları yerine şemanızı gerçek migration'larla versiyonlayın</li>
          <li>"Sadece lokal bir araç" olsa da dosyayı belirli aralıklarla yedekleyin</li>
        </ul>
        <p>Gerçek yük altında aynı dosyaya vuran birden çok yazar olduğunda, bu SQLite'ın sınırlarıyla boğuşmak yerine düzgün bir istemci-sunucu motoruna geçme sinyalidir. Kendi asıl niş alanı için harika bir araçtır, evrensel bir veritabanı yerine geçmez.</p>
        <p>Yeni bir kişisel projeye başlarken hâlâ ilk onu seçerim, tam olarak "hadi fikri deneyelim" sürtünmesi sıfıra yakın olduğu için.</p>
      `,
    },
  },
  {
    id: "typescript-frontend",
    date: "2026-03-24",
    category: { en: "Frontend", tr: "Frontend" },
    image: "assets/img/blog/typescript-cover.svg",

    title: {
      en: "TypeScript on the frontend without pain",
      tr: "Frontend'de acısız TypeScript",
    },
    excerpt: {
      en: "Type the boundaries: API responses, forms and shared models.",
      tr: "Sınırları tiplendirin: API cevapları, formlar ve ortak modeller.",
    },
    content: {
      en: `
        <p>You don't need perfectly typed everything on day one, and chasing that is a good way to burn out on a project before it ships. What matters most is typing the boundaries — API responses coming into the app, and form values going out.</p>
        <p>When parsing external JSON, I reach for <code>unknown</code> instead of <code>any</code> and narrow it deliberately, rather than pretending the compiler already checked something it never saw. A small runtime validator at the boundary catches the exact kind of bug that "it compiled fine" would otherwise hide.</p>
        <p>Generic components are genuinely useful for a table or a select that gets reused everywhere, but I resist making every component generic just because TypeScript makes it possible. A concrete, slightly repetitive type is often easier to read six months later.</p>
        <ul>
          <li>Type API boundaries first, internal helpers can wait</li>
          <li>Reach for <code>unknown</code> over <code>any</code> when parsing external data</li>
          <li>Share types between frontend and backend contracts where you can</li>
          <li>Don't generalize a component until you actually reuse it twice</li>
        </ul>
        <p>Strict mode feels harsh at first, especially on an existing codebase, but turning it on early on a new project avoids the much larger migration pain of retrofitting strictness onto thousands of lines later.</p>
        <p>Sharing types between the UI and the API contract is the single change that pays off the most: it turns silent breakage during a refactor into a compile error you catch before your users do.</p>
      `,
      tr: `
        <p>İlk günden her şeyin mükemmel tiplenmiş olması gerekmez ve bunun peşinden gitmek bir projeyi yayınlanmadan tükenmenin iyi bir yoludur. En önemlisi sınırları tiplendirmektir — uygulamaya gelen API cevapları ve dışarı çıkan form değerleri.</p>
        <p>Dış JSON parse ederken <code>any</code> yerine <code>unknown</code>'a yönelirim ve onu bilinçli şekilde daraltırım, derleyicinin hiç görmediği bir şeyi zaten kontrol ettiğini varsaymak yerine. Sınırda küçük bir runtime doğrulayıcı, "derlendi ya, sorun yok" duygusunun aksi halde gizleyeceği türden hatayı tam olarak yakalar.</p>
        <p>Her yerde yeniden kullanılan bir tablo veya select için generic bileşenler gerçekten kullanışlıdır, ama TypeScript mümkün kıldığı için her bileşeni generic yapmaya direnç gösteririm. Somut, biraz tekrarlı bir tip, altı ay sonra genelde okunması daha kolaydır.</p>
        <ul>
          <li>Önce API sınırlarını tiplendirin, iç yardımcılar bekleyebilir</li>
          <li>Dış veri parse ederken <code>any</code> yerine <code>unknown</code>'a yönelin</li>
          <li>Mümkün olduğunda frontend ve backend sözleşmeleri arasında tip paylaşın</li>
          <li>Bir bileşeni gerçekten iki kez kullanana kadar genellemeyin</li>
        </ul>
        <p>Strict mode ilk başta, özellikle mevcut bir kod tabanında sert gelir, ama yeni bir projede erken açmak, binlerce satıra sonradan sıkılığı eklemenin çok daha büyük migration acısından kurtarır.</p>
        <p>UI ile API sözleşmesi arasında tip paylaşmak en çok kazandıran tek değişikliktir: refactor sırasındaki sessiz kırılmaları, kullanıcılarınızdan önce yakaladığınız bir derleme hatasına çevirir.</p>
      `,
    },
  },
  {
    id: "tailwind-vs-scss",
    date: "2026-03-16",
    category: { en: "Frontend", tr: "Frontend" },
    image: "assets/img/blog/tailwind-cover.svg",

    title: {
      en: "Tailwind and SCSS can coexist",
      tr: "Tailwind ve SCSS birlikte yaşayabilir",
    },
    excerpt: {
      en: "Utilities for speed, SCSS for design tokens and rare complex widgets.",
      tr: "Hız için utility, tasarım token'ları ve nadir karmaşık widget'lar için SCSS.",
    },
    content: {
      en: `
        <p>Utility-first CSS is genuinely great for iterating on UI quickly — no context switching between files, no naming debates for a div that exists once. But I don't treat it as a religion, and I don't think anyone should.</p>
        <p>Keeping a small set of design tokens for color and spacing, even in a Tailwind-heavy project, is what keeps a brand feeling consistent across dozens of screens built by different moods on different days. A config file full of raw hex values scattered across templates ages badly no matter which framework you use.</p>
        <p>For the rare complex widget or a legacy corner of the app, an SCSS module still earns its place. Forcing a deeply nested, state-heavy component into pure utility classes usually produces a class list nobody can read, let alone maintain.</p>
        <ul>
          <li>Define color and spacing tokens once, reference them everywhere</li>
          <li>Reach for a CSS module when a component has real internal state to style</li>
          <li>Audit unused utility classes occasionally — they accumulate quietly</li>
        </ul>
        <p>The two approaches actually complement each other well in practice: Tailwind for the 90% of layout and spacing work, SCSS for the 10% that genuinely benefits from nesting, mixins or a truly custom animation.</p>
        <p>Consistency in the end result matters far more than winning an argument about which approach is "correct." Users never see your CSS methodology — they see whether the product feels coherent.</p>
      `,
      tr: `
        <p>Utility-first CSS, arayüz üzerinde hızlıca iterasyon yapmak için gerçekten harika — dosyalar arasında bağlam değişimi yok, bir kez var olan bir div için isimlendirme tartışması yok. Ama bunu bir din olarak görmüyorum ve kimsenin de görmemesi gerektiğini düşünüyorum.</p>
        <p>Tailwind ağırlıklı bir projede bile renk ve boşluk için küçük bir tasarım token seti tutmak, farklı günlerde farklı ruh hallerinde inşa edilmiş onlarca ekranda markanın tutarlı hissettirmesini sağlayan şeydir. Şablonlara dağılmış ham hex değerleriyle dolu bir yapılandırma dosyası, hangi framework'ü kullanırsanız kullanın kötü yaşlanır.</p>
        <p>Nadir bir karmaşık widget veya uygulamanın eski bir köşesi için SCSS modülü hâlâ yerini haklı çıkarır. Derin iç içe geçmiş, durum ağırlıklı bir bileşeni saf utility sınıflarına zorlamak, kimsenin okuyamayacağı, bakımını yapamayacağı bir sınıf listesi üretir.</p>
        <ul>
          <li>Renk ve boşluk token'larını bir kez tanımlayın, her yerde referans verin</li>
          <li>Bir bileşenin gerçek iç durumu varsa CSS modülüne yönelin</li>
          <li>Kullanılmayan utility sınıflarını arada denetleyin — sessizce birikirler</li>
        </ul>
        <p>İki yaklaşım pratikte gerçekten birbirini iyi tamamlar: layout ve boşluk işinin %90'ı için Tailwind, nesting, mixin veya gerçekten özel bir animasyondan gerçekten fayda gören %10 için SCSS.</p>
        <p>Sonuçta tutarlılık, hangi yaklaşımın "doğru" olduğu tartışmasını kazanmaktan çok daha önemlidir. Kullanıcılar CSS metodolojinizi hiç görmez — ürünün tutarlı hissettirip hissettirmediğini görürler.</p>
      `,
    },
  },
  {
    id: "react-native-expo",
    date: "2026-03-08",
    category: { en: "Mobile", tr: "Mobil" },
    image: "assets/img/blog/expo-cover.svg",

    title: {
      en: "Shipping faster with Expo",
      tr: "Expo ile daha hızlı yayın",
    },
    excerpt: {
      en: "Router, assets and env keys: keep mobile releases boring.",
      tr: "Router, varlıklar ve env anahtarları: mobil yayınları sıkıcı tutun.",
    },
    content: {
      en: `
        <p>Expo removes a huge amount of native friction, which means more time actually spent on the product instead of fighting build configs. That trade-off has been worth it on every mobile project I've shipped recently, including one built for matching partners and investors.</p>
        <p>Structuring screens around a clear router early avoids the spaghetti navigation that shows up later, and keeping secrets out of the repository is non-negotiable — even for a small side project. Expo's config plugins and EAS build profiles make per-environment secrets manageable without ever committing a key.</p>
        <p>Over-the-air updates are genuinely one of Expo's best features, letting a JS-only fix reach users without a full store review cycle — but I still treat native-affecting changes as needing a real build and real review, not a shortcut.</p>
        <ul>
          <li>Test on real devices early, not only in the simulator</li>
          <li>Checklist push notification permissions before each release</li>
          <li>Verify file/storage permissions per platform, not just once</li>
          <li>Keep environment secrets in EAS config, never in the repo</li>
        </ul>
        <p>Performance profiling on a mid-range Android device catches problems a high-end iPhone simulator never will. It's an easy step to skip and a very visible one to regret after release.</p>
        <p>A boring, checklist-driven release is a good release. Surprises should happen in development, not in the store review queue.</p>
      `,
      tr: `
        <p>Expo, çok büyük bir native sürtünmeyi ortadan kaldırır; bu da build konfigürasyonlarıyla boğuşmak yerine ürüne daha çok zaman ayırmak demektir. Son zamanlarda yayınladığım her mobil projede, ortak ve yatırımcı eşleştirmesi için geliştirdiğim bir uygulama dahil, bu takas kendini fazlasıyla ödedi.</p>
        <p>Ekranları erkenden net bir router etrafında yapılandırmak, sonradan ortaya çıkan spagetti navigasyonu önler; sırları repodan uzak tutmak ise küçük bir yan proje için bile pazarlık konusu değildir. Expo'nun config eklentileri ve EAS build profilleri, hiçbir anahtarı commit etmeden ortam başına sırları yönetilebilir kılar.</p>
        <p>OTA güncellemeler gerçekten Expo'nun en iyi özelliklerinden biri; sadece JS'i etkileyen bir düzeltmenin tam bir mağaza inceleme döngüsü olmadan kullanıcılara ulaşmasını sağlar — ama native'i etkileyen değişiklikleri hâlâ gerçek bir build ve gerçek bir inceleme gerektiren şeyler olarak görürüm, kısayol olarak değil.</p>
        <ul>
          <li>Gerçek cihazlarda erken test edin, sadece simülatörde değil</li>
          <li>Her yayından önce push bildirim izinlerini kontrol listesine alın</li>
          <li>Dosya/depolama izinlerini her platformda tek seferlik değil, doğrulayarak kontrol edin</li>
          <li>Ortam sırlarını repoda değil, EAS yapılandırmasında tutun</li>
        </ul>
        <p>Orta seviye bir Android cihazda performans profillemesi, üst düzey bir iPhone simülatörünün asla yakalayamayacağı sorunları yakalar. Atlanması kolay, yayından sonra pişman olunması çok görünür bir adımdır.</p>
        <p>Sıkıcı, kontrol listesi odaklı bir yayın, iyi bir yayındır. Sürprizler geliştirmede olmalı, mağaza inceleme kuyruğunda değil.</p>
      `,
    },
  },
  {
    id: "rest-integration",
    date: "2026-02-28",
    category: { en: "Integration", tr: "Entegrasyon" },
    image: "assets/img/blog/rest-cover.svg",
    title: {
      en: "REST integrations that survive production",
      tr: "Prodüksiyonda ayakta kalan REST entegrasyonları",
    },
    excerpt: {
      en: "Timeouts, retries, idempotency and clear logs.",
      tr: "Timeout, yeniden deneme, idempotency ve net loglar.",
    },
    content: {
      en: `
        <p>Integrations fail in creative ways that never show up in the demo — a slow upstream, a flaky network, a field that quietly changes type. Setting a sane timeout is the first line of defense, and making retries safe with idempotency keys is the second.</p>
        <p>Correlation IDs logged consistently across both systems turn a two-hour investigation into a five-minute one. Never let an integration swallow an error silently; a loud, logged failure is always cheaper than a quiet, missing record that someone only notices weeks later.</p>
        <p>Exponential backoff with a small amount of jitter avoids the thundering-herd problem where every failed client retries at exactly the same moment and knocks the upstream over a second time. It's a small addition that pays for itself the first time an upstream has a bad five minutes.</p>
        <ul>
          <li>Set explicit timeouts — never trust a client's default</li>
          <li>Make writes idempotent before you make retries automatic</li>
          <li>Log a correlation ID on both sides of every integration</li>
          <li>Alert on error rate, not just on total failure</li>
        </ul>
        <p>Versioning matters more once a third party is involved, since you can't always coordinate a breaking change on both sides at once. A tolerant reader that ignores unknown fields has saved more than one integration from a surprise outage.</p>
        <p>Contract tests run against a staging environment have saved me more than once, especially the night the other system renamed a field without telling anyone.</p>
      `,
      tr: `
        <p>Entegrasyonlar demoda hiç görünmeyen yaratıcı şekillerde bozulur — yavaş bir üst sistem, kararsız bir ağ, sessizce tipi değişen bir alan. Akıllıca bir timeout koymak ilk savunma hattıdır, idempotency anahtarlarıyla yeniden denemeleri güvenli yapmak ise ikincisi.</p>
        <p>Her iki sistemde de tutarlı şekilde loglanan korelasyon ID'leri, iki saatlik bir incelemeyi beş dakikaya indirir. Bir entegrasyonun hatayı sessizce yutmasına asla izin vermeyin; loglanmış, gürültülü bir hata, birinin haftalar sonra fark ettiği sessizce kaybolan bir kayıttan her zaman daha ucuzdur.</p>
        <p>Az miktarda jitter ile üstel geri çekilme (exponential backoff), her başarısız istemcinin tam olarak aynı anda yeniden denediği ve üst sistemi ikinci kez devirdiği "sürü etkisi" sorununu önler. Bir üst sistemin kötü beş dakikası olduğu ilk anda kendini amorti eden küçük bir ekleme.</p>
        <ul>
          <li>Açık timeout'lar belirleyin — bir istemcinin varsayılanına asla güvenmeyin</li>
          <li>Yeniden denemeleri otomatik yapmadan önce yazma işlemlerini idempotent yapın</li>
          <li>Her entegrasyonun iki tarafında da bir korelasyon ID'si loglayın</li>
          <li>Sadece toplam hataya değil, hata oranına göre uyarı verin</li>
        </ul>
        <p>Bir üçüncü taraf dahil olduğunda versiyonlama daha çok önem kazanır, çünkü her zaman her iki tarafta aynı anda kırıcı bir değişikliği koordine edemezsiniz. Bilinmeyen alanları görmezden gelen toleranslı bir okuyucu, birden fazla entegrasyonu sürpriz bir kesintiden kurtarmıştır.</p>
        <p>Staging ortamına karşı çalıştırılan sözleşme testleri beni birden fazla kez kurtardı, özellikle karşı sistemin bir alanı kimseye söylemeden yeniden adlandırdığı gece.</p>
      `,
    },
  },
  {
    id: "metabase-dashboards",
    date: "2026-02-20",
    category: { en: "Data", tr: "Veri" },
    image: "assets/img/blog/metabase.svg",
    title: {
      en: "Useful Metabase dashboards",
      tr: "İşine yarayan Metabase panoları",
    },
    excerpt: {
      en: "Ask one question per chart; protect the warehouse with roles.",
      tr: "Grafik başına bir soru sorun; depoyu rollerle koruyun.",
    },
    content: {
      en: `
        <p>Dashboards fail the moment they try to answer every question at once. A chart that asks one clear question — and can actually change a decision — is worth more than ten that just look impressive in a meeting.</p>
        <p>I document the SQL behind every card, mostly for my own sake three months later. Naming the card after the decision it supports, not the table it queries, makes it far easier for a non-technical teammate to find the right chart without asking around first.</p>
        <p>Access should be restricted by role, and raw personal data has no business sitting in a collection everyone in the company can open. Row-level permissions and a clear separation between raw tables and curated models keep a self-serve BI tool from becoming a quiet compliance risk.</p>
        <ul>
          <li>Name each card after the decision it supports, not the underlying table</li>
          <li>Document the SQL for every card, especially the clever ones</li>
          <li>Restrict raw personal data behind role-based collections</li>
        </ul>
        <p>Scheduled alerts on a metric crossing a threshold get looked at far more often than a dashboard someone has to remember to open. Pushing the insight to people, instead of waiting for them to pull it, changes how a BI tool actually gets used.</p>
        <p>A board that gets reviewed every week, even briefly, beats a beautifully designed gallery of charts nobody has opened since launch day.</p>
      `,
      tr: `
        <p>Panolar, her soruyu aynı anda cevaplamaya çalıştığı anda başarısız olur. Net bir soru soran — ve gerçekten bir kararı değiştirebilen — tek bir grafik, bir toplantıda sadece iyi görünen on grafikten daha değerlidir.</p>
        <p>Her kartın arkasındaki SQL'i belgelerim, çoğunlukla üç ay sonraki kendim için. Bir kartı sorguladığı tablonun değil desteklediği kararın adıyla adlandırmak, teknik olmayan bir ekip arkadaşının önce sormadan doğru grafiği bulmasını çok daha kolaylaştırır.</p>
        <p>Erişim rolle kısıtlanmalı ve ham kişisel veri, şirketteki herkesin açabildiği bir koleksiyonda oturmamalı. Satır seviyesi izinler ve ham tablolarla düzenlenmiş modeller arasındaki net ayrım, kendi kendine hizmet eden bir BI aracının sessiz bir uyumluluk riskine dönüşmesini önler.</p>
        <ul>
          <li>Her kartı sorguladığı tabloya değil, desteklediği karara göre adlandırın</li>
          <li>Her kartın, özellikle akıllıca olanların, SQL'ini belgeleyin</li>
          <li>Ham kişisel veriyi role dayalı koleksiyonların arkasında kısıtlayın</li>
        </ul>
        <p>Bir eşiği aşan metrik için zamanlanmış uyarılar, birinin açmayı hatırlaması gereken bir panodan çok daha sık incelenir. İçgörüyü insanların çekmesini beklemek yerine onlara itmek, bir BI aracının gerçekte nasıl kullanıldığını değiştirir.</p>
        <p>Her hafta, kısa da olsa gözden geçirilen bir pano, yayın gününden sonra kimsenin açmadığı güzel tasarlanmış bir grafik galerisinden daha iyidir.</p>
      `,
    },
  },
  {
    id: "docker-dev",
    date: "2026-02-12",
    category: { en: "DevOps", tr: "DevOps" },
    image: "assets/img/blog/docker-cover.svg",

    title: {
      en: "Docker for local development sanity",
      tr: "Lokal geliştirme aklı için Docker",
    },
    excerpt: {
      en: "Same database version for everyone on the team.",
      tr: "Takımdaki herkes için aynı veritabanı sürümü.",
    },
    content: {
      en: `
        <p>Containers quietly remove a whole category of "works on my machine" bugs, especially for databases and caches where a minor version mismatch can cause subtly different behavior nobody notices until it's in production.</p>
        <p>Pinning image tags matters more than it seems — "latest" is a promise that changes without asking you. I've debugged more than one "it broke overnight" incident that traced back to an unpinned base image quietly picking up a new version during a routine rebuild.</p>
        <p>Mounting volumes for data and keeping compose files documented turns a container setup into something a new teammate can run on day one instead of day three. A short README next to the compose file, listing exactly which ports and env vars matter, saves a surprising number of Slack messages.</p>
        <ul>
          <li>Pin exact image versions, never rely on "latest" in a shared setup</li>
          <li>Mount named volumes for anything that needs to survive a restart</li>
          <li>Document required env vars right next to the compose file</li>
          <li>Keep one compose file per environment instead of one giant conditional file</li>
        </ul>
        <p>Multi-stage builds keep production images small and free of build-time tooling that has no business shipping to a server. It's a small habit with a real security and size payoff.</p>
        <p>What containers don't replace is actually understanding the service you're running. Treating Docker as a black box just moves the confusion one layer deeper.</p>
      `,
      tr: `
        <p>Konteynerler, özellikle küçük bir sürüm uyumsuzluğunun prodüksiyona kadar kimsenin fark etmediği ince farklı davranışlara neden olabildiği veritabanları ve cache'ler için, "bende çalışıyor" hatalarının tüm bir kategorisini sessizce ortadan kaldırır.</p>
        <p>Image etiketlerini sabitlemek göründüğünden daha önemli — "latest" size sormadan değişen bir sözdür. Sabitlenmemiş bir taban image'ın rutin bir yeniden build sırasında sessizce yeni bir sürüm alması nedeniyle "gece bozuldu" diyebileceğim birden fazla olayı debug ettim.</p>
        <p>Veri için volume bağlamak ve compose dosyalarını belgelemek, bir konteyner kurulumunu yeni bir takım arkadaşının üçüncü günde değil ilk günde çalıştırabileceği bir şeye dönüştürür. Compose dosyasının yanında, tam olarak hangi port ve env değişkenlerinin önemli olduğunu listeleyen kısa bir README, şaşırtıcı sayıda Slack mesajından tasarruf ettirir.</p>
        <ul>
          <li>Tam image sürümlerini sabitleyin, paylaşılan bir kurulumda "latest"e güvenmeyin</li>
          <li>Yeniden başlatmadan sağ çıkması gereken her şey için adlandırılmış volume bağlayın</li>
          <li>Gerekli env değişkenlerini compose dosyasının hemen yanında belgeleyin</li>
          <li>Tek bir devasa koşullu dosya yerine ortam başına bir compose dosyası tutun</li>
        </ul>
        <p>Multi-stage build'ler, üretim image'larını küçük ve bir sunucuya gitmesinin hiçbir anlamı olmayan build-zamanı araçlarından temiz tutar. Gerçek bir güvenlik ve boyut kazancı olan küçük bir alışkanlık.</p>
        <p>Konteynerlerin yerini tutmadığı şey, çalıştırdığınız servisi gerçekten anlamaktır. Docker'ı kara kutu gibi görmek, kafa karışıklığını sadece bir katman derine taşır.</p>
      `,
    },
  },
  {
    id: "access-control",
    date: "2026-02-04",
    category: { en: "Security", tr: "Güvenlik" },
    image: "assets/img/blog/security-cover.svg",
    title: {
      en: "Access control is a product feature",
      tr: "Erişim kontrolü bir ürün özelliğidir",
    },
    excerpt: {
      en: "Roles, least privilege and auditable changes.",
      tr: "Roller, en az yetki ve denetlenebilir değişiklikler.",
    },
    content: {
      en: `
        <p>Permission bugs are security bugs, full stop — even when they feel like "just a UI glitch" at first glance. I design roles around real job titles rather than abstract permission names that only make sense to the person who wrote them.</p>
        <p>Least privilege by default, with every change to who-can-do-what logged and attributable to a person. Orphaned accounts deserve a regular review; they're the kind of risk that sits quietly until someone finds it the hard way, often long after the person who owned them has left.</p>
        <p>In workflow systems specifically, a single wrong role mapping can expose entire case histories to people who were never meant to see them — this is not a corner you cut to save a sprint. I treat permission logic with the same review rigor as payment code, because the blast radius of getting it wrong is comparable.</p>
        <ul>
          <li>Map roles to real job functions, not to code-level permission flags</li>
          <li>Log every permission change with who made it and when</li>
          <li>Review orphaned and unused accounts on a schedule, not reactively</li>
          <li>Test a feature as a real limited-role user, not only as an admin</li>
        </ul>
        <p>Field-level and row-level access control matter just as much as screen-level access — a user who can't see a menu item but can still query the underlying API has effectively no protection at all.</p>
        <p>Good access control is invisible to the people who are allowed to do their job, and firm to the people who aren't. That balance is a genuinely hard product problem, not just an engineering checkbox.</p>
      `,
      tr: `
        <p>Yetki hataları, ilk bakışta "sadece bir arayüz hatası" gibi görünse bile, tam anlamıyla güvenlik hatasıdır. Rolleri, onları yazan kişi dışında kimseye anlam ifade etmeyen soyut yetki adları etrafında değil, gerçek iş unvanları etrafında tasarlarım.</p>
        <p>Varsayılan olarak en az yetki, kimin neyi yapabildiğine dair her değişiklik loglanmış ve bir kişiye atfedilebilir olmalı. Sahipsiz hesaplar düzenli bir gözden geçirme hak eder; bunlar biri sert şekilde bulana kadar, çoğu zaman sahibi ayrıldıktan çok sonra, sessizce oturan risklerdir.</p>
        <p>Özellikle iş akışı sistemlerinde, tek bir yanlış rol eşlemesi, hiç görmemesi gereken kişilere tüm dosya geçmişlerini açığa çıkarabilir — bu, bir sprint kazanmak için kısılacak bir köşe değildir. Yetki mantığını, hata payı ödeme koduyla kıyaslanabilir olduğu için aynı sıkı gözden geçirmeyle ele alırım.</p>
        <ul>
          <li>Rolleri kod seviyesi yetki bayraklarına değil, gerçek iş fonksiyonlarına eşleyin</li>
          <li>Her yetki değişikliğini kimin ve ne zaman yaptığıyla loglayın</li>
          <li>Sahipsiz ve kullanılmayan hesapları reaktif değil, planlı olarak gözden geçirin</li>
          <li>Bir özelliği sadece admin olarak değil, gerçek kısıtlı rollü bir kullanıcı olarak test edin</li>
        </ul>
        <p>Alan seviyesi ve satır seviyesi erişim kontrolü, ekran seviyesi erişim kadar önemlidir — bir menü öğesini göremeyen ama alttaki API'yi hâlâ sorgulayabilen bir kullanıcının pratikte hiçbir korumaası yoktur.</p>
        <p>İyi bir erişim kontrolü, işini yapmaya yetkili kişiler için görünmez, yetkili olmayanlar için ise sıkıdır. Bu denge, sadece bir mühendislik kontrol kutusu değil, gerçekten zor bir ürün problemidir.</p>
      `,
    },
  },
  {
    id: "nextjs-seo",
    date: "2026-01-26",
    category: { en: "Frontend", tr: "Frontend" },
    image: "assets/img/blog/nextjs-cover.svg",

    title: {
      en: "Next.js SEO basics that still matter",
      tr: "Hâlâ önemli olan Next.js SEO temelleri",
    },
    excerpt: {
      en: "Metadata, sitemap, canonical and real content.",
      tr: "Metadata, sitemap, canonical ve gerçek içerik.",
    },
    content: {
      en: `
        <p>Framework features help, but content still does most of the winning. Setting titles and descriptions intentionally per page, generating a real sitemap, and using canonical tags correctly are small tasks that compound quietly over months.</p>
        <p>Structured data is worth shipping where it genuinely applies — articles, products, FAQs — rather than sprinkling it everywhere hoping for a rich-snippet lottery win. I validate every schema block against the actual visible content, since mismatched structured data can do more harm than none at all.</p>
        <p>Server-side rendering and static generation both help search engines see real content immediately, but the choice between them should follow how often the page's data actually changes, not just which one sounds more modern.</p>
        <ul>
          <li>Write unique titles and descriptions per page, not a template repeated everywhere</li>
          <li>Generate a real sitemap from actual routes, not a stale hand-written one</li>
          <li>Match structured data to what's genuinely visible on the page</li>
          <li>Treat internal linking as a deliberate structure, not an afterthought</li>
        </ul>
        <p>Fast Core Web Vitals support SEO, but they're a supporting actor, not the lead. A technically perfect page with thin, generic content still loses to a slightly slower page that actually answers the searcher's question.</p>
        <p>The pages that keep ranking, month after month, are almost always the ones that were written for a specific reader's specific question — the metadata just gives search engines an accurate summary of what's already true.</p>
      `,
      tr: `
        <p>Framework özellikleri yardımcı olur, ama içerik hâlâ kazananın büyük kısmını belirler. Her sayfa için başlık ve açıklamaları bilinçli koymak, gerçek bir sitemap üretmek ve canonical etiketlerini doğru kullanmak, aylar boyunca sessizce biriken küçük görevlerdir.</p>
        <p>Yapılandırılmış veriyi gerçekten uyduğu yerlerde yayınlamaya değer — makaleler, ürünler, SSS — her yere serpip zengin snippet piyangosunu ummak yerine. Her şema bloğunu gerçekten görünen içerikle doğrularım, çünkü uyuşmayan yapılandırılmış veri hiç olmamasından daha fazla zarar verebilir.</p>
        <p>Sunucu taraflı render ve statik üretim, arama motorlarının gerçek içeriği anında görmesine yardımcı olur, ama ikisi arasındaki seçim hangisinin daha modern göründüğünü değil, sayfanın verisinin ne sıklıkla gerçekten değiştiğini takip etmelidir.</p>
        <ul>
          <li>Her yerde tekrarlanan bir şablon değil, sayfa başına benzersiz başlık ve açıklama yazın</li>
          <li>Bayat, elle yazılmış değil, gerçek route'lardan üretilmiş bir sitemap oluşturun</li>
          <li>Yapılandırılmış veriyi sayfada gerçekten görünenle eşleştirin</li>
          <li>İç bağlantılamayı sonradan akla gelen bir şey değil, bilinçli bir yapı olarak ele alın</li>
        </ul>
        <p>Hızlı Core Web Vitals SEO'yu destekler, ama yardımcı oyuncudur, başrol değil. İnce, jenerik içeriğe sahip teknik olarak kusursuz bir sayfa, arayanın sorusunu gerçekten cevaplayan biraz daha yavaş bir sayfaya yine de kaybeder.</p>
        <p>Ay be ay sıralamada kalan sayfalar neredeyse her zaman belirli bir okuyucunun belirli bir sorusu için yazılmış olanlardır — metadata sadece zaten doğru olan şeyin doğru bir özetini arama motorlarına verir.</p>
      `,
    },
  },
  {
    id: "portfolio-story",
    date: "2026-01-18",
    category: { en: "Career", tr: "Kariyer" },
    image: "assets/img/blog/career-cover.svg",
    title: {
      en: "How I present projects without client names",
      tr: "Firma adı vermeden projeleri nasıl anlatırım",
    },
    excerpt: {
      en: "Problem, stack and outcome — skip confidential details.",
      tr: "Problem, stack ve sonuç — gizli detayları atlayın.",
    },
    content: {
      en: `
        <p>Portfolios should respect NDAs by design, not by accident. My approach is to describe the class of problem — "syncing exchange rates into a relational store," not the specific institution — the tech stack, and the part I personally owned.</p>
        <p>Screenshots can be anonymized or swapped for diagrams when a real one would reveal too much. None of this weakens the story; if anything, it forces a sharper explanation of the actual engineering decision, because you can't hide behind a familiar logo doing the talking for you.</p>
        <p>I also try to be explicit about scale and constraints without naming names — "a workflow system used by several thousand employees" tells an interviewer far more than a company name ever would, and it's information I can always share.</p>
        <ul>
          <li>Describe the class of problem, not the specific organization</li>
          <li>Anonymize screenshots or replace them with clean diagrams</li>
          <li>Share scale and constraints — they matter more than the client's identity</li>
          <li>Focus on the part you personally owned, not the whole team's output</li>
        </ul>
        <p>Interviewers, in my experience, care far more about how you reasoned through a trade-off than about which logo was on the product. Clarity beats buzzwords every time, and a well-explained anonymized project usually lands better than a name-dropped one with a vague description.</p>
        <p>Over time this habit has made me a better writer about my own work, since I have to actually understand why a decision mattered instead of leaning on "well, it was for a big company" as the whole explanation.</p>
      `,
      tr: `
        <p>Portföyler NDA'ya kaza eseri değil, tasarım olarak saygı göstermelidir. Benim yaklaşımım, problem sınıfını — "döviz kurlarını ilişkisel bir depoya senkronize etmek," belirli bir kurumu değil —, teknoloji yığınını ve kişisel olarak üstlendiğim kısmı anlatmaktır.</p>
        <p>Gerçek bir ekran görüntüsü çok şey ifşa edecekse anonimleştirilebilir veya bir diyagramla değiştirilebilir. Bunların hiçbiri hikayeyi zayıflatmaz; aksine, gerçek mühendislik kararının daha net açıklanmasını zorlar, çünkü sizin adınıza konuşan tanıdık bir logonun arkasına saklanamazsınız.</p>
        <p>Aynı zamanda isim vermeden ölçek ve kısıtlar hakkında açık olmaya çalışırım — "binlerce çalışan tarafından kullanılan bir iş akışı sistemi" bir mülakatçıya bir şirket adının asla vermeyeceği kadar çok şey söyler ve bu her zaman paylaşabileceğim bir bilgidir.</p>
        <ul>
          <li>Belirli kurumu değil, problem sınıfını anlatın</li>
          <li>Ekran görüntülerini anonimleştirin veya sade diyagramlarla değiştirin</li>
          <li>Ölçek ve kısıtları paylaşın — bunlar müşterinin kimliğinden daha önemlidir</li>
          <li>Tüm ekibin çıktısına değil, kişisel olarak üstlendiğiniz kısma odaklanın</li>
        </ul>
        <p>Deneyimlerime göre mülakatçılar, üründe hangi logonun olduğundan çok bir takası nasıl mantıkla çözdüğünüzle ilgilenir. Netlik her zaman jargondan üstündür ve iyi açıklanmış, anonimleştirilmiş bir proje, isim verilip belirsiz açıklanmış bir projeden genelde daha iyi karşılanır.</p>
        <p>Zamanla bu alışkanlık kendi işim hakkında daha iyi bir yazar olmamı sağladı, çünkü bir kararın neden önemli olduğunu gerçekten anlamam gerekiyor, "büyük bir şirket içindi" demenin tüm açıklama olmasına güvenemiyorum.</p>
      `,
    },
  },
  {
    id: "learning-in-public",
    date: "2026-01-10",
    category: { en: "Career", tr: "Kariyer" },
    image: "assets/img/blog/learning-cover.svg",
    title: {
      en: "Learning in public as a full-stack developer",
      tr: "Full-stack geliştirici olarak açık öğrenmek",
    },
    excerpt: {
      en: "Small notes, shipping side projects and honest retrospectives.",
      tr: "Küçük notlar, yan projeler yayınlamak ve dürüst retrospektifler.",
    },
    content: {
      en: `
        <p>You don't need a viral thread to learn in public — a short write-up about a bug you fixed, a tool you tried, or a side project you finally shipped compounds quietly over months, the same way small savings compound over years.</p>
        <p>Consistency beats intensity by a wide margin. A five-minute note written right after solving something sticks far better than a polished essay written weeks later from memory, and it's honestly much less intimidating to start.</p>
        <p>Shipping small side projects — a bookstore API, a habit tracker, a partner-matching app — teaches things a day job rarely gives you room for: picking your own architecture, living with your own decisions, and finishing something end to end without a team to lean on.</p>
        <ul>
          <li>Write about what you learned last month, not just last year</li>
          <li>Include the wrong approach you tried first, not only the fix</li>
          <li>Ship small — a finished tiny project teaches more than an abandoned big one</li>
          <li>Revisit an old note occasionally; your own past confusion is a great teacher</li>
        </ul>
        <p>Honest retrospectives, including the parts that didn't go well, are worth more than a highlight reel. Nobody learns from "everything went great," but plenty of people learn from "I picked the wrong database for this and here's what it cost me."</p>
        <p>Over the years, the habit of writing things down has quietly become one of the best debugging tools I own — half the time, writing the problem clearly enough to explain it is what reveals the fix.</p>
      `,
      tr: `
        <p>Açık öğrenmek için viral bir thread gerekmez — düzelttiğiniz bir hata, denediğiniz bir araç veya sonunda yayınladığınız bir yan proje hakkında kısa bir yazı, küçük tasarrufların yıllar içinde biriktiği gibi aylar içinde sessizce birikir.</p>
        <p>Süreklilik, yoğunluğu geniş bir farkla geçer. Bir şeyi çözdükten hemen sonra yazılan beş dakikalık bir not, haftalar sonra hafızadan yazılmış cilalı bir denemeden çok daha iyi kalır ve dürüst olmak gerekirse başlaması çok daha az gözünüzü korkutur.</p>
        <p>Küçük yan projeler yayınlamak — bir kitapçı API'si, bir alışkanlık takipçisi, bir ortak eşleştirme uygulaması — bir gündelik işin nadiren yer verdiği şeyleri öğretir: kendi mimarinizi seçmek, kendi kararlarınızla yaşamak ve dayanacak bir ekip olmadan bir şeyi baştan sona bitirmek.</p>
        <ul>
          <li>Sadece geçen yıl değil, geçen ay öğrendiğiniz şey hakkında yazın</li>
          <li>Sadece çözümü değil, önce denediğiniz yanlış yaklaşımı da ekleyin</li>
          <li>Küçük yayınlayın — bitmiş küçücük bir proje, bırakılmış büyük bir projeden daha çok şey öğretir</li>
          <li>Arada eski bir notu tekrar okuyun; kendi geçmiş kafa karışıklığınız harika bir öğretmendir</li>
        </ul>
        <p>İyi gitmeyen kısımlar dahil dürüst retrospektifler, bir öne çıkanlar derlemesinden daha değerlidir. Kimse "her şey harika gitti"den öğrenmez, ama çok kişi "bunun için yanlış veritabanını seçtim ve bana neye mal oldu" diyen bir yazıdan öğrenir.</p>
        <p>Yıllar içinde, bir şeyi yazıya dökme alışkanlığı sessizce sahip olduğum en iyi debug araçlarından birine dönüştü — çoğu zaman, bir problemi açıklayacak kadar net yazmak, çözümü ortaya çıkaranın kendisidir.</p>
      `,
    },
  },
  {
    id: "dotnet-logging",
    date: "2026-07-18",
    category: { en: "Backend", tr: "Backend" },
    image: "assets/img/blog/csharp-cover.svg",
    title: {
      en: "Practical logging in .NET",
      tr: ".NET'te pratik loglama",
    },
    excerpt: {
      en: "Structured logs, sensible levels and context that actually helps you debug production.",
      tr: "Yapısal loglar, doğru seviyeler ve üretimde hata ayıklamaya gerçekten yardım eden bağlam.",
    },
    content: {
      en: `
        <p>Logging is one of those things that feels optional until the first production incident, and then it becomes the only thing that matters. In .NET the built-in <code>ILogger</code> abstraction is usually enough, but how you use it decides whether a 2 a.m. investigation takes five minutes or five hours.</p>
        <p>The first habit worth building is structured logging. Instead of stitching values into a string, pass them as named parameters so your log backend can index and filter them. "Order {OrderId} failed for user {UserId}" is searchable; a pre-formatted sentence is not.</p>
        <ul>
          <li>Use log levels deliberately: Information for business events, Warning for recoverable issues, Error for failures that need attention</li>
          <li>Attach a correlation id so a single request can be traced across services</li>
          <li>Never log secrets, tokens or full request bodies with personal data</li>
          <li>Prefer scopes over repeating the same context on every line</li>
        </ul>
        <p>Log levels are a contract with your future self. If everything is logged at Information, nothing is; if everything is an Error, alerts become noise you learn to ignore. I try to keep Error meaning "a human should probably look at this."</p>
        <p>Finally, treat logs as data, not prose. When they are structured and consistent, you can build dashboards, set alerts and answer questions you didn't anticipate — which is exactly what you need when something breaks and everyone is looking at you.</p>
      `,
      tr: `
        <p>Loglama, ilk üretim arızası yaşanana kadar isteğe bağlı gibi görünen, o an geldiğindeyse tek önemli şey hâline gelen konulardan biridir. .NET'te yerleşik <code>ILogger</code> soyutlaması çoğu zaman yeterlidir; ama onu nasıl kullandığınız, gece 2'deki bir incelemenin beş dakika mı yoksa beş saat mi süreceğini belirler.</p>
        <p>Edinilmesi gereken ilk alışkanlık yapısal loglamadır. Değerleri bir metnin içine gömmek yerine adlandırılmış parametreler olarak geçirin ki log altyapınız bunları indeksleyip filtreleyebilsin. "Sipariş {OrderId}, kullanıcı {UserId} için başarısız oldu" aranabilir; önceden biçimlendirilmiş bir cümle ise değildir.</p>
        <ul>
          <li>Log seviyelerini bilinçli kullanın: iş olayları için Information, toparlanabilir durumlar için Warning, ilgilenilmesi gereken hatalar için Error</li>
          <li>Tek bir isteğin servisler arasında izlenebilmesi için bir korelasyon kimliği ekleyin</li>
          <li>Gizli anahtarları, token'ları veya kişisel veri içeren istek gövdelerini asla loglamayın</li>
          <li>Aynı bağlamı her satırda tekrarlamak yerine scope kullanmayı tercih edin</li>
        </ul>
        <p>Log seviyeleri, gelecekteki kendinizle yaptığınız bir sözleşmedir. Her şey Information seviyesindeyse hiçbir şey öyle değildir; her şey Error ise uyarılar görmezden gelmeyi öğrendiğiniz bir gürültüye dönüşür. Ben Error'ı "muhtemelen bir insanın bakması gerekiyor" anlamında tutmaya çalışırım.</p>
        <p>Son olarak, logları düz yazı değil veri olarak görün. Yapısal ve tutarlı olduklarında panolar kurabilir, uyarılar tanımlayabilir ve öngörmediğiniz soruları yanıtlayabilirsiniz — bir şeyler bozulduğunda ve herkes size baktığında ihtiyacınız olan şey tam olarak budur.</p>
      `,
    },
  },
];

window.getBlogPostById = function (id) {
  return (window.BLOG_POSTS || []).find(function (p) {
    return p.id === id;
  });
};

window.formatBlogDate = function (str) {
  if (!str) return "";
  var parts = String(str).split("-");
  if (parts.length === 3) {
    return parts[2] + "." + parts[1] + "." + parts[0];
  }
  return str;
};

window.blogReadingTime = function (post) {
  var lang = window.getLang ? window.getLang() : "en";
  var content =
    post && post.content ? post.content.en || post.content.tr || "" : "";
  var text = String(content).replace(/<[^>]*>/g, " ");
  var words = text.split(/\s+/).filter(Boolean).length;
  var mins = Math.max(1, Math.ceil(words / 150));
  return lang === "tr" ? mins + " dk okuma" : mins + " min read";
};
