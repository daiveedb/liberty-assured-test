"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {AiOutlineRight} from "react-icons/ai"
import Link from 'next/link'
import { usePathname } from "next/navigation"


const NavLink = ({item, updateSelected, selected}) => {

   
    const pathname = usePathname()

    const handleClick = (str) => {
        updateSelected(str)
        const sidebar = document.getElementById("sidebar")
        sidebar.style.right = '-300px'
    }
    const [styles, setStyles] = useState('')

    const handleLinkStyles = () => {
        if(!item.dropdown && item.link === pathname ){
            setStyles("bg-libertyLighterBlue md:bg-libertyLightBlue")

        }else{
            setStyles("bg-transparent")
        }
    }


    useEffect(() => {
        handleLinkStyles()
    },[pathname])



  return (
    <Link href={item.link}>
            <div onClick={() => handleClick(item.title)} className={styles+' flex w-full justify-between items-center rounded-md'}>
                <div className='flex w-full items-center py-3 pl-3 text-white gap-x-2 rounded-lg'>
                    <div>
                        <Image width={20} height={20} alt='icon' src={item.icon}/>
                    </div>
                    <p className='font-nunito'>{item.title}</p>
                </div>
                <div>
                    {item.dropdown?
                    <p id='dropdown-arrow' className='text-lg'><AiOutlineRight/></p>
                    :
                    <p></p>
                    }
                </div>
            </div>
    </Link>
  )
}

export default NavLink