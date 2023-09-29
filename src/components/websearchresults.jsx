"use client"
import Parser from "html-react-parser"
import Link from 'next/link'
import React from 'react'

export default function WebSearchResults({ results }) {
  console.log(results)
  console.log("this works?")
  return (
    <div
    className="w-full mx-auto max-w- px-3 pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52 text-sm"
    >
      <p
      className="text-gray-500 text-sm mb-5 mt-3"
      >
         About { results.searchInformation?.formattedTotalResults } results
         ({ results.searchInformation?.formattedSearchTime } seconds )
      </p>
      {
        results.items.map(result=>(
          <div
          className="mb-8 max-w-xl"
          key={result.cacheId}
          >
            <div
            className="group flex flex-col"
            >
              <Link
              className="text-sm truncate w-fit"
              target="_blank"
              href={result.link}
              >
                {result.formattedUrl}
              </Link>
              <Link
              className="group-hover:underline decoration-blue-800 text-xl font-medium line-clamp-1 text-blue-800 w-fit "
              href={result.link}
              target="_blank"
              >
                {result.title}
              </Link>
            </div>
            <p
            className=""
            >{Parser(result.htmlSnippet)}</p>
          </div>
        ))
      }   
    </div>
  )
}
