import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "CitreaBlockEstate",
    description: "A DApp for tokenizing real estate properties on the Citrea blockchain.",
    overview: "CitreaBlockEstate is a groundbreaking decentralized application that tokenizes real estate properties using cutting-edge blockchain technology. Built on the Citrea blockchain, a Type 2 zkEVM rollup on Bitcoin, it offers a secure, transparent, and efficient way to invest in, manage, and trade real estate assets globally.",
    technologies: ["Next.js", "TypeScript", "Solidity", "Hardhat", "Citrea Blockchain"],
    image: "/images/citreablock.png?height=200&width=300",
    demoLink: "https://citrea-block-estate.vercel.app/",
    githubLink: "https://github.com/chiemezie1/CitreaBlockEstate"
  },
  {
    id: 2,
    title: "Small Business Management System (SBMS)",
    description: "A comprehensive, command-line tool for small business operations management.",
    overview: "SBMS is an all-in-one solution for inventory, orders, customers, and finances management. It offers features like inventory management, order processing, customer information management, financial reporting, user management, and data backup and restore capabilities.",
    technologies: ["C", "GCC", "Make"],
    image: "/images/SBMS.png?height=200&width=300",
    demoLink: "https://youtu.be/TwM4x0S1GDw",
    githubLink: "https://github.com/chiemezie1/SmallBusinessManagementSystem"
  },
  {
    id: 3,
    title: "Aptos Collectible Hub",
    description: "An innovative NFT marketplace powered by the Aptos blockchain.",
    overview: "Aptos Collectible Hub is an NFT marketplace that leverages the speed, security, and scalability of the Aptos blockchain. It offers advanced features like auctions, NFT editing, and seamless transfers, making it a cost-effective and scalable solution for both creators and collectors.",
    technologies: ["React", "Aptos Blockchain", "Move", "IPFS", "Pinata"],
    image: "/images/aptoscollectible.png?height=200&width=300",
    demoLink: "https://aptos-collectible-hub.vercel.app/",
    githubLink: "https://github.com/chiemezie1/Aptos-Collectible-hub"
  },
  {
    id: 4,
    title: "News Gemini AI Assist",
    description: "Concise and insightful summaries of the latest news, powered by AI technology.",
    overview: "NewsAssist is a personalized news aggregator that provides updates based on user preferences. It uses AI to summarize news articles from trusted sources, saving users time while keeping them informed.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/images/newsassist.png?height=200&width=300",
    demoLink: "https://ai-news-assist.vercel.app/",
    githubLink: "https://github.com/chiemezie1/AiNewsAssist"
  },
  {
    id: 5,
    title: "CanvaTrans: Revolutionizing Content Sharing with Web3 Technology",
    description: "A decentralized content-sharing platform built on Arbitrum.",
    overview: "CanvaTrans is a decentralized content-sharing platform built on Arbitrum (a Layer 2 scaling solution) Blockchain. It empowers creators to truly own, manage, and monetize their digital content in ways never before possible. By using blockchain technology, CanvaTrans creates a transparent, secure, and creator-centric ecosystem that changes how digital content is shared and monetized.",
    technologies: ["Next.js", "Arbitrum", "Solidity", "Wagmi CLI", "RainbowKit", "Foundry", "IPFS", "Tailwind CSS"],
    image: "/images/CanvaTrans.png?height=200&width=300",
    demoLink: "https://canvas-trans-hub.vercel.app/",
    githubLink: "https://github.com/chiemezie1/CanvasTransHub"
  },
  {
    id: 6,
    title: "Land Registry DApp",
    description: "A decentralized application for managing land registry powered by Cartesi rollups technology.",
    overview: "The Land Registry DApp is a decentralized application that allows users to register land, update land details, and manage land ownership on the blockchain. It ensures ownership assurance, secure transactions, and leverages a decentralized network for data integrity.",
    technologies: ["Node.js", "Docker", "Cartesi CLI"],
    image: "/images/land-registry.png?height=200&width=300",
    demoLink: "https://land-registry-demo.com",
    githubLink: "https://github.com/yourusername/land-registry-dapp"
  },
  {
    id: 7,
    title: "Sentiment Analysis IMDb Movie Review",
    description: "Sentiment analysis of IMDb movie reviews for 'The Sound of Music'.",
    overview: "This project automates the extraction of user reviews for the movie 'The Sound of Music' from IMDb. Using Selenium WebDriver, it navigates the IMDb page, loads all available reviews, and then performs sentiment analysis using the VADER model from NLTK.",
    technologies: ["Python", "Jupyter Notebook", "Selenium", "NLTK"],
    image: "/images/sentiment.png?height=200&width=300",
    githubLink: "https://github.com/chiemezie1/Sentiment_Analysis_IMDb_Movie_Review"
  },
  {
    id: 8,
    title: "CarRide Contract",
    description: "A smart contract for a car ride platform, built using Solidity on the Goerli test network.",
    overview: `This is a smart contract for a car ride platform using Solidity, built for the Goerli test network with Hardhat. 
                 The contract enables users to register as riders or drivers, request rides, accept ride requests, and confirm rides. 
                 Key functions include registering riders and drivers, requesting and accepting rides, and confirming rides.
                 Deployed on Goerli at contract address: 0x12175E6C31afc8A5648Aeee20563A7e9d6D29D46.`,
    technologies: ["Solidity", "Hardhat", "Goerli Test Network"],
    image: "/images/car-ride.png?height=200&width=300",
    demoLink: "https://blockchain-car-ride.vercel.app/",
    githubLink: "https://github.com/chiemezie1/blockchain-carRide"
  },
  {
    id: 9,
    title: "StackShop Website",
    description: "An e-commerce website that integrates Affinidi login.",
    overview: "This web application enhances the shopping experience by integrating Affinidi Login. It utilizes user data (location, age) retrieved from Affinidi to provide a personalized shopping experience.",
    technologies: ["Tailwind CSS", "Affinidi", "Next.js"],
    image: "/images/stackshop.png?height=200&width=300",
    demoLink: "https://stack-shop-webite.vercel.app/",
    githubLink: "https://github.com/chiemezie1/StackShop_webite"
  },
  {
    id: 10,
    title: "Mental Health Assistant Chatbot with Sentiment-Based Response Generation",
    description: "An AI chatbot that integrates sentiment analysis to provide personalized emotional support.",
    overview: `This Mental Health Assistant Chatbot uses AI to provide support to users experiencing stress, anxiety, or depression. 
                The chatbot detects the user's mood (positive, neutral, or negative) and generates responses accordingly. 
                Key features include sentiment analysis, intent classification, and natural language response generation using the Llama model. 
                It aims to offer real-time emotional support, though it's not a replacement for professional mental health services.`,
    technologies: ["Python", "Gradio", "Hugging Face", "Llama Model"],
    image: "/images/mental-health-chatbot.png?height=200&width=300",
    githubLink: "https://github.com/chiemezie1/MentalHealth_Assistant_Chatbot",
    demoLink: "https://colab.research.google.com/drive/1NmevnFVbfjTNBqxw-B1WuvPQ5A0BLglS?usp=sharing"
  }
];

export default projects;