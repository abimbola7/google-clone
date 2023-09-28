import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from './searchbox'
import { RiSettings3Line } from "react-icons/ri"
import { TbGridDots } from 'react-icons/tb'
import SearchHeaderOptions from './searchheaderoptions'

export default function SearchHeader() {
  return (
    <header
    className="sticky top-0 background-white "
    >
      <div
      className='flex w-full p-6 items-center justify-between'
      >
        <Link
        href={'/'}
        >
          <Image 
          src={`https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png`}
          alt='loading...'
          width={100}
          height={50}
          />
        </Link>
        <div
        className='flex-1'
        >
          <SearchBox />
        </div>
        <div
        className='hidden lg:inline-flex space-x-2'
        >
          <RiSettings3Line className='header-icon' />
          <TbGridDots className='header-icon'/>
        </div>
        <button
        className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all ml-2"
        >
          Sign in
        </button>
      </div>
      <SearchHeaderOptions />   
    </header>
  )
}
