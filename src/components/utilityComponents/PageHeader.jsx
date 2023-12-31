import React, { useEffect, useState } from 'react'
import ProfileSnippet from '../navigationComponents/ProfileSnippet'
import MenuButton from '../navigationComponents/MenuButton'



const PageHeader = ({pageHeader}) => {

    const [isSidebarOn , setIsSidebarOn] = useState(false)
    const [userHasNotification] = useState(true)


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
    <div className='fixed top-0 left-0 right-0 w-screen z-30 md:w-full md:static h-[15vh] md:h-[90px] md:rounded-3xl bg-libertyBlue text-white md:text-black md:bg-white px-5 md:px-10 lg:px-8 pt-5 pb-2 flex items-center justify-between'>
        <h1 className='text-lg sm:text-xl font-medium'>{pageHeader}</h1>
             
        <ProfileSnippet userHasNotification = {userHasNotification}/>
        <MenuButton isSidebarOn={isSidebarOn} toggleSidebar={toggleSidebar}/>
    </div>
  )
}

export default PageHeader