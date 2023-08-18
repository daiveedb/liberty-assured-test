import React from 'react'
import Image from 'next/image'
import {AiOutlineRight} from "react-icons/ai"

const NavLink = ({item}) => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex w-full py-2 text-white gap-x-2'>
            <div>
                <Image width={20} height={20} src={item.icon}/>
            </div>
            <p className='tracking-tight'>{item.title}</p>
        </div>
        <div>
            {item.dropdown?
            <p className='text-lg'><AiOutlineRight/></p>
            :
            <p></p>
            }
        </div>
    </div>
  )
}

export default NavLink