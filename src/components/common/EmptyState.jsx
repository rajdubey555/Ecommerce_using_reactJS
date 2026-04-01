import React from 'react'

const EmptyState = ({title = "No Data Found", subtitle = "Try adjusting your filter"}) => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center">
      
      <img
        src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
        alt="empty"
        className="w-32 mb-4 opacity-80"
      />

      <h2 className="text-xl font-semibold text-gray-700">
        {title}
      </h2>

      <p className="text-gray-500 mt-2">
        {subtitle}
      </p>

    </div>
  )
}

export default EmptyState
