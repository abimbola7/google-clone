"use client"
import React, { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import { BsFillMicFill } from "react-icons/bs"
import { useRouter } from "next/navigation"

export default function HomeSearch() {
  const [randomSearchLoading, setRandomSearchLoading] = useState(false)
  const router = useRouter();
  const [search, setSearch] = useState("")
  const handleSubmit  = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    router.push(`search/web?searchTerm=${search}`)

  };
  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const response = await fetch(`https://random-word-api.herokuapp.com/word`)
    .then((res)=>res.json())
    .then(data=>data[0]);
    if (!response) return;
    router.push(`search/web?searchTerm=${response}`)
    setRandomSearchLoading(false);
  };

  
  return (
    <>
      <form
      onSubmit={handleSubmit}
      className="flex border w-full max-w-[90%] mt-5 border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow items-center focus-within:
      shadow-md sm:max-w-xl md:max-w-2xl">
        <AiOutlineSearch className='mr-3 text-xl text-gray-200'/>
        <input
        type='text'
        className='flex-grow outline-none focus:outline-none'
        onChange={(e)=>setSearch(e.target.value)}
        value={search}
        />
        <BsFillMicFill className='text-lg'/>
      </form>
      
      <div
      className="flex flex-col justify-center mt-8 space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4"
      >
        <button
        className="btn"
        onClick={handleSubmit}
        >
          Google Search
        </button>
        <button
        onClick={randomSearch}
        className="flex items-center justify-center btn"
        >
          {
            randomSearchLoading ? (
              <img 
              disabled={randomSearchLoading}
              src="/spinner.svg"
              alt="loading..."
              className="h-6 text-center"
              />
            ) : (
              "I'm Feeling Lucky"
            )
          }
        </button>
      </div>
    </>
  )
}
