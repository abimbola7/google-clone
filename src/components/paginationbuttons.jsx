"use client"

import React from 'react'
import { usePathname, useSearchParams } from "next/navigation"
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Link from 'next/link';

export default function PaginationButtons() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const startIndex = +searchParams.get('start') || 1;
  console.log(startIndex)
  return (
    <div
    className="flex justify-between px-10 pb-4 text-blue-700 sm:justify-start sm:space-x-44 sm:px-0"
    >
      {
        startIndex >= 10 && (
          <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
          >
            <div
            className="flex flex-col items-center cursor-pointer hover:underline"
            >
              <BsChevronLeft 
              className="h-5"
              />
              <p>Previous</p>
            </div>
          </Link>
        )
      }
      {
        startIndex <= 90 && (
          <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
          >
            <div
            className="flex flex-col items-center cursor-pointer hover:underline"
            >
              <BsChevronRight 
              className="h-5"
              />
              <p>Next</p>
            </div>
          </Link>
        )
      }
    </div>
  )
}
