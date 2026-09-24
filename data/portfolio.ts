export const navLinks = [
  { label: "Mission Log", href: "#mission-log" },
  { label: "Arsenal", href: "#arsenal" },
  { label: "Projects", href: "#projects" },
  { label: "Captain's Log", href: "#captains-log" },
  { label: "Signals", href: "#signals" },
];

export const missionStats = [
  {
    title: "Years on Deck",
    value: "12+",
    detail: "Engineering and naval leadership combined.",
  },
  {
    title: "Incident Response",
    value: "On-call",
    detail: "Root-cause hunts and stability fixes on production systems.",
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
    role: "Senior Software Engineer",
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
    period: "Mar 2023 - Present",
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
    value: "linkedin.com/in/gorkem-tanagardigil",
    href: "https://www.linkedin.com/in/gorkem-tanagardigil",
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

export const captainsLog = [
  {
    slug: "from-navy-to-code",
    title: "From Navy Bridges to Code Bridges",
    excerpt:
      "How a decade of naval engineering taught me that the best systems are the ones that survive the storm — not the ones that avoid it.",
    date: "2025-01-15",
    readTime: "6 min",
    tags: ["Career", "Navy", "Resilience"],
    content: `After 11 years in the Turkish Navy, I traded radar screens for terminal screens. But the lessons stayed the same.\n\nIn the Navy, you learn one thing fast: **systems fail**. The question is never *if* — it's *when* and *how gracefully*. A ship's combat management system doesn't get the luxury of "we'll fix it in the next sprint." When you're 200 nautical miles from shore, your code either works or people are in danger.\n\nThat mindset shaped everything about how I write software today.\n\n## The Watchkeeper's Mentality\n\nOn a warship, there's always someone on watch. 24/7, 365 days. You monitor systems, you anticipate failures, you have runbooks for every scenario. Sound familiar? That's essentially what modern SRE and on-call culture aspires to be.\n\nThe difference is that in the Navy, I learned this at 22 with real consequences. By the time I moved into civilian software engineering, observability and incident response felt like second nature.\n\n## Building for the Worst Case\n\nEvery system I build now starts with the same question: *"What happens when this fails?"*\n\n- Circuit breakers aren't optional — they're the first thing I implement\n- Retry logic with exponential backoff is table stakes\n- Every microservice needs a health check that actually checks health\n- Graceful degradation > hard failure, always\n\n## The Transition\n\nLeaving the Navy wasn't easy. But I realized that the skills transfer perfectly:\n\n| Navy | Software Engineering |\n|------|---------------------|\n| Mission planning | Sprint planning |\n| Damage control | Incident response |\n| Chain of command | Escalation paths |\n| Navigation charts | Architecture diagrams |\n| Drill exercises | Chaos engineering |\n\nThe uniform changed. The discipline didn't.`,
  },
  {
    slug: "kubernetes-at-scale",
    title: "Kubernetes War Stories: Lessons from Production",
    excerpt:
      "Real incidents, real fixes. What running a payroll platform on EKS taught me about container orchestration.",
    date: "2024-11-20",
    readTime: "8 min",
    tags: ["Kubernetes", "DevOps", "AWS"],
    content: `Running Kubernetes in production is like commanding a fleet — everything looks orderly until the first real storm hits.\n\nOver the past two years managing our payroll engine on AWS EKS, I've accumulated a collection of war stories that I wish someone had told me earlier.\n\n## The OOMKilled Cascade\n\nIt started on a Monday morning. One pod got OOMKilled. Then another. Then the entire namespace started thrashing.\n\nThe root cause? A memory leak in our PDF generation service that only manifested with large documents. Our resource limits were set correctly, but we hadn't accounted for the burst pattern.\n\n**Lesson:** Set resource *requests* conservatively but *limits* generously. Monitor the delta between the two. When they start converging, you have a problem brewing.\n\n## The DNS Resolution Bottleneck\n\nOur services were experiencing random multi-second timeouts. Not consistently — just enough to make debugging maddening.\n\nTurns out, CoreDNS was the bottleneck. With every service resolving the others' names, the default CoreDNS deployment was overwhelmed.\n\n**Fix:** \n- Scaled CoreDNS horizontally\n- Enabled NodeLocal DNSCache\n- Added \`ndots: 2\` to our pod DNS config to reduce unnecessary search domain lookups\n\nThe random timeouts stopped.\n\n## Rolling Updates Gone Wrong\n\nWe had a deployment that passed all CI checks but caused a cascading failure in production. The new version changed a serialization format that was backward-incompatible.\n\n**What we implemented after:**\n- Canary deployments with automatic rollback via ArgoCD\n- Contract testing between services\n- A "shadow traffic" stage before full rollout\n\nKubernetes gives you the tools. But the strategy is on you.`,
  },
  {
    slug: "spring-boot-performance",
    title: "Spring Boot Performance: Beyond the Defaults",
    excerpt:
      "Default configurations are starting points, not destinations. What we changed when a payroll API was too slow under load.",
    date: "2024-09-05",
    readTime: "7 min",
    tags: ["Java", "Spring Boot", "Performance"],
    content: `Spring Boot's "convention over configuration" philosophy is brilliant for getting started. But in production, those conventions can cost you.\n\nHere's how we systematically tightened a payroll API that was too slow under load.\n\n## 1. Connection Pool Tuning\n\nThe default HikariCP settings are conservative for a payroll workload. We raised the pool, exported utilization to Datadog, and shortened how long a request waited for a connection. The useful signal was saturation during calculation windows.\n\n## 2. JPA N+1 Query Elimination\n\nThe silent killer. We used Spring Data JPA's \`@EntityGraph\` annotations and switched critical queries to projections:\n\n\`\`\`java\n@EntityGraph(attributePaths = {"employee", "deductions"})\nList<PayrollRecord> findByPeriod(String period);\n\`\`\`\n\nThis alone removed the N+1 that dominated the main calculation endpoint.\n\n## 3. Redis Caching Strategy\n\nNot everything needs to hit the database. We implemented a tiered caching strategy:\n\n- **L1:** In-process Caffeine cache (short TTL) for reference data\n- **L2:** Redis cluster for computed results (configurable TTL)\n- **Invalidation:** Event-driven via RabbitMQ when source data changes\n\n## 4. Virtual Threads (Java 21)\n\nMigrating to virtual threads was the final piece. Our I/O-heavy workload benefited massively:\n\n- Thread pool management simplified\n- Throughput under load went up\n- Memory footprint came down\n\nThe key takeaway: **measure first, optimize second**. Every change above was driven by profiling data, not intuition.`,
  },
  {
    slug: "agentic-ai-engineering",
    title: "Agentic AI: Building Systems That Think in Steps",
    excerpt:
      "Moving beyond chatbots — how I'm exploring autonomous AI agents that plan, execute, and self-correct.",
    date: "2025-02-01",
    readTime: "5 min",
    tags: ["AI", "LLM", "Architecture"],
    content: `The AI landscape is shifting from "ask a question, get an answer" to "give a goal, watch it execute." This is the agentic paradigm, and it's where I'm focusing my exploration.\n\n## What Makes an Agent?\n\nAn AI agent isn't just a chatbot with tools. It's a system that can:\n\n1. **Plan** — Break a complex goal into steps\n2. **Execute** — Use tools and APIs to carry out each step\n3. **Observe** — Evaluate the results\n4. **Adapt** — Adjust the plan based on what happened\n\nThis loop — Plan → Execute → Observe → Adapt — is remarkably similar to the OODA loop (Observe, Orient, Decide, Act) that military strategists use. My naval background makes this feel natural.\n\n## RAG: The Agent's Memory\n\nRetrieval-Augmented Generation is the backbone of any useful agent. Without it, you're limited to what the model was trained on.\n\nI've been experimenting with:\n- **Vector databases** for semantic search over documentation\n- **Hybrid search** combining keyword and semantic approaches\n- **Chunking strategies** that preserve context boundaries\n\nThe key insight: RAG quality depends more on your chunking and embedding strategy than on the LLM itself.\n\n## Where This Is Going\n\nI see agentic AI transforming backend engineering:\n\n- **Automated incident response** — Agents that can diagnose and fix common production issues\n- **Code review agents** — Beyond linting, actually understanding architectural implications\n- **Test generation** — Agents that understand your domain and generate meaningful test cases\n\nThe engineers who understand both the AI capabilities and the systems they're being applied to will be the ones who build the most impactful solutions.\n\nThat's the intersection I'm positioning myself at.`,
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
