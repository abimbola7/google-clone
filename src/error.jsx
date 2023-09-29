"use client"
import React, { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error)
  }, [error])
  return (
    <div className="text-center">
      <h1>Something went wrong</h1>
      <button  className="hover:text-blue-600" onClick={()=>reset()} >Try Again</button>
    </div>
  )
}
