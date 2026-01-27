export const navLinks = [
  { label: "Mission Log", href: "#mission-log" },
  { label: "Arsenal", href: "#arsenal" },
  { label: "Projects", href: "#projects" },
  { label: "Signals", href: "#signals" },
];

export const missionStats = [
  {
    title: "Years on Deck",
    value: "12+",
    detail: "Engineering and naval leadership combined.",
  },
  {
    title: "Incidents Resolved",
    value: "300+",
    detail: "Stability fixes, root-cause hunts, and on-call mitigations.",
  },
  {
    title: "Deploy Cadence",
    value: "Daily",
    detail: "CI/CD pipelines with guarded rollouts and observability gates.",
  },
];

export const missionHistory = [
  {
    title: "Payroll Engine",
    role: "Senior Full Stack Developer",
    period: "Mar 2023 - Present",
    summary:
      "Delivered Spring Boot microservices on AWS EKS with CI/CD in GitHub Actions, optimizing MongoDB Atlas/on-prem performance and integrating RabbitMQ + Redis for reliable workflows.",
    tech: [
      "Spring Framework",
      "Java",
      "Kubernetes",
      "AWS",
      "MongoDB",
      "RabbitMQ",
      "Redis",
      "GitHub Actions",
    ],
  },
  {
    title: "Rightyon",
    role: "Senior Software Developer",
    period: "Feb 2022 - Mar 2023",
    summary:
      "Built Spring Boot (Java 11) backends and designed relational schemas for complex web applications, prioritizing maintainability and scale.",
    tech: ["Spring Framework", "Java", "MySQL", "RDBMS"],
  },
  {
    title: "Oscorpex",
    role: "Software Developer",
    period: "Apr 2021 - Feb 2022",
    summary:
      "Shipped REST/GraphQL APIs, MQTT-based IoT integrations, and Android apps with GCP/Firebase services while mentoring junior developers.",
    tech: ["Java", "GraphQL", "MQTT", "Android", "GCP", "Firebase"],
  },
  {
    title: "Turkish Navy",
    role: "Computer Engineer",
    period: "Aug 2010 - Apr 2021",
    summary:
      "Engineered mission-critical Java systems with encryption/auth controls and stability-focused maintenance across on-prem and web platforms.",
    tech: ["Java", "Spring Framework", "MySQL", "Security"],
  },
];

export const featuredProjects = [
  {
    name: "Payroll Engine",
    period: "Jan 2023 - Present",
    description:
      "Microservice payroll platform with containerized delivery, message-driven integrations, and cloud infrastructure.",
    tech: [
      "Spring Framework",
      "Java",
      "Kubernetes",
      "AWS",
      "Docker Swarm",
      "Message Broker",
      "Redis",
      "NoSQL",
      "JUnit",
    ],
    link: "#signals",
  },
  {
    name: "ServisRotam",
    period: "Apr 2022 - Mar 2023",
    description:
      "Backend services and two Android applications delivered as a single platform.",
    tech: [
      "Spring Framework",
      "Java",
      "Message Broker",
      "Docker",
      "Cloud Computing",
      "RDBMS",
      "GCP",
    ],
    link: "#signals",
  },
  {
    name: "Sayiyo",
    period: "Project",
    description: "Backend services for a cloud-connected application.",
    tech: [
      "Spring Framework",
      "Java",
      "Message Broker",
      "Cloud Computing",
      "RDBMS",
      "GCP",
    ],
    link: "#signals",
  },
];

export const additionalProjects = [
  {
    name: "Advanced Harpoon Weapon Control System (AHWCS) Simulator",
    tech: ["Java"],
  },
  {
    name: "Java Education (Turkcell)",
    tech: ["Java"],
  },
  {
    name: "Stock Management System",
    tech: ["Spring Framework", "Java", "RDBMS", "GCP"],
  },
  {
    name: "Testokur",
    tech: ["Spring Framework", "Java", "Message Broker", "Cloud Computing", "RDBMS", "GCP"],
  },
  {
    name: "Voyage Data Recorder",
    tech: ["Java", "RDBMS", "GCP"],
  },
];

export const signals = [
  {
    label: "Email",
    value: "gtanagardigil@gmail.com",
    href: "mailto:gtanagardigil@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/gorkemtanagardigil",
    href: "https://www.linkedin.com/in/gorkemtanagardigil",
  },
  {
    label: "GitHub",
    value: "github.com/tanagardigil-gorkem",
    href: "https://github.com/tanagardigil-gorkem",
  },
];

export const certifications = [
  {
    title: "Using MongoDB with Java",
    issuer: "MongoDB",
    year: "2022",
  },
  {
    title: "Kubernetes and Docker",
    issuer: "Udemy",
    year: "2023",
  },
];

export const languages = [
  { name: "Turkish", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "Conversational" },
  { name: "Luxembourgish", level: "Beginner" },
];

export const publications = [
  {
    title: "Light Fidelity (LiFi): New Era in Wireless Communication",
    venue: "DTSS 2019 International Conference & Exhibition on Digital Transformation & Systems",
    date: "Oct 23, 2019",
    location: "METU",
  },
];

export const arsenalStacks = [
  {
    title: "Backend",
    items: ["Java", "Kotlin", "Spring Framework", "Microservices", "REST API", "GraphQL", "Modulith Architecture"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Kubernetes", "Docker", "Docker Swarm", "GitHub Actions", "ArgoCD", "Datadog", "Portainer"],
  },
  {
    title: "Data",
    items: ["NoSQL", "RDBMS", "MySQL", "PostgreSQL","Redis", "MongoDB"],
  },
  {
    title: "Artificial Intelligence",
    items: ["Large Language Models", "Agentic Development", "Model Fine-tuning", "Retrieval-Augmented Generation (RAG)"],
  },
  {
    title: "Frontend",
    items: ["HTML", "CSS", "TypeScript", "JavaScript","Next.js", "Vue.js","React"],
  },
  {
    title: "Testing",
    items: ["JUnit", "Vitest", "Jest"],
  },
];
