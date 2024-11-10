import { motion } from 'framer-motion'
import { BlogPost } from '../types';

export const PostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <motion.div 
      className="bg-white shadow-md bg-opacity-5 rounded-lg p-6 backdrop-filter backdrop-blur-lg"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
      <p className="text-base text-gray-300 dark:text-gray-700 mb-4">{post.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-xs font-medium text-gray-200 dark:text-gray-900">{post.date}</span>
        <a 
          href={post.link}
          className="px-4 py-2 bg-primary text-blue-400 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors duration-300"
        >
          Read More
        </a>
      </div>
    </motion.div>
  )