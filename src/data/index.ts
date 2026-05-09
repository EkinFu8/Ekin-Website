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
    title: "Project Alpha",
    description:
      "A placeholder for your most impressive project. Drop in a short description of what it does and the problem it solves.",
    tags: ["React", "TypeScript", "PostgreSQL"],
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
