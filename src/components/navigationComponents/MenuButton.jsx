import React from 'react'
import {AiOutlineClose} from "react-icons/ai"

const MenuButton = ({isSidebarOn, toggleSidebar}) => {

    const handleToggleSidebar = () => {
      toggleSidebar()
    }



  return (
    <div className='block md:hidden cursor-pointer scale-90 sm:scale-100'>
        <div id='mnu-button' onClick={() => handleToggleSidebar()} className='w-[87px] h-10 bg-libertyLighterBlue p-2 rounded-md flex justify-center items-center font-montserrat'>
            {isSidebarOn?
            <p className='text-xl'><AiOutlineClose/></p>:
            <p>Menu</p>
            }
        </div>
    </div>
  )
}

export default MenuButton