import type { Dictionary } from "./en";

const de: Dictionary = {
  nav: {
    missionLog: "Einsatzprotokoll",
    arsenal: "Arsenal",
    projects: "Projekte",
    captainsLog: "Kapitänslog",
    signals: "Signale",
    cv: "CV",
    resume: "Lebenslauf",
  },
  hero: {
    badge: "MISSIONSKONTROLLE: ONLINE",
    roles: [
      "Senior Software-Ingenieur",
      "Cloud-Architekt",
      "Backend-Spezialist",
      "Ehemaliger Marineoffizier",
    ],
    description:
      "Verbindung von <accent>maritimer Disziplin</accent> mit moderner Cloud-Technik. Ich baue belastbare Systeme, die auch bei rauer See online bleiben.",
    viewMissions: "Missionen Ansehen",
    openChannel: "Kanal Öffnen",
  },
  stats: {
    yearsTitle: "Jahre im Dienst",
    yearsDetail: "Ingenieurwesen und maritime Führung vereint.",
    incidentsTitle: "Gelöste Vorfälle",
    incidentsDetail:
      "Stabilitätskorrekturen, Ursachenanalysen und Bereitschaftsmaßnahmen.",
    deployTitle: "Deployment-Takt",
    deployValue: "Täglich",
    deployDetail:
      "CI/CD-Pipelines mit kontrollierten Rollouts und Observability-Gates.",
  },
  origin: {
    title: "Herkunft: Türkische Marine",
    subtitle: "Informatik-Ingenieur & Offizier | 2010 - 2021",
    description:
      "Wo Belastbarkeit geschmiedet wurde. Entwicklung missionskritischer Java-Systeme, bei denen Stabilität eine Notwendigkeit war, kein Feature. Implementierung strenger Verschlüsselungs- und Autorisierungsprotokolle.",
    badge: "MARINE OPS",
    tags: [
      "Missionskritische Systeme",
      "Sicherheitsprotokolle",
      "Verschlüsselung",
      "Java",
      "Führung",
    ],
  },
  missions: [
    {
      role: "Senior Full-Stack-Entwickler",
      period: "Mär 2023 - Heute",
      summary:
        "Bereitstellung von Spring-Boot-Microservices auf AWS EKS mit CI/CD über GitHub Actions, Optimierung der MongoDB Atlas/On-Prem-Performance und Integration von RabbitMQ + Redis für zuverlässige Workflows.",
    },
    {
      role: "Senior Software-Entwickler",
      period: "Feb 2022 - Mär 2023",
      summary:
        "Entwicklung von Spring-Boot-Backends (Java 11) und Entwurf relationaler Schemata für komplexe Webanwendungen mit Fokus auf Wartbarkeit und Skalierbarkeit.",
    },
    {
      role: "Software-Entwickler",
      period: "Apr 2021 - Feb 2022",
      summary:
        "Bereitstellung von REST/GraphQL-APIs, MQTT-basierten IoT-Integrationen und Android-Apps mit GCP/Firebase-Diensten bei gleichzeitigem Mentoring von Junior-Entwicklern.",
    },
    {
      role: "Informatik-Ingenieur",
      period: "Aug 2010 - Apr 2021",
      summary:
        "Entwicklung missionskritischer Java-Systeme mit Verschlüsselungs-/Autorisierungskontrollen und stabilitätsorientierter Wartung auf On-Prem- und Web-Plattformen.",
    },
  ],
  projects: {
    title: "Aktuelle Operationen",
    additionalTitle: "Weitere Projekte",
    featured: [
      {
        description:
          "Microservice-Gehaltsabrechnungsplattform mit containerisierter Bereitstellung, nachrichtengesteuerten Integrationen und Cloud-Infrastruktur.",
      },
      {
        description:
          "Backend-Dienste und zwei Android-Anwendungen als einheitliche Plattform bereitgestellt.",
      },
      {
        description: "Backend-Dienste für eine cloud-verbundene Anwendung.",
      },
    ],
    additional: [
      { name: "Advanced Harpoon Weapon Control System (AHWCS) Simulator" },
      { name: "Java-Schulung (Turkcell)" },
      { name: "Lagerverwaltungssystem" },
      { name: "Testokur" },
      { name: "Voyage Data Recorder" },
    ],
  },
  missionLog: {
    title: "EINSATZPROTOKOLL",
  },
  arsenal: {
    title: "Technisches Arsenal",
    subtitle: "Waffensysteme",
    description:
      "Die Werkzeuge und Technologien, die ich im Einsatz verwende — kampferprobt und einsatzbereit.",
    stacks: [
      "Backend",
      "Cloud & DevOps",
      "Daten",
      "Künstliche Intelligenz",
      "Frontend",
      "Testing",
    ],
  },
  heatmap: {
    label: "Operationstempo",
    title: "Aktivitätssonar",
    description:
      "Ein Jahr Ingenieuraktivität — Commits, Reviews und Deployments.",
    contributions: "Beiträge",
    inLastYear: "im letzten Jahr",
    less: "Weniger",
    more: "Mehr",
  },
  captainsLog: {
    label: "Meldungen",
    title: "Kapitänslog",
    description:
      "Feldnotizen zu Technik, Architektur und Lektionen aus der Tiefe.",
    latest: "Neueste",
    read: "Lesen",
    posts: [
      {
        title: "Von Schiffsbrücken zu Code-Brücken",
        excerpt:
          "Wie ein Jahrzehnt Marinetechnik mich lehrte, dass die besten Systeme diejenigen sind, die den Sturm überstehen — nicht die, die ihn vermeiden.",
      },
      {
        title: "Kubernetes-Kriegsgeschichten: Lektionen aus der Produktion",
        excerpt:
          "Echte Vorfälle, echte Lösungen. Was der Betrieb von 50+ Microservices auf EKS mich über Container-Orchestrierung gelehrt hat.",
      },
      {
        title: "Spring Boot Performance: Jenseits der Standardeinstellungen",
        excerpt:
          "Standardkonfigurationen sind Ausgangspunkte, keine Ziele. Wie wir unsere API-Antwortzeiten um 60% reduziert haben.",
      },
      {
        title: "Agentische KI: Systeme bauen, die in Schritten denken",
        excerpt:
          "Über Chatbots hinaus — wie ich autonome KI-Agenten erforsche, die planen, ausführen und sich selbst korrigieren.",
      },
    ],
  },
  endorsements: {
    label: "Crew-Berichte",
    title: "Empfehlungen",
    description: "Was die Crew über die Zusammenarbeit sagt.",
    items: [
      {
        text: "Gorkem bringt ein Maß an operativer Disziplin mit, das in der Softwareentwicklung selten ist. Wenn unsere Produktionssysteme unter Druck stehen, ist er die Person, an die sich alle wenden. Sein maritimer Hintergrund ist nicht nur ein Gesprächsthema — man sieht es daran, wie er für Ausfälle architekturiert und bei Vorfällen ruhig bleibt.",
      },
      {
        text: "Mit Gorkem zu arbeiten war eine Meisterklasse im Bau wartbarer Systeme. Er schreibt nicht nur Code, der funktioniert — er schreibt Code, den andere verstehen, erweitern und um 3 Uhr morgens debuggen können. Seine Spring-Boot-Expertise ist tiefgreifend und praxisnah.",
      },
      {
        text: "Gorkems Fähigkeit, zwischen Backend-APIs, IoT-Integrationen und mobiler Entwicklung zu wechseln, war beeindruckend. Er hat unsere Junior-Entwickler geduldig betreut und immer auf bessere Testpraktiken gedrängt. Ein echter Kraftmultiplikator in jedem Team.",
      },
      {
        text: "Ich habe mit vielen Backend-Ingenieuren gearbeitet, aber Gorkem ist in einer eigenen Liga. Er liefert nicht nur APIs — er denkt auch an die Entwicklererfahrung auf der Frontend-Seite. Seine Endpunkte sind sauber, gut dokumentiert und eine Freude zu integrieren. Darüber hinaus versteht er Systemdesign auf einem Niveau, das die teamübergreifende Zusammenarbeit mühelos macht. Wenn Sie jemanden brauchen, der die Lücke zwischen Backend und Frontend reibungslos überbrückt, ist Gorkem Ihre Person.",
      },
    ],
  },
  credentials: {
    certifications: "Zertifizierungen",
    languages: "Sprachen",
    publication: "Publikation",
    langNames: ["Türkisch", "Englisch", "Französisch", "Luxemburgisch"],
    langLevels: ["Muttersprache", "Fließend", "Konversationssicher", "Anfänger"],
  },
  signals: {
    label: "Signale",
    title: "Signale & Kanäle",
    description:
      "Direkte Leitungen für Zusammenarbeit, Beratung und Missionseinladungen.",
  },
  cta: {
    label: "Bereit für die nächste Mission?",
    title: "Lasst uns etwas",
    titleAccent: "Belastbares bauen",
    description:
      "Ob Infrastruktur skalieren, Backends härten oder Cloud-native Systeme entwerfen — ich bin bereit einzutauchen.",
    contact: "Kontakt Aufnehmen",
    downloadResume: "Lebenslauf Herunterladen",
  },
  footer: {
    tagline:
      "Senior Software-Ingenieur, der belastbare Systeme mit maritimer Präzision baut.",
    navigation: "Navigation",
    connect: "Kontakt",
    rights: "Alle Rechte vorbehalten.",
    builtWith: "Gebaut mit Next.js · Präzise bereitgestellt",
  },
  blog: {
    allLogs: "Alle Einträge",
    backToLog: "Zurück zum Kapitänslog",
    shareLog: "Eintrag teilen",
    notFound: "Logeintrag nicht gefunden.",
    returnToBase: "Zurück zur Basis",
  },
  terminal: {
    open: "Kommandoterminal öffnen",
    restore: "Terminal",
  },
  intro: {
    depth: "Tiefe",
    pressure: "Druck",
    heading: "Kurs",
    status: "Status",
    coord: "Koord",
    hull: "Rümpf",
    systemLog: "Systemprotokoll",
    scanning: "Scannen",
    lockOn: "Zielerfassung",
    confirmed: "Bestätigt",
    scanBarScanning: "SONAR-SWEEP AKTIV — SEKTOR 7G WIRD GESCANNT",
    scanBarLocking: "KONTAKT ERKANNT — ZIELERFASSUNG LÄUFT",
    scanBarIdentified: "ZIEL IDENTIFIZIERT — FREIGABE ERTEILT",
    identityVerified: "Identität Bestätigt",
    role: "Rolle",
    seniorEngineer: "Senior Ingenieur",
    access: "Zugang",
    granted: "Gewährt",
    skip: "Überspringen",
  },
  notFound: {
    signalLost: "Signal Verloren",
    title: "SEKTOR NICHT GEFUNDEN",
    description:
      "Die eingegebenen Koordinaten stimmen mit keinem bekannten Sektor überein. Dieses Gebiet ist unerforscht — oder die Route wurde außer Dienst gestellt.",
    returnToBase: "Zurück zur Basis",
    goBack: "Zurück",
    systemLog: "Systemprotokoll",
  },
  skip: "Zum Hauptinhalt springen",
};

export default de;
