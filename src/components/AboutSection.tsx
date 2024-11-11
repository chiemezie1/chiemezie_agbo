'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaReact, FaNodeJs, FaDocker, FaEthereum, FaPython } from 'react-icons/fa'
import { SiNextdotjs, SiJavascript, SiKubernetes, SiAmazon, SiSolidity, SiDjango, SiFlask, SiWeb3Dotjs, SiNginx, SiC, SiSolana } from 'react-icons/si'
import { VscTerminalBash } from 'react-icons/vsc'
import { IconType } from 'react-icons'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

interface SkillIconProps {
  icon: IconType;
  name: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ icon: Icon, name }) => (
  <motion.div
    className="flex flex-col items-center justify-center p-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
    variants={fadeInUp}
    transition={{ duration: 0.6 }}
  >
    <Icon className="text-3xl mb-2 text-primary" aria-hidden="true" />
    <span className="text-sm font-medium">{name}</span>
  </motion.div>
)

interface SkillBoxProps {
  title: string;
  children: React.ReactNode;
}

const SkillBox: React.FC<SkillBoxProps> = ({ title, children }) => (
  <motion.div
    variants={fadeInUp}
    transition={{ duration: 0.6 }}
    className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-primary border-opacity-20"
  >
    <h3 className="text-2xl font-semibold mb-6 text-primary">{title}</h3>
    <motion.div className="grid grid-cols-3 gap-4" variants={staggerChildren}>
      {children}
    </motion.div>
  </motion.div>
)

export default function AboutMe() {
  return (
    <section className="py-8 bg-gradient-to-br from-background to-background-light overflow-hidden">
      <motion.div
        className="container mx-auto px-4"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.h2
          className="text-4xl dark:text-gray-800 text-white font-bold mt-8 mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="mb-16 p-6 bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl mb-6 leading-relaxed">
            I'm a Full-Stack Software Engineer who enjoys developing
            <span className="text-red-600"> secure</span> and
            <span className="text-blue-600"> scalable</span> solutions in Web2 and Web3 technologies.
            My path in software engineering has taken me from traditional development to the thrilling world of decentralized applications.
            They call it <strong>BLOCKCHAIN</strong>.
          </p>

          <p className="text-lg leading-relaxed">
            Starting my career in Web2 development, I honed my skills in creating robust,
            user-centric applications. As the tech landscape evolved, so did my interests,
            leading me to dive into the realm of blockchain and decentralized technologies.
            This transition has allowed me to bridge the gap between conventional and cutting-edge
            development, bringing a unique perspective to every project I undertake.
          </p>
        </motion.div>
        <motion.h1
          className="text-4xl dark:text-gray-800 text-white font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillBox title="Web Development">
            <SkillIcon icon={FaHtml5} name="HTML/CSS" />
            <SkillIcon icon={FaReact} name="React" />
            <SkillIcon icon={SiNextdotjs} name="Next.js" />
            <SkillIcon icon={SiJavascript} name="JavaScript" />
            <SkillIcon icon={FaNodeJs} name="Node.js" />
            <SkillIcon icon={FaPython} name="Python" />
            <SkillIcon icon={SiDjango} name="Django" />
            <SkillIcon icon={SiFlask} name="Flask" />
          </SkillBox>

          <SkillBox title="DevOps & Infrastructure">
            <SkillIcon icon={FaDocker} name="Docker" />
            <SkillIcon icon={SiKubernetes} name="Kubernetes" />
            <SkillIcon icon={VscTerminalBash} name="CI/CD" />
            <SkillIcon icon={SiAmazon} name="AWS" />
            <SkillIcon icon={SiNginx} name="Nginx" />
            <SkillIcon icon={SiC} name="C Program" />
          </SkillBox>

          <SkillBox title="Web3 Technologies">
            <SkillIcon icon={SiSolidity} name="Solidity" />
            <SkillIcon icon={FaEthereum} name="Ethereum" />
            <SkillIcon icon={SiWeb3Dotjs} name="Web3.js" />
            <SkillIcon icon={FaEthereum} name="Ethers.js" />
            <SkillIcon icon={SiSolana} name="Solana" />
          </SkillBox>
        </div>
      </motion.div>
    </section>
  )
}
