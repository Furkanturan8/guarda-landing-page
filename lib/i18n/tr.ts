export type Cell = boolean | string;

export const tr = {
  meta: {
    title: "GuardaFlow — Kaydettiğin linke geri dön",
    description:
      "GuardaFlow kaydettiğin her şeyi tek yerde toplar. İstersen onu bir göreve çevirir, zamanı gelince sana hatırlatır.",
    ogLocale: "tr_TR",
  },

  nav: {
    links: {
      features: "Özellikler",
      howItWorks: "Nasıl çalışır",
      extension: "Eklenti",
      premium: "Premium",
      pricing: "Fiyatlar",
      faq: "SSS",
    },
    cta: "Demo",
    newTab: "yeni sekmede açılır",
  },

  hero: {
    eyebrow: "Bookmark · kişisel planlayıcı",
    title: "Kaydettiğin linke geri dön.",
    body: "GuardaFlow kaydettiğin her şeyi tek yerde toplar. İstersen onu bir göreve çevirir, zamanı gelince sana hatırlatır.",
    cta: "Hemen dene",
    note: "Ücretsiz · Kayıt gerekmez · Verilerin tarayıcında kalır",
  },

  demo: {
    jobSite: "kariyer.net",
    playPause: "Oynat / duraklat",
    chapters: [
      { title: "Tarayıcıdan", cap: "Herhangi bir sitede ⌘⇧S. Sayfa gelen kutuna düşer." },
      { title: "Uygulamadan", cap: "Ya da linki yapıştır. Tek zorunlu alan URL." },
      { title: "Gelen kutusu", cap: "Başlık ve okuma süresi arka planda gelir." },
      { title: "Düzenle", cap: "Koleksiyon ve etiket senin. AI yalnızca önerir." },
      { title: "Planla", cap: "İstersen göreve çevir, saatini seç." },
      { title: "Haftalık plan", cap: "Haftanın tamamı tek ekranda. Güne tıkla, ne var gör." },
      { title: "Tamamla", cap: "Günün planında görünür. Bitirince işaretle." },
    ],
    sidebar: {
      brandSub: "kitaplık",
      quickSave: "Hızlı Kaydet",
      today: "Bugün",
      inbox: "Gelen Kutusu",
      planner: "Planlayıcı",
      bookmarks: "Bookmarks",
      collections: "Tüm Koleksiyonlar",
      tags: "Etiketler",
      archive: "Arşiv",
      quickAccess: "Hızlı Erişim",
      career: "Kariyer",
      import: "İçe Aktar",
      settings: "Ayarlar",
    },
    inbox: {
      title: "Gelen Kutusu",
      subtitle: "Kaydettiğin ancak henüz bir koleksiyona atamadığın veya planlamadığın kayıtlar.",
      all: "Tümü",
      article: "Makale",
      job: "İlan",
      queued: "Sıraya alındı, kısa süre içinde işlenecek",
      analyzing: "İçerik analiz ediliyor · meta veriler çekiliyor",
      wait: "Lütfen bekleyin",
      justAdded: "az önce eklendi",
      fromExtension: "az önce eklendi · eklentiden",
      daysAgo: "3 gün önce eklendi",
      readTime: "{n} dk okuma süresi",
      accept: "Kabul et",
      openLink: "Linke Git",
      move: "Koleksiyona Taşı",
      toTask: "Göreve Çevir",
    },
    planner: {
      title: "Planlayıcı",
      today: "Bugün",
      upcoming: "Yaklaşan (4)",
      calendar: "Takvim",
      completed: "Tamamlananlar",
      evening: "Akşam",
      read: "oku",
      apply: "başvur",
      min: "dk",
      weekRange: "28 Eylül – 4 Ekim 2026",
      month: "Eylül 2026",
      days: ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"],
      todaySuffix: "(Bugün)",
      onePlan: "1 Plan",
      empty: "Boş",
      noPlan: "Plan yok",
      add: "+ Ekle",
      total: "Toplam Planlanan",
      done: "Tamamlandı",
      left: "Kalan",
      notes: "Seçili Gün Notları",
      wedDate: "30 Eylül 2026, Çarşamba",
      thuDate: "1 Ekim 2026, Perşembe",
      addToDay: "Bu Güne Görev Ekle",
      rhythm: "Haftalık Dağılım ve Ritim",
      plans: "8 Plan",
      completedLabel: "Tamamlanan:",
      ratio: "2 / 8 (%25)",
    },
    dashboard: {
      eyebrow: "Günlük Çalışma Alanı",
      title: "Bugün ne üzerinde çalışmak istiyorsun?",
      summary: "Tamamlanmayı bekleyen {n} eylem, gelen kutunda 2 yeni kayıt var.",
      todayActions: "Bugünün Eylemleri (3)",
      byPriority: "Öncelik Sıralı",
      deadline: "son tarih bu gece 23:59",
      inboxPool: "Gelen Kutusu Havuzu",
      inboxPoolBody: "2 yeni kayıt organize edilmeyi bekliyor.",
      goInbox: "Gelen Kutusuna Git",
    },
    capture: {
      title: "Şimdi kaydet. Sonra sırala.",
      urlLabel: "URL · tek zorunlu alan",
      details: "Detay ekle — koleksiyon, etiket, not, görev",
      hint: "⌘↵ ile kaydet · Esc ile kapat",
      saved: "Kaydedildi",
      save: "Gelen Kutusuna Kaydet",
    },
    task: {
      title: "Yeni Görev",
      action: "Eylem",
      date: "Tarih",
      time: "Saat",
      read: "Oku",
      today: "Bugün",
      reminder: "Hatırlatıcı",
      reminderMeta: "30 dk önce · Uygulama içi",
      cancel: "Vazgeç",
      save: "Görevi Kaydet",
    },
    web: { codeSample: "kod örneği" },
    toast: {
      saving: "Kaydediliyor…",
      saved: "Kaydedildi ✓",
      tagsPlaceholder: "etiket1, etiket2",
      tagsTyped: "golang, concurrency",
      inbox: "Gelen Kutusu",
      keys: "Enter: kaydet · Esc: vazgeç",
    },
  },

  problem: {
    title: "Kaydetmek kolay. Geri dönmek zor.",
    before: "Şimdiye kadar",
    after: "GuardaFlow ile",
    rows: [
      {
        before: "Link bir sekmede açık kalır, sonra bir gün kapanır.",
        after: "Link gelen kutuna düşer. Başlığı ve okuma süresi kendiliğinden gelir.",
      },
      {
        before: "Açık kalan her sekme belleğinden yer; tek bir sekme bazen yüzlerce MB tutar.",
        after: "Kaydettiğin link neredeyse hiç yer kaplamaz. Sekmeyi gönül rahatlığıyla kapatırsın.",
      },
      {
        before: "Neden kaydettiğini bir hafta sonra hatırlamazsın.",
        after: "Yazdığın tek cümlelik not kaydın yanında durur. Kimse onu değiştirmez.",
      },
      {
        before: "“Sonra okurum” dediğin o an hiç gelmez.",
        after: "Okumak için bir saat seçersin. Zamanı gelince GuardaFlow hatırlatır.",
      },
    ],
  },

  screens: {
    title: "Uygulamanın içinden.",
    body: "Gerçek ekranlar, örnek verilerle. Hepsi ücretsiz sürümde, kayıt olmadan açık.",
    items: [
      {
        eyebrow: "Görev & takvim",
        path: "/planner",
        title: "Görevler ve planlayıcı",
        body: "Kaydını bir göreve çevir: oku, izle, başvur. Haftalık takvimde ya da Bugün panelinde saatiyle planla.",
        image: "/screens/planner-tr.png",
        alt: "Planlayıcı: haftalık takvim ve seçili günün görevleri",
      },
      {
        eyebrow: "Hiyerarşi",
        path: "/collections",
        title: "Koleksiyonlar ve alt klasörler",
        body: "Learning › Backend gibi iç içe klasörler kur. Alt koleksiyonları ve içlerinde kaç bağlantı olduğunu tek bakışta gör.",
        image: "/screens/collections-tr.png",
        alt: "Koleksiyonlar: klasör ağacı ve alt koleksiyon önizlemeleri",
      },
      {
        eyebrow: "Hızlı kayıt",
        path: "/inbox",
        title: "Gelen kutusu",
        body: "Önce kaydet, sonra karar ver. Bekleyenleri koleksiyona taşı ya da tek tıkla göreve çevir.",
        image: "/screens/inbox-tr.png",
        alt: "Gelen kutusu: henüz düzenlenmemiş kayıtlar ve hızlı eylemler",
      },
      {
        eyebrow: "Liste",
        path: "/bookmarks",
        title: "Tüm kayıtların tek listede",
        body: "Tür, koleksiyon, etiket ve tarihle yan yana. ⌘K ile her yerden ara, koleksiyona ya da etikete göre süz.",
        image: "/screens/bookmarks-tr.png",
        alt: "Bookmarks: filtrelenebilir tablo görünümü",
      },
      {
        eyebrow: "Etiketler",
        path: "/tags",
        title: "Etiketler",
        body: "Etiketlerini ne kadar kullandığına göre sırala, yeniden adlandır. Hiçbir kayıtta kullanılmayanları tek tıkla temizle.",
        image: "/screens/tags-tr.png",
        alt: "Etiketler: kullanım sayılarıyla etiket listesi ve seçili etiketin kayıtları",
      },
    ],
  },

  tryFree: {
    title: "Merak etme, denemek bedava.",
    body: "Aç, kurcala, kendi linklerini kaydet. Hesap açmana ya da kart bilgisi girmene gerek yok.",
    cta: "Demoyu aç",
    newTab: "yeni sekmede açılır",
    points: {
      noSignup: {
        title: "Kayıt yok",
        body: "E-posta, şifre ya da kart istemez. Açtığın an kullanmaya başlarsın.",
      },
      local: {
        title: "Verilerin senin tarayıcında",
        body: "Ücretsiz sürümde kayıtların sunucumuzda değil, bu tarayıcıda saklanır.",
      },
      noLimit: {
        title: "Süre sınırı yok",
        body: "Deneme süresi dolmaz. Örnek verilerle açılır; istediğin an kendi kayıtlarına geçersin.",
      },
    },
    exportNote: "Vazgeçersen kayıtlarını istediğin an JSON olarak dışa aktarırsın.",
  },

  capture: {
    title: "Sadece URL. Gerisi sonra.",
    body: "Başlık, açıklama ve okuma süresi arka planda çekilir. Koleksiyon, etiket ya da not eklemek istersen oradalar. Zorunlu değiller.",
    urlLabel: "URL · tek zorunlu alan",
    collection: "Koleksiyon",
    tags: "Etiketler",
    reason: "Bunu neden kaydediyorsun?",
    reasonHint: "opsiyonel, her zaman sana ait",
    reasonText: "Raporlama servisi sorgu optimizasyonu için gerekiyor.",
    makeTask: "Bunu görev de yap",
    shortcut: "⌘↵ ile kaydet · Esc ile kapat",
    save: "Gelen Kutusuna Kaydet",
  },

  organize: {
    title: "Düzen senin.",
    body: "İç içe koleksiyonlar, istediğin kadar etiket. GuardaFlow bir öneri yaparsa onu öneri olarak görürsün. Kabul etmediğin hiçbir şey değişmez.",
    accept: "Kabul et",
    reject: "Reddet",
  },

  plan: {
    title: "Günün planı, kaydettiklerinden.",
    body: "GuardaFlow'u açtığında bugün okuman, izlemen ya da başvurman gerekenler sırayla karşında. Süresi geçenler en üstte.",
    note: "Bir proje yönetim aracı değil. Sadece kaydettiğin şeylere geri dönmen için.",
    late: "gecikti",
    items: [
      { time: "Dün", action: "araştır", title: "Redis Streams", meta: "redis.io", late: true, done: false },
      {
        time: "09:00",
        action: "oku",
        title: "PostgreSQL Indexing",
        meta: "use-the-index-luke.com · 18 dk",
        late: false,
        done: true,
      },
      { time: "14:00", action: "oku", title: "Go Concurrency Patterns", meta: "go.dev · 12 dk", late: false, done: false },
      { time: "19:30", action: "başvur", title: "Junior Backend Developer", meta: "kariyer.net", late: false, done: false },
    ],
  },

  extras: {
    extensionTitle: "Tarayıcı eklentisi",
    extensionBody:
      "Herhangi bir sitede ⌘⇧S'ye bas, sayfa gelen kutuna düşer. Etiketini ya da koleksiyonunu o an seçebilirsin. GuardaFlow kapalıyken kaydettiklerin eklentide bekler, uygulamayı açınca aktarılır.",
    typesTitle: "Ne kaydedersen kaydet",
    typesBody: "Linkin türünü GuardaFlow kendisi anlar. Yanlış anlarsa değiştirirsin.",
    types: ["Makale", "Video", "GitHub", "Ürün", "İlan", "Dokümantasyon", "Sosyal", "Web Sitesi"],
  },

  suggestions: {
    title: "GuardaFlow öneri yapar. Kararı sen verirsin.",
    subtitle: "Premium'da, ayda 500 kayıt için. Metin üretmez; yalnızca seçenekler arasından önerir.",
    label: "Öneri · PostgreSQL Indexing",
    text: "Bu sayfa Learning / Backend koleksiyonuna uygun görünüyor. Etiket önerisi: postgresql, indexing. Görev önerisi: oku.",
    accept: "Kabul et",
    edit: "Düzenle",
    reject: "Reddet",
  },

  premium: {
    title: "Premium ile arşivin seninle gelir.",
    body: "Ücretsiz sürüm her şeyi bu tarayıcıda tutar. Premium arşivini buluta taşır ve kaydettiklerinin kaybolmaması için birkaç iş daha üstlenir.",
    features: {
      cloud: {
        title: "Bulut yedeği, her cihazdan erişim",
        body: "Arşivin tarayıcıda değil bulutta durur. Tarayıcı verisi silinse de kaybolmaz; hangi cihazdan girersen gir aynı arşiv karşında.",
      },
      suggestions: {
        title: "Akıllı öneriler",
        body: "Her kayıt için koleksiyon, etiket ve yapılacak iş önerisi. Sen onaylamadan hiçbir şey değişmez. Ayda 500 kayıt.",
      },
      pageCopy: {
        title: "Sayfa kopyası ve içerikte arama",
        body: "Kaydettiğin sayfanın metni saklanır. Arama başlığın yanında sayfanın içine de bakar; bağlantı ölse bile içerik sende.",
      },
      linkCheck: {
        title: "Ölü bağlantı taraması",
        body: "Bağlantıların düzenli olarak kontrol edilir. Kaybolan bir sayfa işaretlenir ve Internet Archive kopyası önüne gelir.",
      },
      calendar: {
        title: "Takvim beslemesi",
        body: "Planladığın görevler Google, Apple ya da Outlook takviminde görünür. Adresi istediğin an yenileyip kapatabilirsin.",
      },
      import: {
        title: "İçe aktarma",
        body: "Tarayıcı yer imlerini, Pocket, Raindrop.io ve Instapaper kayıtlarını getir. Etiketler ve notlar da taşınır.",
      },
    },
  },

  pricing: {
    title: "Ücretsiz başla. İstersen buluta taşı.",
    body: "Deneme süresi yok, çünkü ücretsiz sürüm zaten eksiksiz çalışıyor. Premium'a geçtiğinde bu tarayıcıdaki kayıtların ve görevlerin kaybolmadan buluta aktarılır.",
    plans: {
      intervalLabel: "Faturalandırma dönemi",
      monthly: "Aylık",
      yearly: "Yıllık",
      yearlySaving: "2 ay bedava",
      free: {
        name: "Ücretsiz",
        price: "$0",
        note: "Süre sınırı yok",
        items: [
          "Kayıt, koleksiyon, etiket ve görevler",
          "Günlük plan ve haftalık takvim",
          "Tarayıcı eklentisi",
          "Veriler bu tarayıcıda, kayıt gerekmez",
          "JSON dışa aktarma",
        ],
        cta: "Hemen dene",
      },
      premium: {
        name: "Premium",
        prices: {
          monthly: { amount: "$5", unit: "/ ay", note: "Aylık faturalandırılır" },
          yearly: { amount: "$50", unit: "/ yıl", note: "2 ay bedava" },
        },
        items: [
          "Ücretsiz sürümdeki her şey",
          "Bulut yedeği, her cihazdan erişim, sınırsız kapasite",
          "Akıllı öneriler, ayda 500 kayıt",
          "Sayfa kopyası ve içerikte arama",
          "Ölü bağlantı taraması, Internet Archive kopyası",
          "Takvim beslemesi ve içe aktarma",
        ],
        cta: "Çok Yakında",
        footnote: "Premium özellikler çok yakında kullanıma sunulacak",
      },
    },
    compare: {
      title: "Ücretsiz ve Premium",
      feature: "Özellik",
      free: "Ücretsiz",
      premium: "Premium",
      yes: "Var",
      no: "Yok",
      // Mirrors the in-app comparison (guarda/frontend plan-comparison.tsx); add a row only when a feature ships.
      rows: [
        { label: "Kayıt, koleksiyon, etiket, görev ve planlayıcı", free: true, premium: true },
        { label: "Tarayıcı eklentisi", free: true, premium: true },
        { label: "Verilerin nerede?", free: "Bu tarayıcıda", premium: "Bulutta" },
        { label: "Kapasite", free: "Tarayıcı kotası", premium: "Sınırsız" },
        { label: "Her cihazdan erişim", free: false, premium: true },
        { label: "Akıllı öneriler", free: false, premium: "Ayda 500" },
        { label: "Takvim beslemesi (ICS)", free: false, premium: true },
        { label: "Sayfa kopyası ve içerikte arama", free: false, premium: true },
        { label: "Ölü bağlantı taraması", free: false, premium: true },
        { label: "İçe aktarma", free: false, premium: true },
        { label: "JSON dışa aktarma", free: true, premium: true },
      ] as { label: string; free: Cell; premium: Cell }[],
    },
  },

  faq: {
    title: "Sık sorulanlar",
    items: [
      {
        q: "Hesap açmam gerekiyor mu?",
        a: "Hayır. Ücretsiz sürüm kayıt olmadan çalışır ve verilerin bu tarayıcıda saklanır. Hesap yalnızca Premium için gerekir.",
      },
      {
        q: "Deneme süresi var mı?",
        a: "Yok. Ücretsiz sürüm deneme yerine geçer: kayıt, düzen ve planlama özellikleri süre sınırı olmadan açık.",
      },
      {
        q: "Premium'a geçince yerel kayıtlarım ne olur?",
        a: "Ödemen onaylanınca bu tarayıcıdaki yer imlerin ve görevlerin buluta aktarılır. Hiçbir şey kaybolmaz.",
      },
      {
        q: "Aboneliğimi iptal edersem?",
        a: "Premium, ödediğin dönemin sonuna kadar açık kalır. Sonrasında bulut arşivin bir süre daha saklanır; onu bu tarayıcıya geri aktarıp ücretsiz sürümle devam edebilir ya da JSON veya HTML olarak indirebilirsin.",
      },
      {
        q: "Ödeme nasıl alınıyor?",
        a: "Ödemeler Polar üzerinden alınır. Kart bilgilerin GuardaFlow sunucularına hiç gelmez. Aboneliğini yine Polar'ın sayfasından yönetir ya da iptal edersin.",
      },
      {
        q: "Akıllı öneriler için ne gönderiliyor?",
        a: "Yalnızca sayfanın başlığı, açıklaması ve adresi sınıflandırma servisine gider. Metin üretilmez; öneriyi sen kabul etmeden koleksiyonun, etiketlerin ve görevlerin değişmez.",
      },
    ],
  },

  footer: {
    title: "Kaydettiklerini bitirmeye başla.",
    cta: "Hemen dene",
    note: "Kayıt yok, kurulum yok. Verilerin bu tarayıcıda kalır; istersen sonra Premium ile buluta taşır, her cihazdan erişirsin.",
  },
};

export type Dictionary = typeof tr;
