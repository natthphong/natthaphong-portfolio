import type {
  ContactLink,
  ExperienceEntry,
  HeroHighlight,
  NavigationItem,
  SkillGroup,
  Stat,
} from "@/types/portfolio";

export const siteConfig = {
  name: "Natthaphong Jaroenpronprasit",
  shortName: "Natthaphong",
  role: "Backend Developer",
  description:
    "Backend developer with 2+ years of experience building core banking, trading, and real-time platforms with Java, Go, Python, AWS, and distributed systems.",
  url: "https://natthaphong-portfolio.vercel.app",
  email: "jaroenpronprasit@gmail.com",
  resumePath: "/cv.pdf",
  github: "https://github.com/natthphong",
  linkedin:
    "https://www.linkedin.com/in/natthaphong-jaroenpronprasit-386986258/",
  location: "Thailand",
};

export const navigation: NavigationItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const heroHighlights: HeroHighlight[] = [
  { label: "Core Stack", value: "Java, Go, Python" },
  { label: "Domain", value: "Core banking and trading systems" },
  { label: "Architecture", value: "Distributed and event-driven services" },
  { label: "Cloud", value: "AWS, Docker, Kubernetes, Jenkins" },
];

export const aboutStats: Stat[] = [
  { label: "Experience", value: "2+ Years" },
  { label: "Domain Focus", value: "Financial Systems" },
  { label: "Platforms", value: "Core Banking / Trading" },
  { label: "Strength", value: "AWS / Distributed Systems" },
];

export const aboutParagraphs = [
  "I build backend systems where consistency, latency, and operational reliability matter. My recent work has focused on financial platforms, including core banking workflows, bond trading, and real-time gold trading services.",
  "Across Java, Go, and Python stacks, I design APIs, integrate event-driven workflows, and deliver production services that handle transaction rules, ledger impacts, messaging, and cloud infrastructure with a strong emphasis on maintainability.",
];

export const education = {
  school: "Silpakorn University",
  degree: "Bachelor of Science in Computer Science",
  gpa: "3.52",
};

export const certifications = [
  "Vault Fundamentals",
  "Docker Essentials: A Developer Introduction",
  "IBM Blockchain Essentials V2",
];

export const experience: ExperienceEntry[] = [
  {
    company: "Prior Solution Co., Ltd.",
    role: "Backend Developer",
    period: "Aug 2024 - Present",
    project: "Digital Core Banking (DCB) and Virtual Bank",
    summary:
      "Delivering core banking capabilities on Vault Core / Thought Machine for digital banking programs, with Python smart contracts and backend integrations across account, ledger, and channel workflows.",
    stack: ["Python", "Vault Core", "Thought Machine", "AWS", "Event-driven Integration"],
    bullets: [
      "Implemented smart contract logic for account opening, transactions, interest accrual, and withholding tax rules.",
      "Modeled main-account and sub-account pocket structures to support product behavior, balance segregation, and transactional flows.",
      "Integrated GL debit and credit postings with legacy systems and external channels for end-to-end banking operations.",
    ],
  },
  {
    company: "Freelance Project",
    role: "Backend Developer",
    period: "Oct 2024 - Jan 2025",
    project: "Saint Care",
    summary:
      "Built backend services for a service operations platform covering machine sales, warranties, field service workflows, and auditable document storage.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Jenkins", "AWS S3"],
    bullets: [
      "Designed role-based access control, work order flows, spare-parts handling, service history tracking, and SLA monitoring.",
      "Implemented e-consent, digital signature workflows, and JasperReports PDF generation for operational documents.",
      "Stored signed records in immutable S3-backed storage to improve traceability and compliance.",
    ],
  },
  {
    company: "Aurora Gold Trading Platform",
    role: "Backend Developer",
    period: "Real-time trading delivery",
    summary:
      "Developed backend services for a gold trading platform with streaming prices, real-time order workflows, and message-driven market data pipelines.",
    stack: ["Go", "Fiber", "PostgreSQL", "Redis", "Kafka", "AWS S3"],
    bullets: [
      "Built real-time gold price ingestion and Kafka-based processing pipelines for downstream trading services.",
      "Implemented dynamic spread management, order routing, and trading logic for responsive market handling.",
      "Delivered WebSocket price streaming to keep client applications synchronized with live pricing updates.",
    ],
  },
  {
    company: "Prior Solution Co., Ltd.",
    role: "Backend Developer",
    period: "Apr 2024 - Jul 2024",
    project: "Krungsri Sale Bond (KSAS)",
    summary:
      "Delivered backend APIs for bond account opening and order placement across primary and secondary market workflows.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "AWS SQS", "AWS S3"],
    bullets: [
      "Implemented account opening and passbook printing APIs connected to downstream banking processes.",
      "Built order placement services for primary and secondary bond markets, including BOT Link integration.",
      "Applied FCFS and Small-Lot-First business rules to align system behavior with trading requirements.",
    ],
  },
  {
    company: "PPI",
    role: "Software Engineering Intern",
    period: "Earlier experience",
    project: "Autosale",
    summary:
      "Supported backend delivery for an automotive sales workflow platform used by sales representatives and internal operations teams.",
    stack: ["Java", "Spring Boot", "Oracle", "Redis", "MSSQL"],
    bullets: [
      "Contributed to backend APIs and sales workflow support features for customer and order data handling.",
      "Resolved defects and improved reliability in existing service logic and integration flows.",
      "Worked with Oracle, Redis, and MSSQL-backed services in a production support setting.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Java", "Go", "Python", "JavaScript", "TypeScript", "Rust"],
  },
  {
    title: "Frameworks",
    items: ["Spring Boot", "Gin", "Fiber", "React"],
  },
  {
    title: "Cloud and DevOps",
    items: ["AWS", "Docker", "Kubernetes", "Jenkins", "Lambda", "EC2", "S3"],
  },
  {
    title: "Datastores and Search",
    items: ["PostgreSQL", "Oracle", "Elasticsearch", "Redis", "MySQL", "MSSQL"],
  },
  {
    title: "Messaging and Distributed Systems",
    items: ["Kafka", "SQS", "SNS", "MSK", "Event-driven Architecture"],
  },
  {
    title: "Domain Expertise",
    items: [
      "Core Banking",
      "Vault Core / Thought Machine",
      "Trading Systems",
      "Real-time Services",
      "Secure API Integration",
    ],
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    value: siteConfig.email,
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    value: "natthaphong-jaroenpronprasit",
  },
  {
    label: "GitHub",
    href: siteConfig.github,
    value: "github.com/natthphong",
  },
];
