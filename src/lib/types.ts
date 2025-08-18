/**
 * TypeScript type definitions for the portfolio application
 */

// Project Types
export interface Project {
  id: number;
  title: string;
  description: string;
  overview: string;
  technologies: string[];
  image: string;
  demoLink?: string;
  githubLink: string;
  featured?: boolean;
  category?: 'web3' | 'web2' | 'mobile' | 'other';
  purpose: string;
  skillsGained: string[];
  challenges: string[];
}

// Blog Post Types
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  publishedDate: string;
  readTime: string;
  tags: string[];
  image?: string;
  url: string;
}

// Certification Types
export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
  description?: string;
}

// Experience Types
export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string[];
  technologies: string[];
  type: 'work' | 'internship' | 'freelance' | 'volunteer';
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  app?: string;
}

export interface FormState extends ContactFormData {
  isSubmitting?: boolean;
  isSubmitted?: boolean;
  error?: string;
}

// Component Props Types
export interface SocialIconProps {
  icon: React.ComponentType<any>;
  href: string;
  label: string;
  className?: string;
}

export interface SkillIconProps {
  icon: React.ComponentType<any>;
  name: string;
  level?: number;
}

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export interface AnimationProps {
  initial?: any;
  animate?: any;
  transition?: any;
  variants?: any;
  custom?: number;
}

// Navigation Types
export interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

// Theme Types
export interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// SEO Types
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

// Personal Story & Values Types
export interface PersonalValues {
  faith: string;
  leadership: string;
  growth: string;
  principles: string;
}

export interface CareerGoals {
  objective: string;
  dreamJob: string;
  steps: string[];
  strengths: string[];
}
