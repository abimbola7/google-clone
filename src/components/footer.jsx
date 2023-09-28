import React from 'react'
import CountryLookup from './countrylookup'

export default function Footer() {
  return (
    <footer
    className='absolute bottom-0 w-full text-sm text-gray-500 bg-[#f2f2f2]'
    >
      <div
      className="px-8 py-3 border-b"
      >
        <CountryLookup />
      </div>
      <div
      className='flex justify-between flex-col sm:flex-row items-center px-8 py-3 space-y-7 sm:space-y-0'
      >
        <ul
        className='flex space-x-6 items-center'
        >
          <li className="link">About</li>
          <li className="link">Advertising</li>
          <li className="link">Business</li>
          <li className="link">How search works</li>
        </ul>
        <ul
        className='flex space-x-6 items-center'
        >
          <li className="link">Privacy</li>
          <li className="link">Terms</li>
          <li className="link">Settings</li>
        </ul>
      </div>
    </footer>
  )
}
