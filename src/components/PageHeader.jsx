import React, { useState } from 'react'
import Image from 'next/image'
import profilePhoto from "../projectSvgs/profilePhoto.png"
import notificationIcon from "../projectSvgs/notification-bing.svg"
import {GoDotFill, GoChevronDown} from "react-icons/go"
import {AiOutlineClose} from "react-icons/ai"



const PageHeader = ({pageHeader}) => {

    const [isSidebarOn , setIsSidebarOn] = useState(false)

    const toggleSidebar = () => {
        const sidebar = document.getElementById("sidebar")
        if(isSidebarOn){
            sidebar.style.right = '-300px'
            setIsSidebarOn(false)
        }else{
            sidebar.style.right = 0
            setIsSidebarOn(true)
        }
    }


  return (
    <div className='h-[100px] md:rounded-3xl bg-libertyBlue text-white md:text-black md:bg-white px-4 md:px-8 pt-5 pb-2 flex items-center justify-between'>
        <h1 className='text-lg sm:text-xl font-medium'>{pageHeader}</h1>
             
        <div className='hidden md:flex justify-between items-center gap-x-4 pr-5'>
            <div className='w-7 h-7 lg:w-10 lg:h-10 bg-libertyLightPurple rounded-full flex justify-center items-center'>
                <div className='w-5 h-5 lg:w-7 lg:h-7 relative'>                        <Image src={notificationIcon} alt='profile photo' width={60} height={60}/>
                    <p className='absolute top-0 right-0 text-sm text-libertyRed'><GoDotFill/></p>
                </div>
            </div>

            <div className='w-7 h-7 lg:w-10 lg:h-10'>
                <Image src={profilePhoto} alt='profile photo' width={60} height={60}/>
            </div>

            <div className='cursor-pointer'>
                <p className='text-sm lg:text-base'>Dexter Olaniyi</p>
                <div className='flex'>
                    <p className='text-xs text-gray-500 pr-3'>dexterola@gmail.com</p> 
                    <span><GoChevronDown/></span>
                </div>
            </div>
        </div>
        
        <div className='block md:hidden cursor-pointer scale-90 sm:scale-100'>
            <div onClick={() => toggleSidebar()} className='w-[87px] h-10 bg-libertyLighterBlue p-2 rounded-md flex justify-center items-center font-montserrat'>
                {isSidebarOn?
                <p className='text-xl'><AiOutlineClose/></p>:
                <p>Menu</p>
                
                }
             
            </div>
        </div>
    </div>
  )
}

export default PageHeader