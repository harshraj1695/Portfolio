import type { ReactNode } from "react";

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  icon: string;
};

export interface Skill {
  name: string;
  icon: ReactNode;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  icon: string;
}