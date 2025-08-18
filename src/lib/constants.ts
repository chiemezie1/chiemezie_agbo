/**
 * Application constants and configuration
 */

// Personal Information
export const PERSONAL_INFO = {
  name: "Chiemezie Agbo",
  title: "Full-Stack Software Engineer",
  email: "chiemezieagbo1@gmail.com",
  phone: "+234 816 545 4530",
  location: "Enugu, Nigeria",
  experience: "Web2 & Web3 Developer",
  tagline: "Specializing in smart contract development, decentralized apps, and frontend engineering",
  description: "Full-stack software engineer with experience building both Web2 and Web3 applications using Solidity, JavaScript, and Python.",
} as const;

// Social Links
export const SOCIAL_LINKS = {
  github: "https://github.com/chiemezie1",
  linkedin: "https://www.linkedin.com/in/chiemezieagbo/",
  twitter: "https://x.com/ChiemezieAgbo",
  medium: "https://medium.com/@chiemezieagbo1",
} as const;

// Navigation Links
export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#writing", label: "Writing" },
  { href: "#elevator-pitch", label: "Elevator Pitch" },
  { href: "#contact", label: "Contact" },
] as const;

// Core Technical Skills
export const CORE_SKILLS = [
  "Solidity", "JavaScript", "Python", "React", "Next.js",
  "Ethereum", "Hardhat", "Foundry", "Web3.js", "Ethers.js",
  "IPFS", "Git", "HTML/CSS", "Tailwind", "Java", "C/C++"
] as const;

// Animation Variants
export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
  },
  staggerChildren: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
} as const;

// Theme Configuration
export const THEME = {
  colors: {
    primary: "#2563eb",
    secondary: "#0d9488",
    accent: "#9333ea",
    text: {
      primary: "#1f2937",
      secondary: "#6b7280",
      light: "#f9fafb",
    },
    background: {
      light: "#ffffff",
      dark: "#111827",
      gray: "#f3f4f6",
    },
  },
  gradients: {
    blueTeal: "linear-gradient(to right, #2563eb, #0d9488)",
    purplePink: "linear-gradient(to right, #9333ea, #db2777)",
    primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
} as const;
