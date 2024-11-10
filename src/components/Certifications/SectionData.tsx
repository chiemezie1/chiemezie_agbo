import { FaBriefcase, FaCertificate, FaTrophy } from 'react-icons/fa'
import { SectionData} from '../types'
type SectionType = 'experience' | 'certifications' | 'achievements'

const sectionData: Record<SectionType, SectionData> = {
  experience: {
    icon: FaBriefcase,
    title: 'Experience',
    items: [
      {
        title: "Blockchain Advocate & Ambassador",
        company: "Socrates – Remote",
        date: "September 2024 - Present",
        description: [
          "Engaged in Web3 community advocacy for Socrates, a Web2 + Web3 social media platform.",
          "Advocated for the platform's mission to foster rational, inclusive, and open conversations."
        ]
      },
      {
        title: "DevOps Engineer",
        company: "Xpactix LLC – Camp Springs, Maryland",
        date: "July 2023 – September 2024",
        description: [
          "Developed and updated containerized infrastructure using Docker for secure, scalable deployments.",
          "Automated CI/CD pipelines to streamline decentralized app deployment and minimize production downtime.",
        ]
      },
      {
        title: "Solidity Developer",
        company: "Grandida LLC – Miramar, Florida",
        date: "June 2022 – May 2023",
        description: [
          "Developed and deployed smart contracts for DApps on the Ethereum network.",
          "Conducted code reviews, mentored junior developers, and ensured best practices in Solidity development.",
        ]
      },
      {
        title: "Computer Technician",
        company: "Soltan Technologies Limited – Enugu, Nigeria",
        date: "October 2017 – November 2018",
        description: [
          "Performed hardware troubleshooting, including motherboard repairs, BIOS configuration, and component upgrades.",
          "Installed and maintained software systems, performed virus scans, and configured firewalls.",
        ]
      }
    ]
  },
  certifications: {
    icon: FaCertificate,
    title: 'Certifications',
    items: [
      { 
        title: "Blockchain Specialization", 
        issuer: "University of Buffalo", 
        date: "June 2024", 
        link: "https://www.coursera.org/specializations/blockchain",
        explanation: "Comprehensive study of blockchain technology, including smart contracts and decentralized applications."
      },
      { 
        title: "Coding for Everyone: C and C++", 
        issuer: "University of California, Santa Cruz", 
        date: "May 2024", 
        link: "https://www.coursera.org/specializations/coding-for-everyone",
        explanation: "Foundational programming skills in C and C++, covering data structures and algorithms."
      },
      { 
        title: "Java Programming and Software Engineering Fundamentals", 
        issuer: "Duke University", 
        date: "April 2024", 
        link: "https://www.coursera.org/specializations/java-programming",
        explanation: "Core Java programming concepts and software engineering principles for building robust applications."
      },
      { 
        title: "JavaScript", 
        issuer: "University of California, Davis", 
        date: "March 2024", 
        link: "https://www.coursera.org/learn/javascript",
        explanation: "Essential JavaScript programming skills for web development and interactive user interfaces."
      },
      { 
        title: "Python 3 Programming", 
        issuer: "University of Michigan", 
        date: "February 2024", 
        link: "https://www.coursera.org/specializations/python-3-programming",
        explanation: "Comprehensive Python programming skills, including data manipulation and software development practices."
      },
      { 
        title: "Ethical Leadership Specialization", 
        issuer: "University of Buffalo", 
        date: "January 2024", 
        link: "https://www.coursera.org/specializations/ethical-leadership",
        explanation: "Principles of ethical decision-making and leadership in professional and personal contexts."
      }
    ]
  },
  achievements: { 
    icon: FaTrophy,
    title: 'Achievements',
    items: [
      { 
        title: "Hackathon Winner",
        description: "Member of Team Aurora, which won a $1500 bounty at the Web3LagosCon Hackathon by Onboard.xyz, BlockchainUNN and @LiskHQ. Developed a blockchain-based streaming platform for creators.",
        date: "August 2024"
      },
      { 
        title: "Web3 Community Advocate",
        description: "Active participant in blockchain ambassador programs, promoting the adoption of Web3 technologies and decentralized solutions within various tech communities, including the Socrates platform.",
        date: "Ongoing"
      },
      { 
        title: "Team Leadership",
        description: "Led development teams on multiple blockchain projects, including decentralized finance (DeFi) applications, ensuring best practices in security, scalability, and maintainability.",
        date: "2023 - 2024"
      }
    ]
  }
}

export default sectionData;