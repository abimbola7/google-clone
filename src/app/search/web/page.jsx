import WebSearchResults from '@/components/websearchresults'
import Link from 'next/link'
import React from 'react'

export default async function WebSearchPage({ searchParams }) {
  console.log(searchParams)
   await new Promise(resolve=>setTimeout(resolve, 10000))
   const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${searchParams.start || 1}`)
   if (!res.ok) {
    throw new Error("Can't fetch data")
   }
   const response = await res.json()
   const results = response.items;
  return (
    <div>
      {
        !results  && 
        <div className="flex flex-col items-center justify-center pt-10 space-y-3 text-center">
          <h1
          className="text-2xl"
          >No results found</h1>
          <p>Try searching for something else or go to homepage
          <Link href="/" className="ml-2 text-blue-500 active:text-blue-700">HOME</Link>
          </p>
        </div>
      }
      {
        results && <WebSearchResults results={response}/>
      }
    </div>
  )
}
