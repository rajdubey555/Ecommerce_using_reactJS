import React from 'react'

const Pagination = ({currentPage, onPageChange, hasNextPage}) => {
  return (
     <div className='flex justify-center items-center mt-5 mb-3'>
        <button
        className="px-4  mx-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm transition disabled:opacity-40"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage}
        </span>

        <button
        className="px-4 mx-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm transition disabled:opacity-40"
          disabled={!hasNextPage}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
  )
}

export default Pagination
