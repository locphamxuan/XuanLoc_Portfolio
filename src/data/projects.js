export const projects = [
  {
    title: "Parking Building Management System",
    description:
      "Multi-building, multi-floor parking platform covering vehicle check-in/out, fee calculation, long-term subscriptions, staff shift management, revenue distribution and wallet transactions across customer, staff, manager and admin roles.",
    tech: ["ReactJS", "React Native", "Node.js", "Express", "MongoDB", "JWT"],
    systemDesign: [
      "Layered architecture: Route → Validator → Controller → Service → Model",
      "Role-based access control (RBAC) across 4 roles",
      "Wallet & transaction subsystem for payments and revenue split",
      "Audit logging and centralized error-handling middleware",
    ],
    links: [
      { label: "Frontend", url: "https://github.com/locphamxuan/ParkingManagement_FE_SWP391" },
      { label: "Backend", url: "https://github.com/locphamxuan/ParkingManagement_BE" },
      { label: "Mobile", url: "https://github.com/locphamxuan/ParkingManagement_Mobile" },
    ],
  },
  {
    title: "AI Incident Management Platform",
    description:
      "Event-driven platform that ingests application logs, detects anomalies in real time and uses an AI agent to explain the likely root cause of incidents, grounded in past runbooks.",
    tech: ["TypeScript", "React", "Node.js", "Kafka", "PostgreSQL", "Redis", "Docker", "Claude API"],
    systemDesign: [
      "Microservices connected through Kafka event topics, not direct calls",
      "RAG pipeline (pgvector) retrieves runbooks before asking Claude for root-cause analysis",
      "CQRS split between live incident dashboard and reporting dashboard",
      "Resilience patterns: retry with backoff, circuit breaker, dead-letter queues, idempotent event handling",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/locphamxuan/AI-Incident-Management/tree/dev" },
    ],
  },
  {
    title: "Football Community Platform",
    description:
      "Grassroots football community platform where players book pitches and join teams, managers organize matches and track Elo ratings, and field owners manage facilities and subscriptions.",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Redis", "Socket.IO"],
    systemDesign: [
      "Monorepo with a shared TypeScript contract layer across web and mobile",
      "Subscription revenue isolated from booking transaction flow",
      "Redis used for caching, rate limiting and real-time pub/sub fan-out",
      "JWT with httpOnly refresh tokens; Socket.IO for real-time chat",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/locphamxuan/Football-Community-Platform" },
    ],
  },
];
