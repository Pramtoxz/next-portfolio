export interface NavLink {
  label: string;
  href: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  clientOrOrg?: string;
  description: string;
  stack: string[];
  previewImage: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  visualImage: string;
  deliverables: string[];
}

export interface WorkExperience {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
}

export interface ProfileData {
  fullName: string;
  monogram: string;
  headlineRole: string;
  subHeadline: string;
  location: string;
  email: string;
  phone: string;
  liveUrl: string;
  socials: {
    github: string;
    linkedin: string;
  };
  currentStatus: string;
  aboutQuote: string;
  aboutExtended: string;
  tickerItems: string[];
  skills: {
    frontend: string[];
    backend: string[];
    mobile: string[];
    tools: string[];
  };
}
