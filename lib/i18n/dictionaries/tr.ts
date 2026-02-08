import type { Dictionary } from "./en";

const tr: Dictionary = {
  nav: {
    missionLog: "Görev Günlüğü",
    arsenal: "Cephanelik",
    projects: "Projeler",
    captainsLog: "Kaptan Günlüğü",
    signals: "Sinyaller",
    cv: "CV",
    resume: "Özgeçmiş",
  },
  hero: {
    badge: "GÖREV KONTROLÜ: ÇEVRİMİÇİ",
    roles: [
      "Kıdemli Yazılım Mühendisi",
      "Bulut Mimarı",
      "Backend Uzmanı",
      "Eski Deniz Subayı",
    ],
    description:
      "<accent>Denizcilik disiplinini</accent> modern bulut mühendisliğiyle birleştiriyorum. Deniz kabarıdığında bile ayakta kalan dayanıklı sistemler inşa ediyorum.",
    viewMissions: "Görevleri Gör",
    openChannel: "Kanal Aç",
  },
  stats: {
    yearsTitle: "Hizmet Yılı",
    yearsDetail: "Mühendislik ve denizcilik liderliği bir arada.",
    incidentsTitle: "Çözülen Olay",
    incidentsDetail:
      "Stabilite düzeltmeleri, kök neden analizleri ve nöbet müdahaleleri.",
    deployTitle: "Dağıtım Sıklığı",
    deployValue: "Günlük",
    deployDetail:
      "Kontrollü dağıtımlar ve gözlemlenebilirlik kapılarıyla CI/CD hatları.",
  },
  origin: {
    title: "Köken: Türk Deniz Kuvvetleri",
    subtitle: "Bilgisayar Mühendisi & Subay | 2010 - 2021",
    description:
      "Dayanıklılığın inşa edildiği yer. Stabilitenin bir özellik değil, zorunluluk olduğu görev kritik Java sistemleri geliştirdim. Sıkı güvenlik şifreleme ve yetkilendirme protokolleri uyguladım.",
    badge: "DENİZ OPS",
    tags: [
      "Görev Kritik Sistemler",
      "Güvenlik Protokolleri",
      "Şifreleme",
      "Java",
      "Liderlik",
    ],
  },
  missions: [
    {
      role: "Kıdemli Full Stack Geliştirici",
      period: "Mar 2023 - Devam Ediyor",
      summary:
        "AWS EKS üzerinde Spring Boot mikroservisleri, GitHub Actions ile CI/CD, MongoDB Atlas/on-prem performans optimizasyonu ve güvenilir iş akışları için RabbitMQ + Redis entegrasyonu.",
    },
    {
      role: "Kıdemli Yazılım Geliştirici",
      period: "Şub 2022 - Mar 2023",
      summary:
        "Karmaşık web uygulamaları için Spring Boot (Java 11) backend'leri ve ilişkisel şemalar tasarladım; bakım kolaylığı ve ölçeklenebilirliği ön planda tuttum.",
    },
    {
      role: "Yazılım Geliştirici",
      period: "Nis 2021 - Şub 2022",
      summary:
        "REST/GraphQL API'leri, MQTT tabanlı IoT entegrasyonları ve GCP/Firebase servisleriyle Android uygulamaları geliştirdim; junior geliştiricilere mentorluk yaptım.",
    },
    {
      role: "Bilgisayar Mühendisi",
      period: "Ağu 2010 - Nis 2021",
      summary:
        "Şifreleme/yetkilendirme kontrolleriyle görev kritik Java sistemleri geliştirdim; on-prem ve web platformlarında stabilite odaklı bakım yaptım.",
    },
  ],
  projects: {
    title: "Son Operasyonlar",
    additionalTitle: "Ek Projeler",
    featured: [
      {
        description:
          "Konteynerleştirilmiş dağıtım, mesaj odaklı entegrasyonlar ve bulut altyapısıyla mikroservis bordro platformu.",
      },
      {
        description:
          "Tek bir platform olarak sunulan backend servisleri ve iki Android uygulaması.",
      },
      {
        description: "Bulut bağlantılı bir uygulama için backend servisleri.",
      },
    ],
    additional: [
      { name: "Gelişmiş Harpoon Silah Kontrol Sistemi (AHWCS) Simülatörü" },
      { name: "Java Eğitimi (Turkcell)" },
      { name: "Stok Yönetim Sistemi" },
      { name: "Testokur" },
      { name: "Seyir Veri Kaydedici" },
    ],
  },
  missionLog: {
    title: "GÖREV GÜNLÜĞÜ",
  },
  arsenal: {
    title: "Teknik Cephanelik",
    subtitle: "Silah Sistemleri",
    description:
      "Sahada kullandığım araçlar ve teknolojiler — savaşta test edilmiş ve göreve hazır.",
    stacks: [
      "Backend",
      "Bulut & DevOps",
      "Veri",
      "Yapay Zeka",
      "Frontend",
      "Test",
    ],
  },
  heatmap: {
    label: "Operasyon Temposu",
    title: "Aktivite Sonarı",
    description:
      "Bir yıllık mühendislik aktivitesi — commitler, incelemeler ve dağıtımlar.",
    contributions: "katkı",
    inLastYear: "son bir yılda",
    less: "Az",
    more: "Çok",
  },
  captainsLog: {
    label: "Raporlar",
    title: "Kaptan Günlüğü",
    description:
      "Mühendislik, mimari ve derinlerden çıkarılan dersler üzerine saha notları.",
    latest: "Son",
    read: "Oku",
    posts: [
      {
        title: "Gemi Köprülerinden Kod Köprülerine",
        excerpt:
          "On yıllık denizcilik mühendisliği bana en iyi sistemlerin fırtınadan kaçanlar değil, fırtınaya dayananlar olduğunu öğretti.",
      },
      {
        title: "Kubernetes Savaş Hikayeleri: Üretimden Dersler",
        excerpt:
          "Gerçek olaylar, gerçek çözümler. EKS üzerinde 50+ mikroservis yönetmek bana konteyner orkestrasyon hakkında ne öğretti.",
      },
      {
        title: "Spring Boot Performansı: Varsayılanların Ötesinde",
        excerpt:
          "Varsayılan yapılandırmalar başlangıç noktalarıdır, hedef değil. API yanıt sürelerimizi %60 nasıl düşürdük.",
      },
      {
        title: "Ajantik Yapay Zeka: Adım Adım Düşünen Sistemler İnşa Etmek",
        excerpt:
          "Chatbotların ötesinde — planlayan, yürüten ve kendini düzeltebilen otonom yapay zeka ajanlarını nasıl keşfediyorum.",
      },
    ],
  },
  endorsements: {
    label: "Mürettebat Raporları",
    title: "Tavsiyeler",
    description: "Mürettebat birlikte çalışmak hakkında ne diyor.",
    items: [
      {
        text: "Gorkem, yazılım mühendisliğinde nadir görülen bir operasyonel disiplin getiriyor. Üretim sistemlerimiz baskı altındayken herkesin başvurduğu kişi o. Denizcilik geçmişi sadece bir konuşma konusu değil — arıza için nasıl mimari kurduğunda ve olaylar sırasında nasıl sakin kaldığında görebilirsiniz.",
      },
      {
        text: "Gorkem ile çalışmak, bakımı kolay sistemler inşa etmede bir ustalık dersiydi. Sadece çalışan kod yazmaz — başkalarının anlayabileceği, genişletebileceği ve sabah 3'te hata ayıklayabileceği kod yazar. Spring Boot uzmanlığı derin ve pratiktir.",
      },
      {
        text: "Gorkem'in backend API'leri, IoT entegrasyonları ve mobil geliştirme arasında geçiş yapabilme yeteneği etkileyiciydi. Junior geliştiricilerimize sabırla mentorluk yaptı ve her zaman daha iyi test pratikleri için baskı yaptı. Her takımda gerçek bir güç çarpanı.",
      },
      {
        text: "Birçok backend mühendisiyle çalıştım ama Gorkem bambaşka bir ligde. Sadece API sunmaz — frontend tarafındaki geliştirici deneyimini de düşünür. Endpoint'leri temiz, iyi dokümante edilmiş ve entegre etmek bir zevk. Üstelik, sistem tasarımını ekipler arası iş birliğini zahmetsiz kılan bir seviyede anlıyor. Backend ve frontend arasındaki boşluğu sürtünmesiz kapatan birine ihtiyacınız varsa, Gorkem sizin kişiniz.",
      },
    ],
  },
  credentials: {
    certifications: "Sertifikalar",
    languages: "Diller",
    publication: "Yayın",
    langNames: ["Türkçe", "İngilizce", "Fransızca", "Lüksemburgca"],
    langLevels: ["Ana Dil", "Akıcı", "Konuşma Düzeyi", "Başlangıç"],
  },
  signals: {
    label: "Sinyaller",
    title: "Sinyaller & Kanallar",
    description:
      "İş birliği, danışmanlık ve görev davetiyeleri için doğrudan hatlar.",
  },
  cta: {
    label: "Bir sonraki göreve hazır mısınız?",
    title: "Birlikte",
    titleAccent: "Dayanıklı Bir Şey İnşa Edelim",
    description:
      "İster altyapı ölçeklendirme, ister backend güçlendirme, ister bulut-yerel sistem tasarımı olsun — dalışa hazırım.",
    contact: "İletişime Geç",
    downloadResume: "Özgeçmişi İndir",
  },
  footer: {
    tagline:
      "Denizcilik hassasiyetiyle dayanıklı sistemler inşa eden Kıdemli Yazılım Mühendisi.",
    navigation: "Navigasyon",
    connect: "İletişim",
    rights: "Tüm hakları saklıdır.",
    builtWith: "Next.js ile yapıldı · Hassasiyetle dağıtıldı",
  },
  blog: {
    allLogs: "Tüm Kayıtlar",
    backToLog: "Kaptan Günlüğüne Dön",
    shareLog: "Bu kaydı paylaş",
    notFound: "Günlük kaydı bulunamadı.",
    returnToBase: "Üsse Dön",
  },
  terminal: {
    open: "Komut terminalini aç",
    restore: "terminal",
  },
  intro: {
    depth: "Derinlik",
    pressure: "Basınç",
    heading: "Rota",
    status: "Durum",
    coord: "Koord",
    hull: "Tekne",
    systemLog: "Sistem Günlüğü",
    scanning: "Tarama",
    lockOn: "Kilitlenme",
    confirmed: "Onaylandı",
    scanBarScanning: "SONAR TARAMASI AKTİF — SEKTÖR 7G TARANIYOR",
    scanBarLocking: "TEMAS TESPİT EDİLDİ — HEDEF KİLITLEME BAŞLATILDI",
    scanBarIdentified: "HEDEF TANIMLANDI — ERİŞİM VERİLDİ",
    identityVerified: "Kimlik Doğrulandı",
    role: "Rol",
    seniorEngineer: "Kıdemli Mühendis",
    access: "Erişim",
    granted: "Verildi",
    skip: "Geç",
  },
  notFound: {
    signalLost: "Sinyal Kayboldu",
    title: "SEKTÖR BULUNAMADI",
    description:
      "Girdiğiniz koordinatlar bilinen hiçbir sektörle eşleşmiyor. Bu bölge keşfedilmemiş — veya rota hizmet dışı bırakılmış.",
    returnToBase: "Üsse Dön",
    goBack: "Geri Dön",
    systemLog: "Sistem Günlüğü",
  },
  skip: "Ana içeriğe geç",
};

export default tr;
