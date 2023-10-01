"use client"

import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx"
import { BsFillMicFill } from "react-icons/bs"
import { AiOutlineSearch } from 'react-icons/ai'
import { useSearchParams } from 'next/navigation'
import { useRouter, useParams, usePathname } from 'next/navigation'


export default function SearchBox() {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname()
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const [term, setTerm] = useState(searchTerm || '');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    console.log(pathname);
    // router.push(`/search/${pathname === "/search/image" ? 'image' :  'web'}?searchTerm=${term}`);  
    router.push(`${pathname === "/search/image" ? `/search/image?searchTerm=${term}`: `/search/web?searchTerm=${term}`}`)

  }
  return (
    <form 
    onSubmit={handleSubmit}
    className='flex items-center border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl'>
      <input
      onChange={(e)=>setTerm(e.target.value)}
      value={term}
      type='text' className='w-full focus:outline-none' 
      placeholder='Search...' 
      />
      <RxCross2 
      onClick={()=>setTerm('')}
      className='text-2xl text-gray-500 hover:text-gray-700 cursor-pointer sm:mr-2'
      />
      <BsFillMicFill 
      className='hidden sm:inline-flex text-4xl text-blue-500 pl-4 cursor-pointer border-l-2 border-gray-300 mr-3'
      />
      <button
      type="submit"
      >
        <AiOutlineSearch 
        className='text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer'
        />
      </button>
    </form>
  )
}
