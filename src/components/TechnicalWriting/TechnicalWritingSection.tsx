import React, { useState } from 'react'
import { motion } from 'framer-motion'
import blogPosts from './TechnicalWritingFile'
import { PostCard } from './PostCard';
import { Pagination } from './Pagination';


export const TechnicalWritingSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 3
  const totalPages = Math.ceil(blogPosts.length / postsPerPage)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <section className="py-16 bg-gradient-to-br from-background to-background-light text-foreground">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center bg-clip-text bg-gradient-to-r from-primary to-secondary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Writing
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </section>
  )
}