export interface Project {
  id: number
  title: string
  description: string
  overview: string
  technologies: string[]
  image: string
  demoLink?: string
  githubLink: string
}
export interface BlogPost {
  id: number
  title: string
  description: string
  date: string
  link: string
}

export interface Skill {
  name: string
  icon: React.ElementType
  description: string
}

export interface Certification {
  id: number
  name: string
  issuer: string
  date: string
  link: string
}

export interface SocialIconProps {
  icon: React.ElementType;
  href: string;
  label: string;
}

export interface FormState {
  [key: string]: string;
  app: string;
  name: string;
  email: string;
  message: string;
}

export interface SectionData {
  icon: React.ElementType
  title: string
  items: Array<ExperienceItem | CertificationItem | AchievementItem>
}

export interface ExperienceItem {
  title: string
  company: string
  date: string
  description: string[]
}

export interface CertificationItem {
  title: string
  issuer: string
  date: string
  link: string
  explanation: string
}

export interface AchievementItem {
  title: string
  description: string
  date: string
}