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
    badges: [],
    location: "Remote",
    position: "Bitcoin Protocol Engineer",
    logoUrl: "atomic.png",
    start: "May 2021",
    end: "Oct 2022",
    description:
      "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
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
