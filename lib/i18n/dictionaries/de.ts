import type { Dictionary } from "./en";

const de: Dictionary = {
  nav: {
    missionLog: "Einsatzprotokoll",
    arsenal: "Arsenal",
    projects: "Projekte",
    captainsLog: "Kapitänslog",
    signals: "Signale",
    cv: "CV",
  },
  hero: {
    badge: "MISSIONSKONTROLLE: ONLINE",
    roles: [
      "Senior Software-Ingenieur",
      "Ehemaliger U-Boot-Offizier",
      "Backend & Cloud",
      "Angewandte KI",
    ],
    description:
      "Ehemaliger U-Boot-Offizier. Ich baue Systeme, die unter Druck standhalten: <accent>missionskritische Backends</accent> und angewandte KI, die getestet wird, bevor man ihr vertraut.",
    viewMissions: "Missionen Ansehen",
    openChannel: "Kanal Öffnen",
  },
  stats: {
    yearsTitle: "Jahre im Dienst",
    yearsDetail: "Ingenieurwesen und maritime Führung vereint.",
    incidentsTitle: "Störungsreaktion",
    incidentsValue: "Bereitschaft",
    incidentsDetail:
      "Ursachenanalysen und Stabilitätskorrekturen an Produktionssystemen.",
    deployTitle: "Deployment-Takt",
    deployValue: "Täglich",
    deployDetail:
      "CI/CD-Pipelines mit kontrollierten Rollouts und Observability-Gates.",
  },
  origin: {
    title: "Herkunft: Türkische Marine",
    subtitle: "U-Boot-Offizier & Software-Ingenieur | 2010 - 2021",
    description:
      "Dienst auf U-Booten in verschiedenen Funktionen, darunter nationale und NATO-Übungen als Planer und Teilnehmer. Software für missionskritische Marinesysteme, darunter ein Harpoon-Feuerleitsimulator und ein Schiffsdatenschreiber.",
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
      role: "Senior Software Engineer",
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
      role: "U-Boot-Offizier & Software-Ingenieur",
      period: "Aug 2010 - Apr 2021",
      summary:
        "Dienst auf U-Booten, darunter NATO-Übungen als Planer und Teilnehmer. Entwicklung missionskritischer Marinesoftware mit Verschlüsselung und Zugriffskontrollen.",
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
          "KI-Videostudio für gesichtslose Kanäle: Aus einem Briefing entstehen ein vertontes Langvideo und Shorts, vom Creator freigegeben und dann nach Plan auf YouTube, TikTok und Instagram veröffentlicht.",
      },
      {
        description:
          "Eine App, mit der Grenzgänger ihre Homeoffice-Tage gegen jährliche Grenzen verfolgen, auf dem Handy und am Handgelenk.",
      },
      {
        description:
          "Ein Experiment, Geschäftsregeln per KI aus Legacy-COBOL-Code zu extrahieren, sie gegen einen handgeschriebenen Lösungsschlüssel zu prüfen und das Verhalten durch erneutes Ausführen zu bestätigen.",
      },
    ],
    additional: [
      { name: "Advanced Harpoon Weapon Control System (AHWCS) Simulator" },
      { name: "Java-Schulung (Turkcell)" },
      { name: "Lagerverwaltungssystem" },
      { name: "Testokur" },
      { name: "Voyage Data Recorder" },
      { name: "ServisRotam" },
      { name: "Sayiyo" },
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
      "GitHub-Beiträge des letzten Jahres — Commits, Pull Requests, Reviews und Issues.",
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
          "Echte Vorfälle, echte Lösungen. Was der Betrieb einer Payroll-Plattform auf EKS mich über Container-Orchestrierung gelehrt hat.",
      },
      {
        title: "Spring Boot Performance: Jenseits der Standardeinstellungen",
        excerpt:
          "Standardkonfigurationen sind Ausgangspunkte, keine Ziele. Was wir geändert haben, als eine Payroll-API unter Last zu langsam war.",
      },
      {
        title: "Agentische KI: Systeme bauen, die in Schritten denken",
        excerpt:
          "Über Chatbots hinaus — wie ich autonome KI-Agenten erforsche, die planen, ausführen und sich selbst korrigieren.",
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
    label: "Zusammenarbeiten",
    title: "Lasst uns etwas",
    titleAccent: "Belastbares bauen",
    description:
      "Sie suchen eine Senior-Rolle im Backend oder in angewandter KI, oder brauchen den Blick eines Operators auf U-Boot- und Unterwassersysteme? Schreiben Sie mir kurz, ich antworte innerhalb von zwei Werktagen.",
    contact: "Kontakt Aufnehmen",
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
    seniorEngineer: "Senior Software Engineer",
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
