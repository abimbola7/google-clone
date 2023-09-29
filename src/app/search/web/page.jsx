import Link from 'next/link'
import React from 'react'

export default async function WebSearchPage({ searchParams }) {
   const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`)
   if (!res.ok) {
    throw new Error("Can't fetch data")
   }
   const response = await res.json()
   const results = response.items;
  return (
    <div>
      {
        !results  && 
        <div className="text-center pt-10 flex justify-center items-center flex-col space-y-3">
          <h1
          className="text-2xl"
          >No results found</h1>
          <p>Try searching for something else or go to homepage
          <Link href="/" className="ml-2 text-blue-500 active:text-blue-700">HOME</Link>
          </p>
        </div>
      }
      {
        results && results.map((result) => (
          <h1 key={result.cacheId}>{result.title}</h1>
        ))
      }
    </div>
  )
}
