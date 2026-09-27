import type { Dictionary } from "./en";

const fr: Dictionary = {
  nav: {
    missionLog: "Journal de Bord",
    arsenal: "Arsenal",
    projects: "Projets",
    captainsLog: "Journal du Capitaine",
    signals: "Signaux",
    cv: "CV",
  },
  hero: {
    badge: "CONTRÔLE DE MISSION : EN LIGNE",
    roles: [
      "Ingénieur Logiciel Senior",
      "Ancien Officier Sous-marinier",
      "Backend & Cloud",
      "IA Appliquée",
    ],
    description:
      "Ancien officier sous-marinier. Je construis des systèmes qui tiennent sous pression : <accent>backends critiques</accent> et IA appliquée, testée avant d'être adoptée.",
    viewMissions: "Voir les Missions",
    openChannel: "Ouvrir le Canal",
  },
  stats: {
    yearsTitle: "Années de Service",
    yearsDetail: "Ingénierie et leadership naval combinés.",
    incidentsTitle: "Réponse aux incidents",
    incidentsValue: "Astreinte",
    incidentsDetail:
      "Analyses de causes racines et corrections de stabilité sur les systèmes de production.",
    deployTitle: "Cadence de Déploiement",
    deployValue: "Quotidien",
    deployDetail:
      "Pipelines CI/CD avec déploiements contrôlés et portes d'observabilité.",
  },
  origin: {
    title: "Origine : Marine Turque",
    subtitle: "Officier Sous-marinier & Ingénieur Logiciel | 2010 - 2021",
    description:
      "Service à bord de sous-marins dans divers rôles, dont des exercices nationaux et OTAN en tant que planificateur et participant. Développement de logiciels pour des systèmes navals critiques, dont un simulateur de conduite de tir Harpoon et un enregistreur de données de voyage.",
    badge: "OPS MARINE",
    tags: [
      "Systèmes Critiques",
      "Protocoles de Sécurité",
      "Chiffrement",
      "Java",
      "Leadership",
    ],
  },
  missions: [
    {
      role: "Ingénieur logiciel senior",
      period: "Mars 2023 - Présent",
      summary:
        "Livraison de microservices Spring Boot sur AWS EKS avec CI/CD via GitHub Actions, optimisation des performances MongoDB Atlas/on-prem et intégration de RabbitMQ + Redis pour des workflows fiables.",
    },
    {
      role: "Développeur Logiciel Senior",
      period: "Fév 2022 - Mars 2023",
      summary:
        "Construction de backends Spring Boot (Java 11) et conception de schémas relationnels pour des applications web complexes, en privilégiant la maintenabilité et la scalabilité.",
    },
    {
      role: "Développeur Logiciel",
      period: "Avr 2021 - Fév 2022",
      summary:
        "Livraison d'APIs REST/GraphQL, d'intégrations IoT basées sur MQTT et d'applications Android avec des services GCP/Firebase, tout en mentorant les développeurs juniors.",
    },
    {
      role: "Officier Sous-marinier & Ingénieur Logiciel",
      period: "Août 2010 - Avr 2021",
      summary:
        "Service à bord de sous-marins, dont des exercices OTAN comme planificateur et participant. Développement de logiciels navals critiques avec chiffrement et contrôle d'accès.",
    },
  ],
  projects: {
    title: "Opérations Récentes",
    additionalTitle: "Projets Supplémentaires",
    featured: [
      {
        description:
          "Plateforme de paie en microservices avec livraison conteneurisée, intégrations pilotées par messages et infrastructure cloud.",
      },
      {
        description:
          "Studio vidéo IA pour chaînes sans visage : un brief devient une vidéo longue narrée et des Shorts, validés par le créateur puis programmés sur YouTube, TikTok et Instagram.",
      },
      {
        description:
          "Une app qui aide les travailleurs frontaliers à suivre leurs jours de télétravail par rapport aux plafonds annuels, sur téléphone et au poignet.",
      },
      {
        description:
          "Une expérience d'extraction de règles métier depuis du code COBOL existant grâce à l'IA, vérifiées ensuite contre un corrigé écrit à la main et rejouées pour confirmer le comportement.",
      },
    ],
    additional: [
      { name: "Simulateur du Système de Contrôle d'Armes Harpoon Avancé (AHWCS)" },
      { name: "Formation Java (Turkcell)" },
      { name: "Système de Gestion des Stocks" },
      { name: "Testokur" },
      { name: "Enregistreur de Données de Voyage" },
      { name: "ServisRotam" },
      { name: "Sayiyo" },
    ],
  },
  missionLog: {
    title: "JOURNAL DE BORD",
  },
  arsenal: {
    title: "Arsenal Technique",
    subtitle: "Systèmes d'Armes",
    description:
      "Les outils et technologies que je déploie sur le terrain — éprouvés au combat et prêts pour la mission.",
    stacks: [
      "Backend",
      "Cloud & DevOps",
      "Données",
      "Intelligence Artificielle",
      "Frontend",
      "Tests",
    ],
  },
  heatmap: {
    label: "Tempo Opérationnel",
    title: "Sonar d'Activité",
    description:
      "Contributions GitHub sur un an — commits, pull requests, revues et issues.",
    contributions: "contributions",
    inLastYear: "au cours de l'année",
    less: "Moins",
    more: "Plus",
  },
  captainsLog: {
    label: "Dépêches",
    title: "Journal du Capitaine",
    description:
      "Notes de terrain sur l'ingénierie, l'architecture et les leçons tirées des profondeurs.",
    latest: "Dernier",
    read: "Lire",
    posts: [
      {
        title: "Des Ponts de Navire aux Ponts de Code",
        excerpt:
          "Comment une décennie d'ingénierie navale m'a appris que les meilleurs systèmes sont ceux qui survivent à la tempête — pas ceux qui l'évitent.",
      },
      {
        title: "Récits de Guerre Kubernetes : Leçons de la Production",
        excerpt:
          "De vrais incidents, de vraies corrections. Ce que l'exploitation d'une plateforme de paie sur EKS m'a appris sur l'orchestration de conteneurs.",
      },
      {
        title: "Performance Spring Boot : Au-delà des Paramètres par Défaut",
        excerpt:
          "Les configurations par défaut sont des points de départ, pas des destinations. Ce que nous avons changé quand une API de paie était trop lente sous charge.",
      },
      {
        title: "IA Agentique : Construire des Systèmes qui Pensent par Étapes",
        excerpt:
          "Au-delà des chatbots — comment j'explore des agents IA autonomes qui planifient, exécutent et s'auto-corrigent.",
      },
    ],
  },
  credentials: {
    certifications: "Certifications",
    languages: "Langues",
    publication: "Publication",
    langNames: ["Turc", "Anglais", "Français", "Luxembourgeois"],
    langLevels: ["Natif", "Courant", "Conversationnel", "Débutant"],
  },
  signals: {
    label: "Signaux",
    title: "Signaux & Canaux",
    description:
      "Lignes directes pour la collaboration, les conseils et les invitations de mission.",
  },
  cta: {
    label: "Travaillons ensemble",
    title: "Construisons Quelque Chose de",
    titleAccent: "Résilient",
    description:
      "Vous recrutez pour un poste senior backend ou IA appliquée, ou vous cherchez un regard d'opérateur sur les systèmes sous-marins ? Envoyez-moi un court message, je réponds sous deux jours ouvrés.",
    contact: "Initier le Contact",
  },
  footer: {
    tagline:
      "Ingénieur Logiciel Senior construisant des systèmes résilients avec la précision navale.",
    navigation: "Navigation",
    connect: "Contact",
    rights: "Tous droits réservés.",
    builtWith: "Construit avec Next.js · Déployé avec précision",
  },
  blog: {
    allLogs: "Tous les Journaux",
    backToLog: "Retour au Journal du Capitaine",
    shareLog: "Partager ce journal",
    notFound: "Entrée de journal introuvable.",
    returnToBase: "Retour à la Base",
  },
  terminal: {
    open: "Ouvrir le terminal de commande",
    restore: "terminal",
  },
  intro: {
    depth: "Profondeur",
    pressure: "Pression",
    heading: "Cap",
    status: "Statut",
    coord: "Coord",
    hull: "Coque",
    systemLog: "Journal Système",
    scanning: "Balayage",
    lockOn: "Verrouillage",
    confirmed: "Confirmé",
    scanBarScanning: "BALAYAGE SONAR ACTIF — SCAN DU SECTEUR 7G",
    scanBarLocking: "CONTACT DÉTECTÉ — ACQUISITION DU VERROUILLAGE",
    scanBarIdentified: "CIBLE IDENTIFIÉE — ACCÈS AUTORISÉ",
    identityVerified: "Identité Vérifiée",
    role: "Rôle",
    seniorEngineer: "Ingénieur logiciel senior",
    access: "Accès",
    granted: "Autorisé",
    skip: "Passer",
  },
  notFound: {
    signalLost: "Signal Perdu",
    title: "SECTEUR INTROUVABLE",
    description:
      "Les coordonnées saisies ne correspondent à aucun secteur connu. Cette zone est inexplorée — ou la route a été décommissionnée.",
    returnToBase: "Retour à la Base",
    goBack: "Retour",
    systemLog: "Journal Système",
  },
  skip: "Aller au contenu principal",
};

export default fr;
