import React from 'react'
import Divider from './Divider'
import { navLinks } from '@/testData'
import NavLink from './NavLink'

const Sidebar = () => {
  return (
    <div>
        <div className='absolute -right-[250px] md:static top-0 max-w-[200px] min-w-[250px] min-h-screen py-4 px-7'>

          <div className='py-6'>
            <h1 className='text-4xl font-bold tracking-tight'>Paybox</h1>
            <p className='text-xs tracking-wide font-extralight'>by LibertyPay</p>
          </div>

          <Divider/>

          <div className='w-full h-max'>
          {
            navLinks.slice(0,2).map((item) => {
              <NavLink item={item}/>
            })
          }
          </div>
        </div>
    </div>
  )
}

export default Sidebar