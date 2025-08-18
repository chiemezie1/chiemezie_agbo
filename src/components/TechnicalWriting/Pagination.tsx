
'use client';

import { motion } from 'framer-motion';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => (
  <div className="flex justify-center mt-8 space-x-2">
    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
      <motion.button
        key={page}
        onClick={() => onPageChange(page)}
        className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
          currentPage === page
            ? 'bg-blue-600 text-white shadow-lg'
            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {page}
      </motion.button>
    ))}
  </div>
);