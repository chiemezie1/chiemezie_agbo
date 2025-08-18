/**
 * Projects data with enhanced categorization and details
 */

import { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    id: 1,
    title: "CitreaBlockEstate",
    description: "A DApp for tokenizing real estate properties on the Citrea blockchain.",
    overview: "CitreaBlockEstate is a groundbreaking decentralized application that tokenizes real estate properties using cutting-edge blockchain technology. Built on the Citrea blockchain, a Type 2 zkEVM rollup on Bitcoin, it offers a secure, transparent, and efficient way to invest in, manage, and trade real estate assets globally.",
    technologies: ["Next.js", "TypeScript", "Solidity", "Hardhat", "Citrea Blockchain"],
    image: "/images/citreablock.png",
    demoLink: "https://citrea-block-estate.vercel.app/",
    githubLink: "https://github.com/chiemezie1/CitreaBlockEstate",
    featured: true,
    category: "web3",
    purpose: "To revolutionize real estate investment by making property ownership more accessible, transparent, and liquid through blockchain tokenization.",
    skillsGained: ["Smart contract development on Citrea blockchain", "Real estate tokenization concepts", "zkEVM rollup integration", "DeFi protocol design"],
    challenges: ["Implementing complex real estate data structures on-chain", "Ensuring regulatory compliance for tokenized assets", "Optimizing gas costs for property transactions", "Building user-friendly interfaces for complex blockchain operations"]
  },
  {
    id: 2,
    title: "Small Business Management System (SBMS)",
    description: "A comprehensive, command-line tool for small business operations management.",
    overview: "SBMS is an all-in-one solution for inventory, orders, customers, and finances management. It offers features like inventory management, order processing, customer information management, financial reporting, user management, and data backup and restore capabilities.",
    technologies: ["C", "GCC", "Make"],
    image: "/images/SBMS.png",
    demoLink: "https://youtu.be/TwM4x0S1GDw",
    githubLink: "https://github.com/chiemezie1/SmallBusinessManagementSystem",
    featured: false,
    category: "other",
    purpose: "To provide small businesses with an affordable, comprehensive management system that handles inventory, orders, customers, and finances in one unified platform.",
    skillsGained: ["Systems programming in C", "Memory management and optimization", "File I/O operations", "Command-line interface design", "Business logic implementation"],
    challenges: ["Managing complex data structures in C", "Implementing robust error handling", "Ensuring data persistence and backup reliability", "Creating intuitive command-line user experience"]
  },
  {
    id: 3,
    title: "Aptos Collectible Hub",
    description: "An innovative NFT marketplace powered by the Aptos blockchain.",
    overview: "Aptos Collectible Hub is an NFT marketplace that leverages the speed, security, and scalability of the Aptos blockchain. It offers advanced features like auctions, NFT editing, and seamless transfers, making it a cost-effective and scalable solution for both creators and collectors.",
    technologies: ["React", "Aptos Blockchain", "Move", "IPFS", "Pinata"],
    image: "/images/aptoscollectible.png",
    demoLink: "https://aptos-collectible-hub.vercel.app/",
    githubLink: "https://github.com/chiemezie1/Aptos-Collectible-hub",
    featured: true,
    category: "web3",
    purpose: "To create a scalable, user-friendly NFT marketplace that leverages Aptos blockchain's speed and low transaction costs to provide a better experience for creators and collectors.",
    skillsGained: ["Move programming language", "Aptos blockchain development", "NFT standards and implementation", "IPFS integration", "React frontend development"],
    challenges: ["Learning Move programming language", "Implementing complex auction mechanisms", "Handling large-scale NFT metadata storage", "Optimizing for Aptos blockchain specifics"]
  },
  {
    id: 4,
    title: "News Gemini AI Assist",
    description: "Concise and insightful summaries of the latest news, powered by AI technology.",
    overview: "NewsAssist is a personalized news aggregator that provides updates based on user preferences. It uses AI to summarize news articles from trusted sources, saving users time while keeping them informed.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/images/newsassist.png",
    demoLink: "https://ai-news-assist.vercel.app/",
    githubLink: "https://github.com/chiemezie1/AiNewsAssist",
    featured: false,
    category: "web2",
    purpose: "To help users stay informed efficiently by providing AI-powered news summaries and personalized content curation based on individual preferences.",
    skillsGained: ["AI integration and API usage", "News aggregation systems", "MongoDB database design", "User preference algorithms", "Real-time data processing"],
    challenges: ["Integrating multiple news APIs", "Implementing effective content filtering", "Managing real-time data updates", "Creating accurate AI summarization"]
  },
  {
    id: 5,
    title: "CanvaTrans: Revolutionizing Content Sharing with Web3 Technology",
    description: "A decentralized content-sharing platform built on Arbitrum.",
    overview: "CanvaTrans is a decentralized content-sharing platform built on Arbitrum (a Layer 2 scaling solution) Blockchain. It empowers creators to truly own, manage, and monetize their digital content in ways never before possible. By using blockchain technology, CanvaTrans creates a transparent, secure, and creator-centric ecosystem that changes how digital content is shared and monetized.",
    technologies: ["Next.js", "Arbitrum", "Solidity", "Wagmi CLI", "RainbowKit", "Foundry", "IPFS", "Tailwind CSS"],
    image: "/images/CanvaTrans.png",
    demoLink: "https://canvas-trans-hub.vercel.app/",
    githubLink: "https://github.com/chiemezie1/CanvasTransHub",
    featured: true,
    category: "web3",
    purpose: "To empower content creators with true ownership and monetization of their digital content through decentralized blockchain technology.",
    skillsGained: ["Arbitrum Layer 2 development", "Creator economy platforms", "IPFS content storage", "Web3 monetization models", "RainbowKit wallet integration"],
    challenges: ["Implementing complex creator monetization logic", "Handling large file uploads to IPFS", "Creating seamless Web3 user experience", "Optimizing for Layer 2 gas efficiency"]
  },
  {
    id: 6,
    title: "Land Registry DApp",
    description: "A decentralized application for managing land registry powered by Cartesi rollups technology.",
    overview: "The Land Registry DApp is a decentralized application that allows users to register land, update land details, and manage land ownership on the blockchain. It ensures ownership assurance, secure transactions, and leverages a decentralized network for data integrity.",
    technologies: ["Node.js", "Docker", "Cartesi CLI"],
    image: "/images/land-registry.png",
    demoLink: "https://land-registry-demo.com",
    githubLink: "https://github.com/yourusername/land-registry-dapp",
    featured: false,
    category: "web3",
    purpose: "To create a transparent, immutable land registry system that prevents fraud and ensures secure property ownership verification.",
    skillsGained: ["Cartesi rollups technology", "Land registry systems", "Docker containerization", "Blockchain data integrity", "Government system integration"],
    challenges: ["Understanding Cartesi rollups architecture", "Implementing complex land ownership logic", "Ensuring data immutability and security", "Creating user-friendly interfaces for government use"]
  },
  {
    id: 7,
    title: "Sentiment Analysis IMDb Movie Review",
    description: "Sentiment analysis of IMDb movie reviews for 'The Sound of Music'.",
    overview: "This project automates the extraction of user reviews for the movie 'The Sound of Music' from IMDb. Using Selenium WebDriver, it navigates the IMDb page, loads all available reviews, and then performs sentiment analysis using the VADER model from NLTK.",
    technologies: ["Python", "Jupyter Notebook", "Selenium", "NLTK"],
    image: "/images/sentiment.png",
    githubLink: "https://github.com/chiemezie1/Sentiment_Analysis_IMDb_Movie_Review",
    featured: false,
    category: "other",
    purpose: "To demonstrate automated data extraction and sentiment analysis capabilities for understanding public opinion on entertainment content.",
    skillsGained: ["Web scraping with Selenium", "Natural language processing", "VADER sentiment analysis", "Data visualization", "Jupyter notebook development"],
    challenges: ["Handling dynamic web content loading", "Implementing robust web scraping", "Processing large volumes of text data", "Ensuring accurate sentiment classification"]
  },
  {
    id: 8,
    title: "CarRide Contract",
    description: "A smart contract for a car ride platform, built using Solidity on the Goerli test network.",
    overview: "This is a smart contract for a car ride platform using Solidity, built for the Goerli test network with Hardhat. The contract enables users to register as riders or drivers, request rides, accept ride requests, and confirm rides. Key functions include registering riders and drivers, requesting and accepting rides, and confirming rides. Deployed on Goerli at contract address: 0x12175E6C31afc8A5648Aeee20563A7e9d6D29D46.",
    technologies: ["Solidity", "Hardhat", "Goerli Test Network"],
    image: "/images/car-ride.png",
    demoLink: "https://blockchain-car-ride.vercel.app/",
    githubLink: "https://github.com/chiemezie1/blockchain-carRide",
    featured: false,
    category: "web3",
    purpose: "To create a decentralized ride-sharing platform that eliminates intermediaries and provides transparent, secure transactions between riders and drivers.",
    skillsGained: ["Solidity smart contract development", "Hardhat development environment", "Ethereum testnet deployment", "Smart contract testing", "Decentralized application architecture"],
    challenges: ["Implementing secure payment escrow logic", "Handling ride state management on-chain", "Optimizing gas costs for frequent transactions", "Creating reliable dispute resolution mechanisms"]
  },
  {
    id: 9,
    title: "StackShop Website",
    description: "An e-commerce website that integrates Affinidi login.",
    overview: "This web application enhances the shopping experience by integrating Affinidi Login. It utilizes user data (location, age) retrieved from Affinidi to provide a personalized shopping experience.",
    technologies: ["Tailwind CSS", "Affinidi", "Next.js"],
    image: "/images/stackshop.png",
    demoLink: "https://stack-shop-webite.vercel.app/",
    githubLink: "https://github.com/chiemezie1/StackShop_webite",
    featured: false,
    category: "web2",
    purpose: "To demonstrate how decentralized identity solutions can enhance e-commerce personalization while maintaining user privacy and data control.",
    skillsGained: ["Affinidi identity integration", "Privacy-preserving authentication", "Personalized user experiences", "Modern e-commerce development", "Tailwind CSS styling"],
    challenges: ["Integrating Affinidi authentication flow", "Implementing privacy-preserving personalization", "Creating seamless user onboarding", "Balancing personalization with privacy"]
  },
  {
    id: 10,
    title: "Mental Health Assistant Chatbot with Sentiment-Based Response Generation",
    description: "An AI chatbot that integrates sentiment analysis to provide personalized emotional support.",
    overview: "This Mental Health Assistant Chatbot uses AI to provide support to users experiencing stress, anxiety, or depression. The chatbot detects the user's mood (positive, neutral, or negative) and generates responses accordingly. Key features include sentiment analysis, intent classification, and natural language response generation using the Llama model. It aims to offer real-time emotional support, though it's not a replacement for professional mental health services.",
    technologies: ["Python", "Gradio", "Hugging Face", "Llama Model"],
    image: "/images/mental-health-chatbot.png",
    githubLink: "https://github.com/chiemezie1/MentalHealth_Assistant_Chatbot",
    demoLink: "https://colab.research.google.com/drive/1NmevnFVbfjTNBqxw-B1WuvPQ5A0BLglS?usp=sharing",
    featured: false,
    category: "other",
    purpose: "To provide accessible mental health support through AI-powered sentiment analysis and empathetic response generation for users experiencing emotional distress.",
    skillsGained: ["Large language model integration", "Sentiment analysis implementation", "Mental health application development", "Gradio interface design", "Hugging Face model deployment"],
    challenges: ["Ensuring empathetic and appropriate responses", "Implementing accurate sentiment detection", "Handling sensitive mental health topics", "Creating safe and supportive user interactions"]
  }
];

// Filter functions for different project categories
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getWeb3Projects = (): Project[] => {
  return getProjectsByCategory('web3');
};

export const getWeb2Projects = (): Project[] => {
  return getProjectsByCategory('web2');
};

// Project statistics
export const projectStats = {
  total: projects.length,
  web3: getWeb3Projects().length,
  web2: getWeb2Projects().length,
  featured: getFeaturedProjects().length,
  technologies: Array.from(new Set(projects.flatMap(p => p.technologies))).length
};
