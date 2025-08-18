'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCalendar } from 'react-icons/fa';
import { ANIMATION_VARIANTS } from '@/lib/constants';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  link: string;
}

export const PostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 group hover:shadow-xl transition-shadow duration-300"
    variants={ANIMATION_VARIANTS.fadeInUp}
    whileHover={{ y: -5 }}
    layout
  >
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        {post.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {post.description}
      </p>

      <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <FaCalendar className="w-3 h-3" />
          <span>{post.date}</span>
        </div>

        <motion.a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Read More
          <FaExternalLinkAlt className="w-3 h-3" />
        </motion.a>
      </div>
    </div>
  </motion.div>
);