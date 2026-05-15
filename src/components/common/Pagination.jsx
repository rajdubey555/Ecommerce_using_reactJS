import React from 'react'

const Pagination = ({ currentPage, onPageChange, hasNextPage }) => {
  return (
    <div className='flex justify-center items-center gap-3 py-4'>

      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90"
        style={{ background: 'var(--primary)' }}
      >
        ← Prev
      </button>

      <span className="px-3 py-1.5 rounded-lg text-sm font-medium border"
            style={{ color: 'var(--text)', background: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
        Page {currentPage}
      </span>

      <button
        disabled={!hasNextPage}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90"
        style={{ background: 'var(--primary)' }}
      >
        Next →
      </button>

    </div>
  )
}

export default Pagination
