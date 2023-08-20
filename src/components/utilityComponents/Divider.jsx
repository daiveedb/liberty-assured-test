import Image from 'next/image'
import React from 'react'
import divider1 from "../../projectSvgs/dividerLine.svg"
import divider2 from "@/projectSvgs/divider2.svg"


const Divider = ({index}) => {

  let style 
  if(index==1){
    style="py-4"
  }else{
    style="py-2"
  }

  return (
    <div className={style + ' text-white w-full items-center'}>
      {
        index == 1?
        <Image width={250} height={10} src={divider1} alt='divider' />
        :
        <Image width={230} height={10} src={divider2} alt='divider' />      
      }
    </div>
  )
}

export default Divider