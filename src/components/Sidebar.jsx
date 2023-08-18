"use client"
import React, { useState } from 'react'
import Divider from './Divider'
import { navLinks } from '@/testData'
import NavLink from './NavLink'

const Sidebar = () => {

  const [selected, setSelected] = useState("Analytics Dashboard")

  const updateSelected = (str) => {
    setSelected(str)
  }

  return (
    <div>
        <div className='absolute -right-[300px] md:static top-0 max-w-[300px] min-w-[300px] min-h-screen py-4 px-7'>

          <div className='py-6'>
            <h1 className='text-4xl font-bold tracking-tight'>Paybox</h1>
            <p className='text-xs tracking-wide font-extralight'>by LibertyPay</p>
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
    </div>
  )
}

export default Sidebar