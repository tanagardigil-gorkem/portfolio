import type { Dictionary } from "./en";

const fr: Dictionary = {
  nav: {
    missionLog: "Journal de Bord",
    arsenal: "Arsenal",
    projects: "Projets",
    captainsLog: "Journal du Capitaine",
    signals: "Signaux",
    cv: "CV",
    resume: "CV",
  },
  hero: {
    badge: "CONTRÔLE DE MISSION : EN LIGNE",
    roles: [
      "Ingénieur Logiciel Senior",
      "Architecte Cloud",
      "Spécialiste Backend",
      "Ancien Officier de Marine",
    ],
    description:
      "Allier la <accent>discipline navale</accent> à l'ingénierie cloud moderne. Je construis des systèmes résilients qui restent en ligne quand la mer se déchaîne.",
    viewMissions: "Voir les Missions",
    openChannel: "Ouvrir le Canal",
  },
  stats: {
    yearsTitle: "Années de Service",
    yearsDetail: "Ingénierie et leadership naval combinés.",
    incidentsTitle: "Incidents Résolus",
    incidentsDetail:
      "Corrections de stabilité, analyses de causes racines et atténuations d'astreinte.",
    deployTitle: "Cadence de Déploiement",
    deployValue: "Quotidien",
    deployDetail:
      "Pipelines CI/CD avec déploiements contrôlés et portes d'observabilité.",
  },
  origin: {
    title: "Origine : Marine Turque",
    subtitle: "Ingénieur Informatique & Officier | 2010 - 2021",
    description:
      "Là où la résilience a été forgée. Développement de systèmes Java critiques où la stabilité était une nécessité, pas une fonctionnalité. Mise en œuvre de protocoles stricts de chiffrement et d'autorisation.",
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
      role: "Développeur Full Stack Senior",
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
      role: "Ingénieur Informatique",
      period: "Août 2010 - Avr 2021",
      summary:
        "Développement de systèmes Java critiques avec contrôles de chiffrement/autorisation et maintenance axée sur la stabilité sur des plateformes on-prem et web.",
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
          "Services backend et deux applications Android livrés comme une plateforme unique.",
      },
      {
        description: "Services backend pour une application connectée au cloud.",
      },
    ],
    additional: [
      { name: "Simulateur du Système de Contrôle d'Armes Harpoon Avancé (AHWCS)" },
      { name: "Formation Java (Turkcell)" },
      { name: "Système de Gestion des Stocks" },
      { name: "Testokur" },
      { name: "Enregistreur de Données de Voyage" },
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
      "Une année d'activité d'ingénierie — commits, revues et déploiements.",
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
          "De vrais incidents, de vraies corrections. Ce que la gestion de 50+ microservices sur EKS m'a appris sur l'orchestration de conteneurs.",
      },
      {
        title: "Performance Spring Boot : Au-delà des Paramètres par Défaut",
        excerpt:
          "Les configurations par défaut sont des points de départ, pas des destinations. Comment nous avons réduit nos temps de réponse API de 60%.",
      },
      {
        title: "IA Agentique : Construire des Systèmes qui Pensent par Étapes",
        excerpt:
          "Au-delà des chatbots — comment j'explore des agents IA autonomes qui planifient, exécutent et s'auto-corrigent.",
      },
    ],
  },
  endorsements: {
    label: "Rapports d'Équipage",
    title: "Recommandations",
    description: "Ce que l'équipage dit de notre collaboration.",
    items: [
      {
        text: "Gorkem apporte un niveau de discipline opérationnelle rare en ingénierie logicielle. Quand nos systèmes de production sont sous pression, c'est la personne vers qui tout le monde se tourne. Son parcours naval n'est pas qu'un argument — on le voit dans sa façon d'architecturer pour la défaillance et de rester calme pendant les incidents.",
      },
      {
        text: "Travailler avec Gorkem était une masterclass en construction de systèmes maintenables. Il n'écrit pas juste du code qui fonctionne — il écrit du code que les autres peuvent comprendre, étendre et déboguer à 3h du matin. Son expertise Spring Boot est profonde et pratique.",
      },
      {
        text: "La capacité de Gorkem à basculer entre les APIs backend, les intégrations IoT et le développement mobile était impressionnante. Il a mentoré nos développeurs juniors avec patience et a toujours poussé pour de meilleures pratiques de test. Un véritable multiplicateur de force dans toute équipe.",
      },
      {
        text: "J'ai travaillé avec beaucoup d'ingénieurs backend, mais Gorkem est dans une catégorie à part. Il ne se contente pas de livrer des APIs — il pense aussi à l'expérience développeur côté frontend. Ses endpoints sont propres, bien documentés et un plaisir à intégrer. En plus, il comprend le design système à un niveau qui rend la collaboration inter-équipes sans effort. Si vous avez besoin de quelqu'un qui fait le pont entre backend et frontend sans friction, Gorkem est votre personne.",
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
    label: "Prêt pour la prochaine mission ?",
    title: "Construisons Quelque Chose de",
    titleAccent: "Résilient",
    description:
      "Que ce soit pour scaler l'infrastructure, renforcer les backends ou architecturer des systèmes cloud-natifs — je suis prêt à plonger.",
    contact: "Initier le Contact",
    downloadResume: "Télécharger le CV",
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
    seniorEngineer: "Ingénieur Senior",
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
