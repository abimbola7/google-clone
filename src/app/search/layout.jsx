import SearchHeader from '@/components/searchheader'
import { Inter } from 'next/font/google'
import "../globals.css"


const inter = Inter({ subsets: ['latin'] })


export default function SearchLayout({ children }) {
  return (
      <div className={inter.className}>
        <SearchHeader />
        {children}
      </div>
  )
}
