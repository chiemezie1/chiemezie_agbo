import { Project } from '../types';

const projects: Project[] = [
    {
      id: 1,
      title: "News Gemini AI Assist",
      description: "Concise and insightful summaries of the latest news, powered by AI technology.",
      overview: "NewsAssist is a personalized news aggregator that provides updates based on user preferences. It uses AI to summarize news articles from trusted sources, saving users time while keeping them informed.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "/images/newsassist.png?height=200&width=300",
      demoLink: "https://ai-news-assist.vercel.app/",
      githubLink: "https://github.com/chiemezie1/AiNewsAssist"
    },
    {
      id: 2,
      title: "Land Registry DApp",
      description: "A decentralized application for managing land registry powered by Cartesi rollups technology.",
      overview: "The Land Registry DApp is a decentralized application that allows users to register land, update land details, and manage land ownership on the blockchain. It ensures ownership assurance, secure transactions, and leverages a decentralized network for data integrity.",
      technologies: ["Node.js", "Docker", "Cartesi CLI"],
      image: "/images/land-registry.png?height=200&width=300",
      demoLink: "https://land-registry-demo.com",
      githubLink: "https://github.com/yourusername/land-registry-dapp"
    },
    {
      id: 3,
      title: "Sentiment Analysis IMDb Movie Review",
      description: "Sentiment analysis of IMDb movie reviews for 'The Sound of Music'.",
      overview: "This project automates the extraction of user reviews for the movie 'The Sound of Music' from IMDb. Using Selenium WebDriver, it navigates the IMDb page, loads all available reviews, and then performs sentiment analysis using the VADER model from NLTK.",
      technologies: ["Python", "Jupyter Notebook", "Selenium", "NLTK"],
      image: "/images/sentiment.png?height=200&width=300",
      githubLink: "https://github.com/chiemezie1/Sentiment_Analysis_IMDb_Movie_Review"
    },
    {
      id: 4,
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
      id: 5,
      title: "CanvaTrans Arbitrum Sepolia Social dApp",
      description: "A decentralized content-sharing platform built on Arbitrum.",
      overview: "CanvaTrans is a Web3-powered content-sharing platform that allows creators to post, organize, and earn directly from their work. With just a connected wallet, users can create and share content as blockchain transactions, receive donations, and manage personalized content blocks. Offering creators 95% of their earnings, CanvaTrans provides a decentralized, transparent, and user-friendly platform for artists, writers, and innovators to showcase their work and connect with fans without intermediaries.",
      technologies: ["Next.js", "Wagmi CLI",  "Forge",  "Pinata",  "RainbowKit",  "Solidity"],
      image: "/images/CanvaTrans.png?height=200&width=300",
      demoLink: "https://canvas-trans-hub.vercel.app/",
      githubLink: "https://github.com/chiemezie1/CanvasTransHub"
    },
    {
      id: 6,
      title: "StackShop Website",
      description: "An e-commerce website that integrates Affinidi login.",
      overview: "This web application enhances the shopping experience by integrating Affinidi Login. It utilizes user data (location, age) retrieved from Affinidi to provide a personalized shopping experience.",
      technologies: ["Tailwind CSS", "Affinidi", "Next.js"],
      image: "/images/stackshop.png?height=200&width=300",
      demoLink: "https://stack-shop-webite.vercel.app/",
      githubLink: "https://github.com/chiemezie1/StackShop_webite"
    },
    {
      id: 7,
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
