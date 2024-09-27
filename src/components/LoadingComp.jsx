import React from 'react'

const LoadingComp = () => {
  return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
              <h2 className="mt-4 text-xl font-semibold text-blue-600">Loading...</h2>
          </div>
          </div>
  )
}

export default LoadingComp;