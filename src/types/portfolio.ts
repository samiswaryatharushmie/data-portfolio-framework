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
}

export interface PortfolioData {
  hero: HeroData;
  social: SocialLinks;
}