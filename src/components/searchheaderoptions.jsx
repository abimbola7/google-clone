"use client"
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineCamera } from "react-icons/ai"
import { usePathname } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { useRouter } from "next/navigation"

export default function SearchHeaderOptions() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const router = useRouter()
  const pathName = usePathname();
  const selectTab = (tab) => {
    router.push(`/search/${tab === "Images" ? "image" : 'web'}?searchTerm=${searchTerm}`)
  }
  return (
    <div
    className="flex space-x-2 select-none border-b w-full lg:justify-start justify-center lg:px-52 text-gray-700 text-sm"
    >
      <div
      onClick={()=>selectTab("All")}
      className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathName === "/search/web" && '!border-blue-600 !text-blue-600'}`}
      >
        <AiOutlineSearch 
        className="text-md"
        />
        <p>All</p>
      </div>

      <div
      onClick={()=>selectTab("Images")}
      className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathName === "/search/image" && '!border-blue-600 !text-blue-600'}`}
      >
        <AiOutlineCamera 
        className="text-md"
        />
        <p>Images</p>
      </div>
    </div>
  )
}
