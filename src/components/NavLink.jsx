import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {AiOutlineRight} from "react-icons/ai"
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavLink = ({item, updateSelected, selected}) => {

    const handleSelected = (str) => {
        updateSelected(str)
    }
    const [styles, setStyles] = useState('')

    const handleLinkStyles = () => {
        if(item.title === selected ){
            setStyles("bg-[#192749ff]")

        }else{
            setStyles("bg-transparent")
        }
    }
    useEffect(() => {
        handleLinkStyles()
    })



  return (
    <Link href={item.link}>
        <div onClick={() => handleSelected(item.title)} className={styles+' flex w-full justify-between items-center rounded-md'}>
            <div className='flex w-full items-center py-3 pl-3 text-white gap-x-2 rounded-lg'>
                <div>
                    <Image width={20} height={20} alt='icon' src={item.icon}/>
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
    </Link>
  )
}

export default NavLink