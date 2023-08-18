import Dashboard from '@/components/Dashboard'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='w-full min-h-screen md:px-3 md:py-5'>
      <Dashboard/>
    </main>
  )
}
