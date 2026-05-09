export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string | null;
}

export interface SkillGroup {
  category: string;
  items: string[];
}