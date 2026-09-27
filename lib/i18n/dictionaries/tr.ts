import type { Dictionary } from "./en";

const tr: Dictionary = {
  nav: {
    missionLog: "Görev Günlüğü",
    arsenal: "Cephanelik",
    projects: "Projeler",
    captainsLog: "Kaptan Günlüğü",
    signals: "Sinyaller",
    cv: "CV",
  },
  hero: {
    badge: "GÖREV KONTROLÜ: ÇEVRİMİÇİ",
    roles: [
      "Kıdemli Yazılım Mühendisi",
      "Eski Denizaltı Subayı",
      "Backend & Bulut",
      "Uygulamalı Yapay Zekâ",
    ],
    description:
      "Eski denizaltı subayıyım. Baskı altında ayakta kalan sistemler kuruyorum: <accent>görev kritik backend'ler</accent> ve güvenilmeden önce test edilen yapay zekâ.",
    viewMissions: "Görevleri Gör",
    openChannel: "Kanal Aç",
  },
  stats: {
    yearsTitle: "Hizmet Yılı",
    yearsDetail: "Mühendislik ve denizcilik liderliği bir arada.",
    incidentsTitle: "Olay Müdahalesi",
    incidentsValue: "Nöbet",
    incidentsDetail:
      "Üretim sistemlerinde kök neden analizi ve stabilite düzeltmeleri.",
    deployTitle: "Dağıtım Sıklığı",
    deployValue: "Günlük",
    deployDetail:
      "Kontrollü dağıtımlar ve gözlemlenebilirlik kapılarıyla CI/CD hatları.",
  },
  origin: {
    title: "Köken: Türk Deniz Kuvvetleri",
    subtitle: "Denizaltı Subayı & Yazılım Mühendisi | 2010 - 2021",
    description:
      "Denizaltılarda çeşitli görevlerde bulundum; ulusal ve NATO tatbikatlarına hem planlayıcı hem katılımcı olarak katıldım. Harpoon silah kontrol simülatörü ve seyir veri kaydedici dahil görev kritik deniz sistemleri için yazılım geliştirdim.",
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
      role: "Kıdemli Yazılım Mühendisi",
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
      role: "Denizaltı Subayı & Yazılım Mühendisi",
      period: "Ağu 2010 - Nis 2021",
      summary:
        "Denizaltılarda görev yaptım; NATO tatbikatlarına planlayıcı ve katılımcı olarak katıldım. Şifreleme ve erişim kontrollü görev kritik deniz yazılımları geliştirdim.",
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
          "Yüzsüz kanallar için yapay zekâ video stüdyosu: tek bir brief, seslendirilmiş uzun bir videoya ve Shorts'a dönüşür; içerik üreticisi onaylar, ardından YouTube, TikTok ve Instagram'a planlı olarak yayınlanır.",
      },
      {
        description:
          "Sınır ötesi çalışanların uzaktan çalışma günlerini yıllık limitlere göre takip etmesini sağlayan telefon ve saat uygulaması.",
      },
      {
        description:
          "Eski COBOL kodlarından iş kurallarını yapay zekâ ile çıkarma deneyi: çıkan kurallar elle yazılmış bir cevap anahtarıyla karşılaştırılıyor ve davranışın aynı olduğu tekrar çalıştırılarak doğrulanıyor.",
      },
    ],
    additional: [
      { name: "Gelişmiş Harpoon Silah Kontrol Sistemi (AHWCS) Simülatörü" },
      { name: "Java Eğitimi (Turkcell)" },
      { name: "Stok Yönetim Sistemi" },
      { name: "Testokur" },
      { name: "Seyir Veri Kaydedici" },
      { name: "ServisRotam" },
      { name: "Sayiyo" },
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
      "Son bir yılın GitHub katkıları — commit, pull request, inceleme ve issue.",
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
          "Gerçek olaylar, gerçek çözümler. EKS üzerinde bir bordro platformu işletmek bana konteyner orkestrasyon hakkında ne öğretti.",
      },
      {
        title: "Spring Boot Performansı: Varsayılanların Ötesinde",
        excerpt:
          "Varsayılan yapılandırmalar başlangıç noktalarıdır, hedef değil. Bir bordro API'si yük altında yavaşken neyi değiştirdik.",
      },
      {
        title: "Ajantik Yapay Zeka: Adım Adım Düşünen Sistemler İnşa Etmek",
        excerpt:
          "Chatbotların ötesinde — planlayan, yürüten ve kendini düzeltebilen otonom yapay zeka ajanlarını nasıl keşfediyorum.",
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
    label: "Birlikte çalışalım",
    title: "Birlikte",
    titleAccent: "Dayanıklı Bir Şey İnşa Edelim",
    description:
      "Kıdemli backend ya da uygulamalı yapay zekâ rolü için mi arıyorsunuz, yoksa denizaltı ve sualtı sistemlerinde operatör gözüne mi ihtiyacınız var? Kısa bir not bırakın, iki iş günü içinde dönüş yaparım.",
    contact: "İletişime Geç",
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
    seniorEngineer: "Kıdemli Yazılım Mühendisi",
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
