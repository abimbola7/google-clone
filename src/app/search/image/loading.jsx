import React from "react"

export default function Loading() {
  return (
    <div className="grid max-w-6xl w-full grid-cols-1 pt-10 mx-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:pl-52 relative z-[-1000]">
      <div className="animate-pulse">
        <div className="bg-gray-200 rounded-md mb-2.5 h-48 w-48"/>
        <div className="w-48 h-2 mb-2.5 bg-gray-200 rounded-md"/>
        <div className="w-44 h-2 mb-2.5 bg-gray-200 rounded-md"/>
      </div>
      <div className="animate-pulse">
        <div className="bg-gray-200 rounded-md mb-2.5 h-48 w-48"/>
        <div className="w-48 h-2 mb-2.5 bg-gray-200 rounded-md"/>
        <div className="w-44 h-2 mb-2.5 bg-gray-200 rounded-md"/>
      </div>
      <div className="animate-pulse">
        <div className="bg-gray-200 rounded-md mb-2.5 h-48 w-48"/>
        <div className="w-48 h-2 mb-2.5 bg-gray-200 rounded-md"/>
        <div className="w-44 h-2 mb-2.5 bg-gray-200 rounded-md"/>
      </div>
      <div className="animate-pulse">
        <div className="bg-gray-200 rounded-md mb-2.5 h-48 w-48"/>
        <div className="w-48 h-2 mb-2.5 bg-gray-200 rounded-md"/>
        <div className="w-44 h-2 mb-2.5 bg-gray-200 rounded-md"/>
      </div>
    </div>
  )
}