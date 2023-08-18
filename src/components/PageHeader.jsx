import React from 'react'
import Image from 'next/image'
import profilePhoto from "../projectSvgs/profilePhoto.png"
import notificationIcon from "../projectSvgs/notification-bing.svg"
import {GoDotFill, GoChevronDown} from "react-icons/go"

const PageHeader = ({pageHeader}) => {
  return (
    <div className='h-[100px] md:rounded-2xl bg-[#032282] text-white md:text-black md:bg-white px-8 pt-5 pb-2 flex items-center justify-between'>
        <h1 className='text-xl font-medium'>{pageHeader}</h1>
        
        <div className='flex justify-between gap-x-4 pr-5'>
            <div className='w-10 h-10 bg-[#ecf0ff] rounded-full flex justify-center items-center'>
                <div className='w-7 h-7 relative'>
                    <Image src={notificationIcon} alt='profile photo' width={60} height={60}/>
                    <p className='absolute top-0 right-0 text-sm text-[#F00]'><GoDotFill/></p>
                </div>
            </div>

            <div className='w-10 h-10'>
                <Image src={profilePhoto} alt='profile photo' width={60} height={60}/>
            </div>

            <div className='cursor-pointer'>
                <p className='text-base'>Dexter Olaniyi</p>
                <div className='flex'>
                    <p className='text-xs text-gray-500 pr-3'>dexterola@gmail.com</p> 
                    <span><GoChevronDown/></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageHeader