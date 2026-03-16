import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "Digital Core Banking Platform",
    slug: "digital-core-banking-platform",
    category: "Financial Systems",
    featured: true,
    summary:
      "Core banking delivery on Vault Core / Thought Machine for digital bank and virtual bank programs with ledger-aware product behavior.",
    description:
      "Implemented banking product logic and surrounding integrations for account lifecycle, balance management, interest, tax, and general ledger connectivity. The work emphasized correctness, traceability, and integration readiness for production banking operations.",
    timeframe: "Aug 2024 - Present",
    role: "Backend Developer",
    images: [
      {
        src: "/images/projects/private.png",
        alt: "Private digital core banking project placeholder graphic",
      },
    ],
    tags: ["Python", "Vault Core", "Core Banking", "AWS"],
    highlights: [
      "Implemented smart contract logic for account opening, transactions, interest accrual, and withholding tax.",
      "Designed main-account and pocket-based sub-account structures to support product rules and balance segmentation.",
      "Integrated GL debit and credit postings with legacy systems and external channels.",
    ],
    features: [
      "Vault Core smart contract development",
      "Deposit product lifecycle orchestration",
      "Pocket-based account structures",
      "Ledger and downstream integration flows",
    ],
    techStack: ["Python", "Vault Core", "Thought Machine", "AWS", "Distributed Systems"],
  },
  {
    title: "Saint Care Service Platform",
    slug: "saint-care-service-platform",
    category: "Operational Platforms",
    featured: true,
    summary:
      "Service operations backend for machine sales, warranty workflows, technician execution, and compliant document handling.",
    description:
      "Built backend capabilities for a maintenance and service platform covering operational roles, work orders, service history, consent, reporting, and immutable document storage. The system balanced transactional workflows with operational traceability.",
    timeframe: "Oct 2024 - Jan 2025",
    role: "Freelance Backend Developer",
    images: [
      { src: "/images/projects/1.png", alt: "Saint Care dashboard overview" },
    ],
    tags: ["Java", "Spring Boot", "PostgreSQL", "AWS S3"],
    highlights: [
      "Implemented RBAC, work orders, spare-parts tracking, service history, and SLA-aware maintenance flows.",
      "Delivered e-consent, digital signatures, and JasperReports-based PDF generation for business processes.",
      "Stored signed documents in immutable S3-backed storage for stronger auditability.",
    ],
    features: [
      "Role-based access control",
      "Field service workflows and spare-parts tracking",
      "Consent and digital signature processing",
      "Operational PDF reporting",
    ],
    techStack: ["Java", "Spring Boot", "PostgreSQL", "Jenkins", "AWS S3", "JasperReports"],
  },
  {
    title: "Aurora Gold Trading Platform",
    slug: "aurora-gold-trading-platform",
    category: "Financial Systems",
    featured: true,
    summary:
      "Real-time trading backend for market data ingestion, dynamic spread management, order routing, and streaming price delivery.",
    description:
      "Developed services supporting a high-tempo gold trading workflow where data freshness and reliable order handling were critical. The platform relied on Kafka, Redis, PostgreSQL, and WebSocket delivery to keep trading clients synchronized.",
    role: "Backend Developer",
    images: [
      {
        src: "/images/projects/private.png",
        alt: "Private gold trading project placeholder graphic",
      },
    ],
    tags: ["Go", "Fiber", "Kafka", "Redis", "Real-time"],
    highlights: [
      "Built price ingestion flows and Kafka pipelines to distribute market updates across services.",
      "Implemented dynamic spread management and order routing logic for trading execution.",
      "Delivered WebSocket price streaming for low-latency client updates.",
    ],
    features: [
      "Streaming market data ingestion",
      "Kafka-based event pipeline",
      "Dynamic spread management",
      "WebSocket distribution layer",
    ],
    techStack: ["Go", "Fiber", "Kafka", "Redis", "PostgreSQL", "AWS S3"],
  },
  {
    title: "Krungsri Sale Bond APIs",
    slug: "krungsri-sale-bond-apis",
    category: "Financial Systems",
    summary:
      "Bond sales backend supporting account opening, passbook printing, and order placement across primary and secondary market flows.",
    description:
      "Implemented backend services for bond distribution workflows, coordinating order logic, banking integrations, document handling, and queue-driven processing. The solution handled domain-specific order rules and integration constraints.",
    timeframe: "Apr 2024 - Jul 2024",
    role: "Backend Developer",
    images: [
      {
        src: "/images/projects/private.png",
        alt: "Private bond trading project placeholder graphic",
      },
    ],
    tags: ["Java", "Spring Boot", "Redis", "AWS SQS"],
    highlights: [
      "Built account opening APIs and passbook printing services connected to banking workflows.",
      "Implemented order placement for primary and secondary bond markets with BOT Link integration.",
      "Applied FCFS and Small-Lot-First rules inside order processing logic.",
    ],
    features: [
      "Account onboarding APIs",
      "Passbook printing services",
      "Primary and secondary market order handling",
      "Queue-driven system integrations",
    ],
    techStack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "AWS SQS", "AWS S3"],
  },
  {
    title: "LinguaDeck",
    slug: "linguadeck",
    category: "Personal Products",
    featured: true,
    summary:
      "Flashcard-based language learning application with YouTube-assisted listening drills, daily review queues, and quiz workflows.",
    description:
      "Designed as a study system rather than a simple flashcard CRUD app, LinguaDeck combines card management, review scheduling, and segmented listening practice from YouTube content. The product focuses on structured repetition and smaller listening chunks that are easier to absorb during daily study.",
    role: "Product and Backend Engineering",
    images: [
      { src: "/images/projects/linguadeck/overview.png", alt: "LinguaDeck study dashboard" },
      { src: "/images/projects/linguadeck/review.png", alt: "LinguaDeck daily review workflow" },
      { src: "/images/projects/linguadeck/quiz.png", alt: "LinguaDeck quiz mode interface" },
      { src: "/images/projects/linguadeck/listening.png", alt: "LinguaDeck YouTube listening practice interface" },
      { src: "/images/projects/linguadeck/library.png", alt: "LinguaDeck flashcard set management view" },
    ],
    tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Redis"],
    highlights: [
      "Supports creating, editing, and deleting flashcard sets and individual flashcards.",
      "Provides daily review queues and quiz mode for repeated study and progress reinforcement.",
      "Lets users paste a YouTube link, split listening material into smaller segments, and practice audio in manageable chunks.",
    ],
    features: [
      "Flashcard set and card management",
      "Daily review and spaced repetition flow",
      "Quiz and self-test mode",
      "YouTube-assisted listening segmentation",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "YouTube Data API",
      "FFmpeg",
    ],
  },
];

export const projectFilters = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
