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
    period: "2023 - PRESENT",
    summary:
      "Orchestrating microservices on AWS EKS with hardened CI/CD pipelines. Performance tuning across MongoDB Atlas and on-prem.",
    tech: ["Java/Spring Boot", "Kubernetes", "MongoDB", "Vue.js"],
  },
  {
    title: "Fleet Control Systems",
    role: "Lead Backend Engineer",
    period: "2021 - 2023",
    summary:
      "Rebuilt legacy naval logistics services into fault-tolerant APIs, reducing incident volume while improving observability and release cadence.",
    tech: ["Java", "Kotlin", "PostgreSQL", "Grafana/Prometheus"],
  },
];

export const projects = [
  {
    name: "Subsurface Ops Console",
    description:
      "Command-and-control dashboard for distributed services with live health, deploy gates, and audit trails.",
    tech: ["Next.js", "TypeScript", "WebSockets"],
    link: "#signals",
  },
  {
    name: "HarborGuard Access",
    description:
      "Zero-trust auth gateway with biometric fallback and policy-based routing for high-side networks.",
    tech: ["Spring Boot", "Keycloak", "OPA"],
    link: "#signals",
  },
  {
    name: "Tactical Playbooks",
    description:
      "LLM-powered runbooks that surface ranked mitigations for on-call incidents in under 60 seconds.",
    tech: ["LLM/RAG", "Vector DB", "Python"],
    link: "#signals",
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
    value: "github.com/gorkem-t",
    href: "https://github.com/gorkem-t",
  },
];

export const arsenalStacks = [
  {
    title: "Backend Core",
    items: ["Java & Kotlin", "Spring Boot", "Microservices"],
  },
  {
    title: "Data & AI",
    items: ["MongoDB & MySQL", "RAG & LLM Integration", "Vector Databases"],
  },
  {
    title: "DevOps",
    items: ["Kubernetes (EKS)", "Docker Swarm", "AWS & GCP"],
  },
];
