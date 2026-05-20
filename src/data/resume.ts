export const profile = {
  name: "Trilochanprasad B Hilli",
  shortName: "Trilochanprasad",
  title: "Full-stack Engineer",
  location: "Bengaluru, India",
  email: "tptrilochanprasad@gmail.com",
  phone: "+91 95353 32999",
  linkedin: "https://www.linkedin.com/in/trilochanprasad",
  github: "https://github.com/TrilochanprasadBH",
  summary:
    "Full-stack engineer and solo SaaS builder specializing in AI-powered systems and end-to-end product delivery. Shipped 2 production SaaS platforms independently — architecture to deployment — with real users and revenue. Builds async LLM pipelines, RAG systems, and multi-tenant infrastructure from scratch. Led engineering for 4 international clients across EU, UK, and US markets with direct ownership above role scope.",
};

export const experience = [
  {
    role: "Full Stack Developer",
    company: "TheBrandwick.com",
    period: "Aug 2024 — Present",
    location: "Bengaluru",
    bullets: [
      "Operated beyond typical SDE-1 responsibilities across all four client engagements — independently owning sprint planning, client communication, technical delivery, and execution accountability.",
      "Shipped booking and FAQ systems for quoka.co.uk using Next.js and REST APIs, improving user experience and achieving 90+ Web Vitals scores for one of the UK's leading trades aggregators.",
      "Led architecture and delivery for VastuWisdom, a premium consultation platform, driving product design, engineering decisions, and mentoring 2 engineers.",
      "Delivered AlexandersFA, a UK-based mortgage and tax consultancy platform, from design to deployment with full client ownership. Achieved 95+ SEO scores and improved user retention by over 35%.",
      "Developed frontend systems for AllUnity, Europe's largest stablecoin initiative, in a client-facing engineering role, contributing to a 45% increase in conversion rates.",
    ],
  },
];

export const projects = [
  {
    name: "ScoreResume",
    tagline: "AI-powered resume intelligence SaaS",
    description:
      "Transforms resumes into measurable career outcomes — ATS readiness, interview performance, and job-fit intelligence.",
    bullets: [
      "Engineered async AI processing pipeline using BullMQ + Redis — queued resume jobs prevent LLM timeout failures, with exponential backoff retry and dead-letter queue handling.",
      "Built RAG system with pgvector — chunked resume and JD content, retrieved semantically relevant context for multi-dimensional AI scoring via LangChain + Gemini.",
      "Designed multi-tenant PostgreSQL schema with per-user data isolation, supporting Free and paid tier feature gating.",
      "Integrated DodoPayments subscription billing with webhook signature validation and idempotent payment processing.",
      "Deployed on Hetzner VPS with CI/CD, Cloudflare CDN, Sentry + PostHog — 99%+ uptime in production.",
    ],
    metrics: [
      { label: "Organic pageviews", value: "18,000+" },
      { label: "Free users", value: "300+" },
      { label: "Paying users", value: "25+" },
      { label: "p95 API latency", value: "<200ms" },
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "pgvector", "BullMQ", "Redis", "LangChain", "Gemini"],
  },
  {
    name: "AttemptIQ",
    tagline: "UPSC diagnostic analytics platform",
    description:
      "Full-stack SaaS that transforms mock test performance into actionable readiness insights for serious aspirants.",
    bullets: [
      "Designed 23-table PostgreSQL schema with 5 materialized views — tracks question-level performance, topic mastery velocity, and trap susceptibility patterns across sessions.",
      "Built async AI insight pipeline using BullMQ — decoupled LLM analysis from user requests, enabling non-blocking personalized report generation.",
      "Implemented RAG-based insight generation with pgvector — embedded historical performance data, retrieved contextual patterns to surface targeted improvement loops.",
      "Built psychological performance tracking — detects session fatigue, trap question susceptibility, and topic confidence decay over time.",
      "Multi-tenant architecture with JWT auth, rate-limited endpoints, and per-user data isolation.",
    ],
    metrics: [
      { label: "Organic pageviews", value: "12,000+" },
      { label: "Questions solved", value: "4,500+" },
      { label: "Paying users", value: "15+" },
      { label: "Uptime", value: "99%+" },
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "pgvector", "BullMQ", "JWT", "Gemini"],
  },
];

export const skills = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "ShadCN", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "PostgreSQL", "MongoDB", "Prisma", "Redis", "BullMQ", "REST APIs", "System Design", "Async Queues"],
  },
  {
    category: "AI / Gen AI",
    items: ["Gemini AI", "LangChain", "RAG", "pgvector", "LLM Orchestration", "Vector Databases", "Prompt Engineering", "Async AI Pipelines"],
  },
  {
    category: "Infrastructure",
    items: ["AWS S3", "Hetzner VPS", "Cloudflare", "CI/CD", "Docker"],
  },
  {
    category: "Auth & Billing",
    items: ["JWT", "Better Auth", "DodoPayments", "Webhook Handling"],
  },
  {
    category: "Monitoring",
    items: ["Sentry", "PostHog", "UptimeRobot", "NetData"],
  },
];

export const education = [
  {
    degree: "Full Stack Developer",
    school: "Masai School",
    year: "2023",
    location: "Bengaluru",
  },
  {
    degree: "BE, Mechanical Engineering",
    school: "Don Bosco Institute of Technology",
    year: "2017",
    location: "Bengaluru",
  },
];
