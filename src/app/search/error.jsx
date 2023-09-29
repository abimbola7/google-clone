"use client"
import React, { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error)
  }, [error])
  return (
    <div className="flex justify-center items-center flex-col pt-10">
      <h1
      className="mb-3 text-2xl"
      >{error.message}</h1>
      <button  className="text-blue-500" onClick={()=>reset()} >Try Again</button>
    </div>
  )
}
