import Image from 'next/image'
import { motion } from 'framer-motion'
import HeroSection from './HeroSection'
import SocialLinks from './SocialLinks'
import DownloadCV from './DownloadCVButton';

export default function MainContent({ controls }) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-light-bg-color text-light-text-color">
      <HeroSection controls={controls} />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="relative"
      >
        <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="/images/Agbo_chiemezie.png"
            alt="Chiemezie Agbo"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            className="rounded-lg"
          />
        </div>
        <motion.div
          className="absolute -bottom-6 -left-6 bg-gray-800 p-4 rounded-lg shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <SocialLinks />
        </motion.div>
      </motion.div>
      <div className='flex justify-start items-start'>
        <DownloadCV />
      </div>
    </main>
  )
}
