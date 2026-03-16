export type NavigationItem = {
  label: string;
  href: string;
};

export type HeroHighlight = {
  label: string;
  value: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  project?: string;
  summary: string;
  stack: string[];
  bullets: string[];
};

export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  slug: string;
  category: string;
  featured?: boolean;
  summary: string;
  description: string;
  timeframe?: string;
  role?: string;
  images: ProjectImage[];
  tags: string[];
  highlights: string[];
  features: string[];
  techStack: string[];
  links?: ProjectLink[];
};

export type ContactLink = {
  label: string;
  href: string;
  value: string;
};
