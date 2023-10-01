"use client"
import Parser from "html-react-parser"
import Link from 'next/link'
import React from 'react'
import PaginationButtons from "./paginationbuttons"

export default function WebSearchResults({ results }) {
  return (
    <div
    className="w-full mx-auto px-3 pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52 text-sm"
    >
      <p
      className="mt-3 mb-5 text-sm text-gray-500"
      >
         About { results.searchInformation?.formattedTotalResults } results
         ({ results.searchInformation?.formattedSearchTime } seconds )
      </p>
      {
        results.items.map(result=>(
          <div
          className="max-w-xl mb-8"
          key={result.cacheId}
          >
            <div
            className="flex flex-col group"
            >
              <Link
              className="text-sm truncate whitespace-normal w-fit"
              target="_blank"
              href={result.link}
              >
                {result.formattedUrl}
              </Link>
              <Link
              className="text-xl font-medium text-blue-800 whitespace-nowrap group-hover:underline decoration-blue-800 line-clamp-1 w-fit"
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
        <PaginationButtons />
    </div>
  )
}
