import { withBasePath } from "@/lib/base-path"

export const tr = {
  meta: {
    title: "Guarda — Bookmark & Kişisel Bilgi Planlayıcısı",
    description:
      "Kaydettiğin bir makaleyi, videoyu veya iş ilanını tek tıkla aksiyona, göreve ve takvim planına dönüştüren modern kişisel bilgi kütüphanesi.",
  },
  nav: {
    brandName: "Guarda",
    brandBadge: "KİTAPLIK",
    links: {
      nasilCalisir: "Nasıl Çalışır",
      ozellikler: "Özellikler",
      premium: "Premium",
      karsilastirma: "Karşılaştırma",
      ekranlar: "Ekranlar",
    },
    freeModeBadge: "Ücretsiz Yerel Mod",
    demoCta: "Demo'yu Aç ↗",
  },
  hero: {
    announcement: {
      text: "Guarda v1.0 — Tamamen Tarayıcıda & Sıfır Kayıt",
      storageLabel: "IndexedDB",
    },
    headlineLine1: "Kaydettiğin linkleri sadece biriktirme.",
    headlineLine2: "Harekete geç ve tamamla.",
    subtitleTag: "Save → Organize → Plan → Complete",
    subtitleText:
      "Kaydettiğin bir makaleyi, videoyu veya iş ilanını tek tıkla aksiyona, göreve ve takvim planına dönüştüren modern kişisel bilgi kütüphanesi.",
    ctaPrimary: "Ücretsiz Dene (Demo'yu Aç) ↗",
    ctaSecondary: "Özellikleri Keşfet ↓",
    trustIndicators: ["Kayıt gerekmez", "Kredi kartı yok", "Veriler cihazında kalır"],
    windowAddressPath: "/planlayici",
    windowOs: "macOS • Safari",
    imageAlt: "Guarda Planlayıcı Ekranı - Haftalık görevler ve seçili gün notları",
    badge1: {
      title: "Hızlı Kaydet",
      subtitle: "Gelen Kutusu • #backend",
    },
    badge2: {
      title: "Aksiyon Planlandı",
      tag: "Oku • 18 dk",
      subtitle: "Pazartesi, 09:00 • PostgreSQL Indexing",
    },
  },
  workflow: {
    eyebrow: "İnteraktif Süreç Simülatörü",
    title: "Link biriktirme mezarlığına son verin.",
    description:
      "Her bağlantıyı anında bir eyleme dönüştüren 4 adımlı akış döngüsünü deneyimleyin. Adımlara tıklayabilir veya canlı simülasyonu izleyebilirsiniz.",
    autoplayLabelPlaying: "Otomatik Döngü Aktif",
    autoplayLabelPaused: "Döngü Duraklatıldı",
    steps: [
      {
        tag: "📥 INBOX",
        title: "Kaydet (Save)",
        description:
          "Sekme yığınlarını unutun. Web'deki her içeriği anında ham gelen kutusuna fırlatın.",
        footer: "⌘K & Hızlı Yakalama",
      },
      {
        tag: "🗂️ TAXONOMY",
        title: "Organize Et",
        description:
          "İç içe klasörler ve temiz etiket taksonomisi ile içeriği doğru çekmeceye koyun.",
        footer: "Hiyerarşik Ağaç",
      },
      {
        tag: "🗓️ TIMELINE",
        title: "Planla (Plan)",
        description:
          'Her linki bir göreve çevirin: "Oku", "İzle", "Başvur" aksiyonu ve takvim slotu atayın.',
        footer: "Aksiyon & Takvim",
      },
      {
        tag: "✓ COMPLETE",
        title: "Tamamla (Done)",
        description:
          "Günün odağında bitirin, tek tıkla arşive gönderin ve zihinsel yükünüzü sıfırlayın.",
        footer: "Sıfır Zihinsel Yük",
      },
    ],
    stage: {
      shortcutLabel: "Kısayol:",
      articleTitle: "PostgreSQL Indexing: Derinlemesine Performans Kılavuzu",
      articleUrl: "https://highscalability.com/postgresql-indexing-guide",
      step1: {
        statusTitle: "Aşama 1: Ham İçerik Doğrudan Gelen Kutusuna Yakalandı",
        statusChip: "Tasnifsiz (Raw)",
        droppedBadge: "Inbox'a Düştü (0 dk önce)",
        articleDescription:
          "B-Tree, GiST ve BRIN indeks tipleri arasındaki farklar ve büyük ölçekli veritabanlarında sorgu sürelerini %80 kısaltma stratejileri.",
        statusLabel: "Durum:",
        statusValue: "Gelen Kutusu (1 Öğe)",
        actionButton: "Koleksiyona Taşı & Etiketle →",
      },
      step2: {
        statusTitle: "Aşama 2: Taksonomi & Hiyerarşik Klasör Eşleşmesi",
        statusChip: "Learning > Backend",
        catalogedBadge: "Kataloglandı",
        targetFolderLabel: "Hedef Klasör:",
        targetFolder: "📁 Learning / Backend",
        tagsLabel: "Otomatik & Manuel Taksonomi Etiketleri:",
        tags: ["#database", "#postgres", "#backend-architecture"],
        addTagLabel: "+ Etiket Ekle",
        folderCount: "Klasör: 14 Bookmark içeriyor",
        actionButton: "Aksiyon ve Takvim Planla →",
      },
      step3: {
        statusTitle: "Aşama 3: Eylem Türü Belirlendi & Takvim Slotlandı",
        statusChip: "Pzt 09:00 • 18 dk",
        breadcrumb: "Learning / Backend • #postgres",
        scheduleBadge: "🗓️ Pazartesi, 09:00 - 09:30",
        actionTypeLabel: "Aksiyon Türü Seçildi:",
        actionSelected: "✓ Oku (Read)",
        actionOption2: "İzle",
        actionOption3: "Başvur",
        durationLabel: "Tahmini Süre & Zaman Bloklama:",
        durationValue: "⏱ 18 dk okuma",
        durationTarget: "Haftalık Takvime Eklendi",
        priorityLabel: "Öncelik: Yüksek (High)",
        actionButton: "Görevi Tamamla (Done) ✓",
      },
      step4: {
        completedLine: "Tamamlandı • 18 dk içinde okundu ve not alındı",
        completedBadge: "🎉 Tamamlandı",
        mentalStateLabel: "Zihinsel Durum",
        mentalStateValue: "Sıfır Yük (Clear)",
        archiveLabel: "Arşiv Konumu",
        archiveValue: "Arşiv / 2026-Q1",
        progressLabel: "Haftalık İlerleme",
        progressValue: "%100 Başarı",
        restartHint: "Yeni bir kayıt yaparak döngüyü tekrar başlatabilirsiniz.",
        restartButton: "Başa Dön & Yeniden Başlat ↺",
      },
    },
  },
  features: {
    badge: "Ücretsiz & Kullanıma Hazır",
    title: "Düşünce hızında çalışan kişisel kütüphane.",
    description:
      "Masaüstü kalitesinde mimari, sıfır gecikme ve dikkatinizi dağıtmayan minimalist arayüz dili.",
    products: [
      {
        eyebrow: "Görev & Takvim",
        path: "/planlayici",
        title: "Görevler & Planlayıcı",
        description:
          'Bookmark\'ları aksiyona (Read, Watch, Apply) çevirin. Haftalık takvim sütunlarında ya da "Bugün" panelinde saatiyle planlayın.',
        imageKey: "planlayici" as const,
        imageAlt: "Planlayıcı — haftalık takvim ve seçili gün notları",
      },
      {
        eyebrow: "Hiyerarşi",
        path: "/koleksiyonlar",
        title: "Koleksiyonlar & Alt Klasörler",
        description:
          "Learning › Backend, Frontend gibi iç içe klasörler kurun. Alt koleksiyon önizlemeleri ve bağlantı sayılarıyla kütüphanenizi tek bakışta görün.",
        imageKey: "koleksiyonlar" as const,
        imageAlt: "Koleksiyonlar — klasör ağacı ve alt koleksiyon önizlemeleri",
      },
      {
        eyebrow: "Hızlı Kayıt",
        path: "/gelen-kutusu",
        title: "Akıllı Gelen Kutusu",
        description:
          "Karar vermeden kaydedin. Bekleyenleri inceleyin, koleksiyona taşıyın ya da tek tıkla takvime görev olarak dönüştürün.",
        imageKey: "gelenkutusu" as const,
        imageAlt: "Gelen Kutusu — tasnif edilmemiş kayıtlar ve hızlı aksiyonlar",
      },
      {
        eyebrow: "Tablo Görünümü",
        path: "/bookmarks",
        title: "Gelişmiş Bookmarks Tablosu",
        description:
          "Tüm bağlantılar tür, koleksiyon, etiket ve tarihle tek listede. ⌘K ile anında arama, filtreleme ve toplu işlem.",
        imageKey: "bookmarks" as const,
        imageAlt: "Bookmarks — filtrelenebilir tablo görünümü",
      },
    ],
    capabilities: [
      {
        title: "Etiket Taksonomisi & Hijyen",
        description:
          "Kullanım sıklığına göre sıralama, yeniden adlandırma ve hiçbir bağlantıda kullanılmayan hayalet etiketleri tek tıkla temizleme.",
      },
      {
        title: "⌘K Komut Menüsü & Klavye Odaklı Akış",
        description:
          "⌘K ile her yerden arayın, sayfalar arasında zıplayın, hızlı kaydeti açın. Kompakt liste modu ve açık/koyu tema ile arayüz sizin ritminize uyar.",
      },
      {
        title: "Tamamen Yerel & Çevrimdışı",
        description:
          "Verileriniz sunucuya gitmez; tarayıcınızın kendi güvenli deposunda kalır. İnternetsiz çalışır, sıfır takip, sıfır zorunlu abonelik.",
        stats: [
          { label: "Sunucu isteği", value: "0 KB" },
          { label: "Yerel depo", value: "Aktif" },
          { label: "Dışa aktar", value: "JSON · HTML" },
        ],
      },
    ],
  },
  extension: {
    badge: "Tarayıcı Eklentisi",
    chromeLabel: "Chrome",
    firefoxLabel: "Firefox",
    title: "Kişiselleştirdiğiniz kısayolla, sayfadan ayrılmadan kaydedin.",
    description:
      "Herhangi bir sayfada kendi belirlediğiniz tuş kombinasyonuna basın; başlık ve site otomatik gelir. Etiketi yazın, koleksiyonu seçin, Enter. Sayfa zaten kütüphanenizdeyse eklenti sizi uyarır.",
    shortcutNote: "örnek — kombinasyonu ayarlardan siz belirlersiniz",
    checklist: [
      "Özel kısayol kaydı",
      "Koleksiyon seçici & etiket",
      '"Zaten kayıtlı" uyarısı',
      "Uygulama kapalıyken kuyruğa alma",
    ],
    popup: {
      pageTitle: "System Design for Frontend Engineers",
      domain: "medium.com",
      alreadySaved: "Zaten kayıtlı ✓",
      collectionSelected: "Backend",
      enterHint: "ENTER: KAYDET · ESC: VAZGEÇ",
    },
  },
  premium: {
    badge: "Gelecek Sürüm — Premium",
    title: "Gücünüzü katlayacak bulut ve yapay zeka yetenekleri.",
    description:
      "Yerel ve ücretsiz mod sonsuza dek korunurken, ekipler ve power-user'lar için gelişmiş modül geliştiriyoruz.",
    comingSoonLabel: "Yakında",
    cards: [
      {
        icon: "☁️",
        title: "Bulut Senkronizasyonu",
        description:
          "Telefon, tablet ve iş bilgisayarı arasında anlık, uçtan uca şifrelenmiş (E2EE) kesintisiz eşitleme.",
        footer: "Uçtan Uca Şifreli",
      },
      {
        icon: "⚡",
        title: "AI Özet & Taksonomi",
        description:
          "Tek tıkla 3 maddelik makale özeti, otomatik koleksiyon ve anahtar kelime önerileri (onay mekanizmasıyla).",
        footer: "Kişisel Yapay Zeka",
      },
      {
        icon: "🔍",
        title: "Semantik & Vektörel Arama",
        description:
          'Tam URL veya başlığı hatırlamasanız bile "geçen ay gördüğüm postgres indexing yazısı" şeklinde arama yapın.',
        footer: "Vektör Veritabanı",
      },
      {
        icon: "🔔",
        title: "Takvim Entegrasyonu & E-posta",
        description:
          "Google Calendar / Apple Calendar entegrasyonu ve haftalık planlanan içerikleriniz için akıllı sabah bülteni.",
        footer: "iCal & Digest",
      },
    ],
    waitlist: {
      title: "Premium için Erken Erişim Sırasına Katılın",
      description: "İlk 500 kişiye ömür boyu indirimli erken erişim hakkı tanınacaktır.",
      placeholder: "eposta@ornek.com",
      button: "Haber Ver",
      successMessage: "Teşekkürler! Erken erişim listesine eklendiniz.",
    },
  },
  comparison: {
    badge: "Şeffaf Planlar",
    title: "Sizin için en doğru Guarda sürümünü seçin.",
    description: "Temel ihtiyaçların hepsi ücretsiz yerel sürümde mevcuttur.",
    free: {
      badgeTop: "Şu An Kullanılabilir",
      name: "FREE (Yerel Mod)",
      priceBadge: "Süresiz",
      price: "0 TL",
      priceNote: "/ daima ücretsiz",
      description:
        "Tek cihazda tam gizlilik, reklamsız ve limitsiz bilgi yönetimi arayanlar için tasarlandı.",
      includedFeatures: [
        "Yerel Tarayıcı Depolaması (IndexedDB)",
        "Kayıt & E-posta Girişi Gerektirmez",
        "Sınırsız Bookmark & Alt Koleksiyon",
        "Planlayıcı, Görevler & Haftalık Takvim",
        "Etiket Taksonomisi & Hijyen Temizliği",
      ],
      excludedFeatures: [
        "Cihazlar arası otomatik bulut eşitleme",
        "Yapay Zeka otomatik özet çıkarma",
      ],
      cta: "Şu An Kullan ↗",
    },
    premium: {
      badgeTop: "Geliştirme Aşamasında",
      name: "PREMIUM",
      priceBadge: "Erken Aşama",
      price: "Erken Erişim",
      priceNote: "/ çok yakında",
      description:
        "Tüm cihazlarda kesintisiz çalışan, AI özetleriyle zaman kazandıran tam donanımlı sürüm.",
      includedFeatures: [
        "FREE sürümün sunduğu tüm özellikler",
        "Sınırsız Çoklu Cihaz Bulut Senkronizasyonu",
        "AI Destekli Özet, Otomatik Etiketleme",
        "Semantik & Vektörel Doğal Dil Araması",
        "E-posta & Takvim (iCal) Entegrasyonu",
        "Öncelikli Destek & Yeni Sürümlere Erken Erişim",
      ],
      cta: "🔒 Yakında Satışa Açılacak",
    },
  },
  showcase: {
    badge: "Ürün Galerisi",
    title: "Her ekran iş akışınızı hızlandırmak için çizildi.",
    description:
      "Aşağıdaki sekmelere tıklayarak uygulamanın gerçek arayüz modüllerini inceleyebilirsiniz.",
    liveScreenLabel: "Canlı Ekran",
    autoplayLabelPlaying: "Otomatik Geçiş Aktif",
    autoplayLabelPaused: "Geçiş Duraklatıldı",
    tabs: [
      {
        id: "planlayici",
        label: "Planlayıcı (Haftalık & Günlük)",
        path: "guarda.local/planlayici",
        imageKey: "planlayici" as const,
        imageAlt: "Guarda Planlayıcı Ekranı",
      },
      {
        id: "gelen-kutusu",
        label: "Gelen Kutusu (Inbox)",
        path: "guarda.local/gelen-kutusu",
        imageKey: "gelenkutusu" as const,
        imageAlt: "Guarda Gelen Kutusu Ekranı",
      },
      {
        id: "koleksiyonlar",
        label: "Koleksiyonlar (Klasör Ağacı)",
        path: "guarda.local/koleksiyonlar/learning",
        imageKey: "koleksiyonlar" as const,
        imageAlt: "Guarda Koleksiyonlar Ekranı",
      },
      {
        id: "bookmarks",
        label: "Bookmarks (Tablo Listesi)",
        path: "guarda.local/bookmarks",
        imageKey: "bookmarks" as const,
        imageAlt: "Guarda Bookmarks Ekranı",
      },
      {
        id: "etiketler",
        label: "Etiketler & Taksonomi",
        path: "guarda.local/etiketler",
        imageKey: "etiketler" as const,
        imageAlt: "Guarda Etiketler Ekranı",
      },
    ],
  },
  finalCta: {
    badge: "Kurulumsuz Doğrudan Tarayıcıda",
    title: "Kaydetmeye ve bitirmeye bugün başlayın.",
    description:
      "Kayıt yok, kredi kartı yok, kurulum karmaşası yok. Saniyeler içinde Guarda'yı açın ve kendi kişisel kütüphanenizi yönetin.",
    cta: "Ücretsiz Demo'yu Aç ↗",
    footerNote: "JSON Dışa Aktarma Desteklenir • Sıfır Takipçi • IndexedDB Güvencesi",
  },
  footer: {
    tagline: "Save → Organize → Plan → Complete.",
    liveDemo: "Canlı Demo",
    copyright: "© 2026 Guarda. Yerel öncelikli bilgi kütüphanesi.",
    privacyLabel: "Gizlilik Politikası",
    copyrightLabel: "Telif Hakları",
  },
  legal: {
    backToHome: "← Ana Sayfa",
    privacy: {
      metaTitle: "Gizlilik Politikası ve KVKK Aydınlatma Metni — Guarda",
      title: "Gizlilik Politikası ve KVKK Aydınlatma Metni",
      updatedLabel: "Son güncelleme:",
      updatedDate: "15 Eylül 2026",
      sections: [
        {
          heading: "Veri Sorumlusu",
          paragraphs: [
            '6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu Guarda Bookmark\'dır. Bu metinle ilgili sorularınız için info@guardabookmark.com adresinden bizimle iletişime geçebilirsiniz.',
          ],
        },
        {
          heading: "Guarda Ücretsiz Sürümde Hangi Verileri İşliyoruz?",
          paragraphs: [
            "Guarda'nın ücretsiz yerel sürümü, hesap oluşturmanızı veya e-posta adresinizi paylaşmanızı gerektirmez. Kaydettiğiniz bağlantılar, koleksiyonlar, etiketler ve planlayıcı verileri yalnızca tarayıcınızın kendi güvenli deposunda (IndexedDB) tutulur ve herhangi bir sunucuya gönderilmez.",
            "Bu web sitesi (guarda.local demo dahil) barındırma sağlayıcımızın standart web sunucusu günlükleri (IP adresi, tarayıcı bilgisi, ziyaret zamanı gibi) dışında ek bir analitik veya takip aracı kullanmaz.",
          ],
        },
        {
          heading: "Erken Erişim Bekleme Listesi",
          paragraphs: [
            "Premium erken erişim bekleme listesine kaydolmak için bıraktığınız e-posta adresi, yalnızca erken erişim ve ürün güncellemeleri hakkında sizi bilgilendirmek amacıyla işlenir ve saklanır. Bu veriyi üçüncü taraflarla paylaşmayız.",
          ],
        },
        {
          heading: "Premium Sürüm Hakkında Ön Bilgilendirme",
          paragraphs: [
            "Geliştirmekte olduğumuz Premium sürüm, bulut senkronizasyonu için hesap bilgisi ve bookmark verinizin sunucularımızda işlenmesini gerektirecektir. Premium yayına alındığında, hangi verilerin hangi amaçla işleneceğini detaylandıran güncellenmiş bir aydınlatma metni burada yayınlanacaktır.",
          ],
        },
        {
          heading: "KVKK Kapsamındaki Haklarınız",
          paragraphs: [
            "KVKK'nın 11. maddesi uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde/yurt dışında aktarıldığı üçüncü kişileri bilme, eksik/yanlış işlenmişse düzeltilmesini isteme, silinmesini/yok edilmesini isteme ve bu işlemlerin aktarıldığı üçüncü kişilere bildirilmesini isteme haklarına sahipsiniz.",
            "Bu haklarınızı kullanmak için info@guardabookmark.com adresinden bize yazabilirsiniz.",
          ],
        },
      ],
    },
    copyright: {
      metaTitle: "Telif Hakları ve Fikri Mülkiyet — Guarda",
      title: "Telif Hakları ve Fikri Mülkiyet",
      updatedLabel: "Son güncelleme:",
      updatedDate: "15 Eylül 2026",
      sections: [
        {
          heading: "Mülkiyet",
          paragraphs: [
            "Guarda adı, logosu, arayüz tasarımı, bu web sitesindeki metinler, görseller ve ekran görüntüleri Guarda Bookmark'a aittir ve ilgili fikri mülkiyet mevzuatı kapsamında korunmaktadır.",
          ],
        },
        {
          heading: "Kullanım Kısıtları",
          paragraphs: [
            "Bu sitedeki içerik önceden yazılı izin alınmaksızın çoğaltılamaz, dağıtılamaz veya ticari amaçla kullanılamaz. Guarda adı ve logosu, Guarda Bookmark'ın yazılı onayı olmadan başka bir ürün, hizmet veya içerikle ilişkilendirilecek şekilde kullanılamaz.",
          ],
        },
        {
          heading: "Açık Kaynak Bileşenler",
          paragraphs: [
            "Guarda, aralarında React ve Next.js'in de bulunduğu çeşitli açık kaynak yazılım bileşenlerini kullanır. Bu bileşenler kendi lisans şartlarına tabidir ve bu sayfadaki telif hakkı bildirimi kapsamı dışındadır.",
          ],
        },
        {
          heading: "İletişim",
          paragraphs: [
            "Telif hakkı ile ilgili bildirim veya sorularınız için info@guardabookmark.com adresinden bizimle iletişime geçebilirsiniz.",
          ],
        },
      ],
    },
  },
  images: {
    planlayici: withBasePath("/planlayici.png"),
    koleksiyonlar: withBasePath("/koleksiyonlar.png"),
    gelenkutusu: withBasePath("/gelenkutusu.png"),
    bookmarks: withBasePath("/bookmarks.png"),
    etiketler: withBasePath("/etiketler.png"),
  },
}

export type Dictionary = typeof tr
