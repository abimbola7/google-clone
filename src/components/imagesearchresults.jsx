"use client"

import Link from 'next/link'
import React from 'react'
import PaginationButtons from './paginationbuttons'

export default function ImageSearchResults({ results }) {
  console.log(results)
  return (
    <div
    className="pb-32"
    >
      <div
      className="grid grid-cols-1 px-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-4"
      >
      {
        results.items.map(result=>(
          <div
          key={result.title}
          className="group"
          >
            <div
            className="flex flex-col group"
            >
              <Link
              target='_blank'
              href={result.image.contextLink}
              >
                <img
                src={result.link}
                alt={result.title}
                className="object-contain w-full transition-shadow duration-300 h-60 group-hover:shadow-xl"
                />
              </Link>
              <Link
              className="mt-3"
              target='_blank'
              href={result.image.contextLink}
              >
                <h2
                className="text-md truncate group-hover:underline"
                >{ result.title }</h2>
              </Link>
              <Link
              target='_blank'
              href={result.image.contextLink}
              >
                <p
                className="text-gray-600 group-hover:underline text-sm"
                >{ result.displayLink }</p>
              </Link>
              
            </div>
          </div>
        ))
      }
      </div>
      <div
      className='ml-16'
      >
        <PaginationButtons/>
      </div>
    </div>
  )
}
