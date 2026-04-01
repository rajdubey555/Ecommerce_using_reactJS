import React from 'react'

const ErrorState = ({message}) => {
  return (
    <div className="flex items-center justify-center h-[60vh]">
      <div className="bg-red-50 border border-red-200 p-6 rounded-xl shadow-md text-center max-w-sm">
        
        <h2 className="text-xl font-semibold text-red-600 mb-2">
          Something went wrong 😢
        </h2>

        <p className="text-gray-600 mb-4">
          {message}
        </p>

        <button
          onClick={() => window.location.reload()}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          Retry
        </button>

      </div>
    </div>
  )
}

export default ErrorState
