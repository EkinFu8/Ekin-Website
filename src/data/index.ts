import type { Project, SkillGroup } from "../types";

export const NAV_LINKS = ["Projects", "Skills", "About", "Contact"];

export const TYPING_PHRASES = [
  "systems engineer.",
  "full-stack developer.",
  "backend builder.",
  "CS student @ WPI.",
];

export const PROJECTS: Project[] = [
  {
    title: "Hanover Insurance Web Application",
    description:
      "Built and deployed a full-stack cloud-hosted web application for Hanover Insurance on a 10-person Agile team. Included a content management system, user and role management, login authentication, data analytics, and a customizable dashboard.",
    tags: [
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Node.js",
      "Express",
      "Tailwind",
      "Railway",
    ],
    github: "#",
    demo: null,
  },
  {
    title: "Project Beta",
    description:
      "Another featured project. Highlight the architecture, scale, or interesting technical decisions you made.",
    tags: ["Node.js", "Express", "Prisma"],
    github: "#",
    demo: "#",
  },
  {
    title: "Project Gamma",
    description:
      "A third project slot. Could be an algorithm project, CLI tool, or anything else you're proud of.",
    tags: ["Java", "Python", "SQL"],
    github: "#",
    demo: null,
  },
];

export const SKILLS: SkillGroup[] = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind", "Vite"] },
  { category: "Backend", items: ["Node.js", "Express", "tRPC", "Prisma"] },
  { category: "Database / Cloud", items: ["PostgreSQL", "Supabase", "Vercel"] },
  { category: "Languages", items: ["TypeScript", "Java", "Python", "SQL"] },
];
