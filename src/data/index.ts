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
    slug: "hanover-insurance",
    title: "Hanover Insurance Prototype",
    description:
      "Full-stack engineer on a 10-person Agile team building a cloud-deployed content management system for The Hanover Insurance Group. Owned audit/metrics infrastructure, content filtering, tag management, and admin user management across 5 sprints.",
    tags: ["React", "TypeScript", "PostgreSQL", "Prisma", "Node.js", "tRPC", "Tailwind", "Railway"],
    github: "#",
    demo: null,
    detail: {
      subtitle: "Full-Stack Web Application — 10-Person Agile Team",
      overview:
        "The Hanover Insurance Web Application Prototype was a coursework project developed in direct collaboration with **The Hanover Insurance Group**. Working on a **10-person team** using **Agile methodology**, we designed and built a cloud-deployed **Content Management System** that streamlined internal content workflows. The application included a content library, user and role management, audit logging, a metrics dashboard, and a customizable admin panel. I worked as a **full-stack software engineer** across all **five sprints**, contributing to both the backend data layer and multiple frontend features.",
      role: "Full-Stack Software Engineer",
      team: "10 Engineers (Agile)",
      year: "2026",
      client: "The Hanover Insurance Group",
      stack: [
        { label: "Stack", value: "PERN + TypeScript" },
        { label: "ORM", value: "Prisma" },
        { label: "API", value: "tRPC" },
        { label: "Styling", value: "Tailwind CSS" },
        { label: "Auth", value: "Supabase" },
        { label: "Deployment", value: "Railway" },
      ],
      contributions: [
        {
          title: "Audit & Metrics Infrastructure",
          description:
            "Designed and implemented the **Prisma schema** for audit events and metrics tracking in **Iteration 1**. Enabled the system to track **edits, deletes, creates, views, downloads, requests, error rates**, content activity, and employee actions across the entire application — forming the data foundation for the **metrics dashboard**.",
        },
        {
          title: "Content Page Filtering & Views",
          description:
            "Built the **filter sidebar panel** for the content library, allowing users to narrow content by **type, format, role, status, and tags**. Implemented a **list view vs card view toggle**, giving users control over how they browse content.",
        },
        {
          title: "Tag Management System",
          description:
            "Made meta tags customizable with **color support**, and built an **admin-side tag management page**. Improved styling and integrated the tags page into the **admin dashboard** for centralized content organization.",
        },
        {
          title: "Download Tracking",
          description:
            "Added a **download button** to content items and wired it into the **metrics tracking system** so that all downloads were recorded as **auditable events**, feeding directly into the analytics dashboard.",
        },
        {
          title: "Admin User Management",
          description:
            "Overhauled the **admin user management page** in Iteration 5, giving admins visibility into **what content each user owns** and **what documents they currently have checked out**. Restyled the **employee co-worker page** and improved the overall admin experience.",
        },
        {
          title: "Bug Fixes & Polish",
          description:
            "Resolved pull requests and bug fixes across multiple sprints. Fixed the **favoriting system**, improved **expired document notifications**, restyled the **document viewer**, and performed a full project **cleanup and polish pass** in the final sprint.",
        },
      ],
      screenshots: [],
    },
  },
  {
    slug: "project-beta",
    title: "Project Beta",
    description:
      "Another featured project. Highlight the architecture, scale, or interesting technical decisions you made.",
    tags: ["Node.js", "Express", "Prisma"],
    github: "#",
    demo: "#",
  },
  {
    slug: "project-gamma",
    title: "Project Gamma",
    description:
      "A third project slot. Could be an algorithm project, CLI tool, or anything else you're proud of.",
    tags: ["Java", "Python", "SQL"],
    github: "#",
    demo: null,
  },
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", logo: "react-original.svg" },
      { name: "TypeScript", logo: "typescript-original.svg" },
      { name: "Tailwind", logo: "tailwindcss-original.svg" },
      { name: "Vite", logo: "vitejs-original.svg" },
      { name: "HTML", logo: "html5-original.svg" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", logo: "nodejs-original.svg" },
      { name: "Express", logo: "express-original.svg" },
      { name: "tRPC", logo: "trpc-original.svg" },
      { name: "Prisma", logo: "prisma-original.svg" },
    ],
  },
  {
    category: "Database / Cloud",
    items: [
      { name: "PostgreSQL", logo: "postgresql-original.svg" },
      { name: "MongoDB", logo: "mongodb-original.svg" },
      { name: "Docker", logo: "docker-plain.svg" },
      { name: "AWS", logo: "amazonwebservices-plain-wordmark.svg" },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "Java", logo: "java-original.svg" },
      { name: "Python", logo: "python-original.svg" },
      { name: "C", logo: "c-original.svg" },
      { name: "C++", logo: "cplusplus-original.svg" },
      { name: "TypeScript", logo: "typescript-original.svg" },
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git", logo: "git-original.svg" },
      { name: "GitHub", logo: "github-original.svg" },
    ],
  },
];
