'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPen } from 'react-icons/fa';
import blogPosts from './TechnicalWritingFile';
import { PostCard } from './PostCard';
import { Pagination } from './Pagination';
import { ANIMATION_VARIANTS } from '@/lib/constants';

export const TechnicalWritingSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isChangingPage, setIsChangingPage] = useState(false);
  const postsPerPage = 3;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page: number) => {
    setIsChangingPage(true);
    setCurrentPage(page);

    // Brief loading state for visual feedback
    setTimeout(() => {
      setIsChangingPage(false);
    }, 300);

    // Scroll to the writing section when page changes for better UX
    const writingSection = document.getElementById('writing');
    if (writingSection) {
      writingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="writing" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.staggerChildren}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="text-center space-y-4"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaPen className="text-blue-600 dark:text-blue-400 text-3xl" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Technical Writing
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Sharing knowledge and insights through technical articles and tutorials
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Showing {currentPosts.length} of {blogPosts.length} articles (Page {currentPage} of {totalPages})
            </p>
          </motion.div>

          {/* Posts Grid */}
          <motion.div
            key={currentPage} // Force re-render when page changes
            variants={ANIMATION_VARIANTS.staggerChildren}
            className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 transition-opacity duration-300 ${
              isChangingPage ? 'opacity-50' : 'opacity-100'
            }`}
            initial="initial"
            animate="animate"
          >
            {currentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div variants={ANIMATION_VARIANTS.fadeInUp}>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};