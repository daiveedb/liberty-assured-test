import React from 'react'
import Image from 'next/image'
import profilePhoto from "../projectSvgs/profilePhoto.png"
import notificationIcon from "../projectSvgs/notification-bing.svg"
import {GoDotFill, GoChevronDown} from "react-icons/go"

const ProfileSnippet = ({userHasNotification}) => {
  return (
    <div className='hidden md:flex justify-between items-center gap-x-4 pr-5'>
        <div className='w-7 h-7 lg:w-10 lg:h-10 bg-libertyLightPurple rounded-full flex justify-center items-center'>
            <div className='w-5 h-5 lg:w-7 lg:h-7 relative'> 
            <Image src={notificationIcon} alt='profile photo' width={60} height={60}/>
                {userHasNotification && <p className='absolute top-0 right-0 text-sm text-libertyRed'><GoDotFill/></p>}
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
  )
}

export default ProfileSnippet