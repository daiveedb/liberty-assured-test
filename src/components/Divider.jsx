import Image from 'next/image'
import React from 'react'
import divider from "../projectSvgs/dividerLine.png"

const Divider = () => {
  return (
    <div className='py-12 text-white w-full'>
        <Image width={100} height={1} src={divider} alt='divider' />
    </div>
  )
}

export default Divider