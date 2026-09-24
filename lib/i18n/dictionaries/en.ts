const en = {
  nav: {
    missionLog: "Mission Log",
    arsenal: "Arsenal",
    projects: "Projects",
    captainsLog: "Captain's Log",
    signals: "Signals",
    cv: "CV",
  },
  hero: {
    badge: "MISSION CONTROL: ONLINE",
    roles: [
      "Senior Software Engineer",
      "Cloud Architect",
      "Backend Specialist",
      "Former Navy Officer",
    ],
    description:
      "Blending <accent>naval discipline</accent> with modern cloud engineering. I build resilient systems that stay online when the seas get rough.",
    viewMissions: "View Missions",
    openChannel: "Open Channel",
  },
  stats: {
    yearsTitle: "Years on Deck",
    yearsDetail: "Engineering and naval leadership combined.",
    incidentsTitle: "Incident Response",
    incidentsValue: "On-call",
    incidentsDetail:
      "Root-cause hunts and stability fixes on production systems.",
    deployTitle: "Deploy Cadence",
    deployValue: "Daily",
    deployDetail:
      "CI/CD pipelines with guarded rollouts and observability gates.",
  },
  origin: {
    title: "Origin: Turkish Navy",
    subtitle: "Computer Engineer & Officer | 2010 - 2021",
    description:
      "Where resilience was engineered. Developed mission-critical Java systems where stability was a necessity, not a feature. Implemented strict security encryption and authorization protocols.",
    badge: "NAVY OPS",
    tags: [
      "Mission-Critical Systems",
      "Security Protocols",
      "Encryption",
      "Java",
      "Leadership",
    ],
  },
  missions: [
    {
      role: "Senior Software Engineer",
      period: "Mar 2023 - Present",
      summary:
        "Delivered Spring Boot microservices on AWS EKS with CI/CD in GitHub Actions, optimizing MongoDB Atlas/on-prem performance and integrating RabbitMQ + Redis for reliable workflows.",
    },
    {
      role: "Senior Software Developer",
      period: "Feb 2022 - Mar 2023",
      summary:
        "Built Spring Boot (Java 11) backends and designed relational schemas for complex web applications, prioritizing maintainability and scale.",
    },
    {
      role: "Software Developer",
      period: "Apr 2021 - Feb 2022",
      summary:
        "Shipped REST/GraphQL APIs, MQTT-based IoT integrations, and Android apps with GCP/Firebase services while mentoring junior developers.",
    },
    {
      role: "Computer Engineer",
      period: "Aug 2010 - Apr 2021",
      summary:
        "Engineered mission-critical Java systems with encryption/auth controls and stability-focused maintenance across on-prem and web platforms.",
    },
  ],
  projects: {
    title: "Recent Operations",
    additionalTitle: "Additional Projects",
    featured: [
      {
        description:
          "Microservice payroll platform with containerized delivery, message-driven integrations, and cloud infrastructure.",
      },
      {
        description:
          "Backend services and two Android applications delivered as a single platform.",
      },
      {
        description: "Backend services for a cloud-connected application.",
      },
    ],
    additional: [
      { name: "Advanced Harpoon Weapon Control System (AHWCS) Simulator" },
      { name: "Java Education (Turkcell)" },
      { name: "Stock Management System" },
      { name: "Testokur" },
      { name: "Voyage Data Recorder" },
    ],
  },
  missionLog: {
    title: "MISSION LOG",
  },
  arsenal: {
    title: "Technical Arsenal",
    subtitle: "Weapons Systems",
    description:
      "The tools and technologies I deploy in the field — battle-tested and mission-ready.",
    stacks: [
      "Backend",
      "Cloud & DevOps",
      "Data",
      "Artificial Intelligence",
      "Frontend",
      "Testing",
    ],
  },
  heatmap: {
    label: "Operations Tempo",
    title: "Activity Sonar",
    description:
      "GitHub contributions over the last year — commits, pull requests, reviews, and issues.",
    contributions: "contributions",
    inLastYear: "in the last year",
    less: "Less",
    more: "More",
  },
  captainsLog: {
    label: "Dispatches",
    title: "Captain's Log",
    description:
      "Field notes on engineering, architecture, and lessons learned from the deep.",
    latest: "Latest",
    read: "Read",
    posts: [
      {
        title: "From Navy Bridges to Code Bridges",
        excerpt:
          "How a decade of naval engineering taught me that the best systems are the ones that survive the storm — not the ones that avoid it.",
      },
      {
        title: "Kubernetes War Stories: Lessons from Production",
        excerpt:
          "Real incidents, real fixes. What running a payroll platform on EKS taught me about container orchestration.",
      },
      {
        title: "Spring Boot Performance: Beyond the Defaults",
        excerpt:
          "Default configurations are starting points, not destinations. What we changed when a payroll API was too slow under load.",
      },
      {
        title: "Agentic AI: Building Systems That Think in Steps",
        excerpt:
          "Moving beyond chatbots — how I'm exploring autonomous AI agents that plan, execute, and self-correct.",
      },
    ],
  },
  credentials: {
    certifications: "Certifications",
    languages: "Languages",
    publication: "Publication",
    langNames: ["Turkish", "English", "French", "Luxembourgish"],
    langLevels: ["Native", "Fluent", "Conversational", "Beginner"],
  },
  signals: {
    label: "Signals",
    title: "Signals & Channels",
    description:
      "Direct lines for collaboration, advisories, and mission invites.",
  },
  cta: {
    label: "Ready for the next mission?",
    title: "Let's Build Something",
    titleAccent: "Resilient",
    description:
      "Whether it's scaling infrastructure, hardening backends, or architecting cloud-native systems — I'm ready to dive in.",
    contact: "Initiate Contact",
  },
  footer: {
    tagline:
      "Senior Software Engineer building resilient systems with naval precision.",
    navigation: "Navigation",
    connect: "Connect",
    rights: "All rights reserved.",
    builtWith: "Built with Next.js · Deployed with precision",
  },
  blog: {
    allLogs: "All Logs",
    backToLog: "Back to Captain's Log",
    shareLog: "Share this log",
    notFound: "Log entry not found.",
    returnToBase: "Return to Base",
  },
  terminal: {
    open: "Open command terminal",
    restore: "terminal",
  },
  intro: {
    depth: "Depth",
    pressure: "Pressure",
    heading: "Heading",
    status: "Status",
    coord: "Coord",
    hull: "Hull",
    systemLog: "System Log",
    scanning: "Scanning",
    lockOn: "Lock-On",
    confirmed: "Confirmed",
    scanBarScanning: "SONAR SWEEP ACTIVE — SCANNING SECTOR 7G",
    scanBarLocking: "CONTACT DETECTED — ACQUIRING TARGET LOCK",
    scanBarIdentified: "TARGET IDENTIFIED — CLEARANCE GRANTED",
    identityVerified: "Identity Verified",
    role: "Role",
    seniorEngineer: "Senior Software Engineer",
    access: "Access",
    granted: "Granted",
    skip: "Skip",
  },
  notFound: {
    signalLost: "Signal Lost",
    title: "SECTOR NOT FOUND",
    description:
      "The coordinates you entered don't match any known sector. This area is uncharted — or the route has been decommissioned.",
    returnToBase: "Return to Base",
    goBack: "Go Back",
    systemLog: "System Log",
  },
  skip: "Skip to main content",
};

// Recursively widen literal types to string / string[]
type Widen<T> = T extends readonly string[]
  ? string[]
  : T extends string
  ? string
  : T extends object
  ? { [K in keyof T]: Widen<T[K]> }
  : T;

export type Dictionary = Widen<typeof en>;
export default en as Dictionary;
