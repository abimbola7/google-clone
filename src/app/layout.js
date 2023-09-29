import Footer from '@/components/footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Google Clone',
  description: 'This is a google clone website',  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " min-h-screen relative"}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
