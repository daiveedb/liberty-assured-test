"use client"
import React, { useState } from 'react'
import Divider from './utilityComponents/Divider'
import { navLinks } from '@/testData'
import NavLink from './navigationComponents/NavLink'

const Sidebar = () => {

  const [selected, setSelected] = useState("Analytics Dashboard")

  const updateSelected = (str) => {
    setSelected(str)
  }

  return (
      <div id='sidebar' className='fixed z-10 -right-[270px] md:static top-[14vh] max-w-[270px] min-w-[270px] min-h-[86vh] md:min-h-screen md:py-4 px-7 bg-libertyBlue md:bg-libertyDarkBlue transition-all'>

          <div className='md:py-6'>
            <h1 className='text-4xl header font-bold'>Paybox</h1>
            <p className='text-xs header tracking-wide font-extralight'>by LibertyPay</p>
          </div>

          <Divider/>

          {
            navLinks.slice(0,2).map((item) => {
              return <NavLink key={item.title} selected={selected} updateSelected={updateSelected} item={item}/>
            })
          }

          <Divider/>

          {
            navLinks.slice(2,7).map((item) => {
              return <NavLink key={item.title} selected={selected} updateSelected={updateSelected} item={item}/>
            })
          }

          <Divider/>

          {
            navLinks.slice(7,10).map((item) => {
              return <NavLink key={item.title} selected={selected} updateSelected={updateSelected} item={item}/>
            })
          }
          
       </div>
  )
}

export default Sidebar