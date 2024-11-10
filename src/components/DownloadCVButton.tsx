import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const DownloadCV = () => {
  return (
    <div className="flex justify-center">
      <motion.a
        href="/Chiemezie_Agbo_CV.pdf"
        download="Chiemezie_Agbo_CV.pdf"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-gray-950 text-white flex items-center gap-2 py-4 px-20 border-2 border-white dark:border-black rounded-lg shadow-lg hover:bg-gray-800 transition duration-300"
      >
        <FiDownload size={20} />
        <span>Download CV</span>
      </motion.a>
    </div>
  );
};

export default DownloadCV;
