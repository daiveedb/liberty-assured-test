import Image from 'next/image'
import React from 'react'
import divider from "../projectSvgs/dividerLine.png"

const Divider = () => {
  return (
    <div className='py-6 text-white w-full items-center'>
        <Image width={100} height={1} src={divider} alt='divider' />
    </div>
  )
}

export default Divider