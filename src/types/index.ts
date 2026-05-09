export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string | null;
  detail?: ProjectDetail;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ProjectDetail {
  subtitle: string;
  overview: string;
  role: string;
  team: string;
  year: string;
  client: string;
  stack: { label: string; value: string }[];
  contributions: {
    title: string;
    description: string;
  }[];
  screenshots: { src: string; caption: string }[];
}
