import Link from 'next/link'
import React from 'react'
import { TbGridDots } from "react-icons/tb"

export default function HomeHeader() {
  return (
    <header
    className="flex justify-end px-2 py-4 text-sm"
    >
      <div
      className='flex items-center space-x-6'
      >
        <Link
        className='hover:underline'
        href={'https://mail.google.com'}
        >
          Gmail
        </Link>
        
        <Link
        className='hover:underline'
        href={'https://image.google.com'}
        >
          Images
        </Link>
        <TbGridDots
        className='p-2 text-4xl transition-colors duration-300 bg-transparent rounded-full cursor-pointer hover:bg-gray-200'
        />
        <button
        className="px-6 py-2 font-medium text-white transition-shadow duration-200 bg-blue-500 rounded-md hover:brightness-105 hover:shadow-md"
        >Sign in</button>
      </div>
    </header>
  )
}
