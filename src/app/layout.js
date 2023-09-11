"use client"
import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      {/* <!-- Google Tag Manager --> */}
        <script>
          
          {(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5LL5QRGT')};

      </script>
{/* <!-- End Google Tag Manager --> */}
      {/* <!-- Google tag (gtag.js) --> */}
      {/* <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-G9SEJCN13K`}
      />

      <Script id='google-analytics' strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-G9SEJCN13K', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script> */}
        <title>Liberty Assured Test</title>
      </head>
        <body className={inter.className}>
        {/* Google Tag Manager */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5LL5QRGT"
            height="0" width="0" style="display:none;visibility:hidden">
          </iframe>
        </noscript>
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
