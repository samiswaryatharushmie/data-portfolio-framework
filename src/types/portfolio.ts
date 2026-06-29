export interface SkillData {
  title: string;
  category: string;
  highlights: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  kaggle?: string;
  portfolio?: string;
}

export interface HeroData {
  greeting: string;
  name: string;
  roles: string[];
  description: string;
  profileImage: string;
  technologies: string[];
}

export interface PortfolioData {
  hero: HeroData;
  skills: SkillData[];
  projects: ProjectData[];
  social: SocialLinks;
}

export interface ProjectData {
  title: string;
  subtitle: string;
  role: string;
  description: string;
  image: string;

  technologies: string[];

  github?: string;
  live?: string;
  linkedin?: string;

  featured: boolean;

  status: "Completed" | "In Progress";

  badge?: string;

  highlights: string[];
}