import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@700,300&display=swap" rel="stylesheet"></link>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <title>Liberty Assured Test</title>
      </head>
        <body className={inter.className}>
          <div className='flex justify-between items-center bg-libertyDarkBlue w-[100vw] overflow-x-hidden'>
            <Sidebar/> 
            <main className='w-full min-h-screen max-h-max md:px-2 md:py-5'>
              {children}
            </main>
          </div>
        </body>
    </html>
  )
}
