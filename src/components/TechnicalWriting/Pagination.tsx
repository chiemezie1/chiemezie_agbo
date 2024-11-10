
export const Pagination: React.FC<{ currentPage: number; totalPages: number; onPageChange: (page: number) => void }> = ({ currentPage, totalPages, onPageChange }) => (
    <div className="flex justify-center mt-4 space-x-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-full ${
            currentPage === page
              ? 'bg-primary text-white'
              : 'bg-white bg-opacity-10 text-gray-900 hover:bg-opacity-20'
          } transition-colors duration-300`}
        >
          {page}
        </button>
      ))}
    </div>
  )