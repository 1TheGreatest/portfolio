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
    company: "Atomic Finance",
    href: "https://atomic.finance",
    badges: ["React", "Next.js", "Typescript", "Node.js", "Python"],
    location: "Remote, USA",
    position: "Bitcoin Protocol Engineer",
    logoUrl: "atomic.png",
    start: "May 2021",
    end: "Oct 2022",
    description:
      "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript. Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
  },
  {
    company: "Shopify",
    badges: [],
    href: "https://shopify.com",
    location: "Remote",
    position: "Software Engineer",
    logoUrl: "/shopify.svg",
    start: "January 2021",
    end: "April 2021",
    description:
      "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
  },
  {
    company: "Nvidia",
    href: "https://nvidia.com/",
    badges: [],
    location: "Santa Clara, CA",
    position: "Software Engineer",
    logoUrl: "/nvidia.png",
    start: "January 2020",
    end: "April 2020",
    description:
      "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
  },
  {
    company: "Splunk",
    href: "https://splunk.com",
    badges: [],
    location: "San Jose, CA",
    position: "Software Engineer",
    logoUrl: "/splunk.svg",
    start: "January 2019",
    end: "April 2019",
    description:
      "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
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
