export const navItems = [
  { name: "Home", id: "#home" },
  { name: "Expertise", id: "#expertise" },
  { name: "Projects", id: "#projects" },
  { name: "Experience", id: "#experience" },
  { name: "Get In Touch", id: "#getInTouch" },
];

export const clients = [
  { logo: "clickup.svg" },
  { logo: "clickup.svg" },
  { logo: "clickup.svg" },
  { logo: "clickup.svg" },
  { logo: "clickup.svg" },
];

export const frontend = [
  { logo: "/icons/shadcnui.png", alt: "shadcn-ui" },
  { logo: "/icons/react.svg", alt: "react" },
  { logo: "/icons/vite.svg", alt: "vite" },
  { logo: "/icons/nextjs.svg", alt: "nextjs" },
  { logo: "/icons/tailwindcss.svg", alt: "tailwindcss" },
];
export const backend = [
  { logo: "/icons/node.svg", alt: "node" },
  { logo: "/icons/express.svg", alt: "express" },
  { logo: "/icons/flask.svg", alt: "flask" },
  { logo: "/icons/fastapi.svg", alt: "fastapi" },
  { logo: "/icons/payload.svg", alt: "payload" },
];
export const databases = [
  { logo: "/icons/postgresql.svg", alt: "postgres" },
  { logo: "/icons/mysql.svg", alt: "mysql" },
  { logo: "/icons/mongodb.svg", alt: "mongo" },
  { logo: "/icons/firebase.svg", alt: "firebase" },
  { logo: "/icons/redis.svg", alt: "redis" },
];
export const others = [
  { logo: "/icons/aws.svg", alt: "aws" },
  { logo: "/icons/vercel.svg", alt: "vercel" },
  { logo: "/icons/git.svg", alt: "git" },
  { logo: "/icons/github.svg", alt: "github" },
  { logo: "/icons/docker.svg", alt: "docker" },
  { logo: "/icons/kubernetes.svg", alt: "kubernetes" },
  { logo: "/icons/sentry.svg", alt: "sentry" },
  { logo: "/icons/rabbitmq.svg", alt: "rabbitmq" },
  { logo: "/icons/kafka.svg", alt: "kafka" },
];

export const experiences = [
  {
    company: "Invisible",
    href: "https://www.invisible.co/",
    badges: [
      "React",
      "Next.js",
      "Typescript",
      "Express",
      "Prisma",
      "Postgres",
      "NX Workspaces",
      "Kubernetes",
      "Docker",
      "tRPC",
      "AWS Serverless",
    ],
    location: "Remote, USA",
    position: "Application Engineer",
    logoUrl: "invisible.png",
    start: "2022",
    end: "Current",
    descriptions: [
      "Designed and implemented robust, scalable web applications using TypeScript, NextJS, and React, following modern JavaScript best practices to ensure high code quality and maintainability.",
      "Spearheaded the development and maintenance of a monorepo structure with micro frontends using NX Workspaces, streamlining cross-team collaboration and accelerating feature delivery.",
      "Integrated Prisma with PostgreSQL to create efficient data models and queries, ensuring data integrity and optimal performance across multiple projects.",
      "Deployed applications on Kubernetes clusters, enhancing reliability and scalability while using tRPC for streamlined, type-safe API communications.",
      "Collaborated in agile environments, participating in code reviews, sprint planning, and daily stand-ups—to drive continuous improvement and adopt new technologies and methodologies.",
      "Actively researched and experimented with emerging tools and frameworks to optimize development workflows, contributing to a culture of innovation and technical excellence.",
    ],
  },
  {
    company: "TQGL",
    badges: [
      "React",
      "Flutter",
      "Kotlin",
      "Node.js",
      "Python",
      "Postgres",
      "Pentaho",
      "Airflow",
      "Odoo ERP",
      "Redis",
    ],
    href: "https://www.quantumgroupgh.com/",
    location: "GHANA",
    position: "Software Engineer (Team Lead)",
    logoUrl: "quantum.png",
    start: "2021",
    end: "2022",
    descriptions: [
      "Developed automation scripts to enhance data processing efficiency for data migrations.",
      "Implemented data caching mechanisms, reducing database queries and improving overall system performance.",
      "Developed, tested, and debugged custom Python modules utilized by clients and internal customers to facilitate an easier process and user experience.",
      "Actively contributed to process improvement, simplifying and enhancing deployment processes for new features and functionality within the team.",
      "Innovatively crafted Python APIs, facilitating seamless integration of ERP data with independent ecommerce platforms, contributing to enhanced cross- platform functionality.",
      "Collaborated closely with different teams to produce practical solutions that aligned seamlessly with business objectives.",
    ],
  },
  {
    company: "TQGL",
    badges: [
      "React",
      "Typescript",
      "Node.js",
      "Flask",
      "FastAPI",
      "Postgres",
      "Docker",
      "Kafka",
      "Celery",
      "Odoo ERP",
    ],
    href: "https://www.quantumgroupgh.com/",
    location: "GHANA",
    position: "Software Engineer",
    logoUrl: "quantum.png",
    start: "2019",
    end: "2021",
    descriptions: [
      "Developed a reporting app, and a discharge app for station managers on the field to report daily fuel sales, report discharged products into tanks, and report faulty equipment to headquarters.",
      "Developed high-performance microservices using Flask, integrated with Keycloak for secure user authentication, Kafka for real-time event streaming, and Celery for distributed task processing.",
      "Developed Odoo modules to be used at the headquarters to receive and analyze reports coming from station managers and also modules used by departments like treasury, finance and accounting, and marketing.",
      "Provided technical support for ERP modules developed.",
    ],
  },
];

export const projects = [
  {
    title: "Chat Collect",
    href: "https://chatcollect.com",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    iconLists: [
      "/icons/aws.svg",
      "/icons/express.svg",
      "/icons/flask.svg",
      "/icons/mysql.svg",
      "/icons/nextjs.svg",
    ],
    link: "https://chatcollect.com",
    image: "/solo.png",
    video:
      "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
  },{
    title: "Chat Collect",
    href: "https://chatcollect.com",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    iconLists: [
      "/icons/aws.svg",
      "/icons/express.svg",
      "/icons/flask.svg",
      "/icons/mysql.svg",
      "/icons/nextjs.svg",
    ],
    link: "https://chatcollect.com",
    image: "/solo.png",
    video:
      "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
  },
  {
    title: "Magic UI",
    href: "https://magicui.design",
    dates: "June 2023 - Present",
    active: true,
    description:
      "Designed, developed and sold animated UI components for developers.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    link: "https://chatcollect.com",
    image: "",
    video: "https://cdn.magicui.design/bento-grid.mp4",
  },
  {
    title: "llm.report",
    href: "https://llm.report",
    dates: "April 2023 - September 2023",
    active: true,
    description:
      "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Shadcn UI",
      "Magic UI",
      "Stripe",
      "Cloudflare Workers",
    ],
    link: "https://chatcollect.com",
    image: "",
    video: "https://cdn.llm.report/openai-demo.mp4",
  },
  {
    title: "Automatic Chat",
    href: "https://automatic.chat",
    dates: "April 2023 - March 2024",
    active: true,
    description:
      "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Shadcn UI",
      "Magic UI",
      "Stripe",
      "Cloudflare Workers",
    ],
    link: "https://chatcollect.com",
    image: "",
    video:
      "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
  },
];
