import React from 'react'
import Image from 'next/image'

const NavLink = ({item}) => {
  return (
    <div className='flex w-full h-[500px] text-white'>
        <div>
            <Image width={40} height={40} fill src={item.icon}/>
        </div>
        <p>{item.title}</p>
    </div>
  )
}

export default NavLink