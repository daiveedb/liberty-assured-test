import React from 'react'
import Image from 'next/image'
import rectangleDown from "@/projectSvgs/rectangleDown.png"
import rectangleTopLeft from "@/projectSvgs/rectangleTopLeft.png"
import rectangleTopRight2 from "@/projectSvgs/rectangleTopRight2.png"
import rectangletopRight1 from "@/projectSvgs/rectangletopRight1.png"

const WalletSvgs = () => {
  return (
    <div>
          <div className='absolute bottom-0 right-0'>
            <Image src={rectangleDown} width={100} height={100} alt='rectandle'/>
          </div> 
          <div className='absolute top-0 left-16'>
            <Image src={rectangleTopLeft} width={100} height={100} alt='rectandle'/>
          </div> 
          <div className='absolute -top-10 right-5'>
            <Image src={rectangleTopRight2} width={100} height={100} alt='rectandle'/>
          </div> 
          <div className='absolute top-0 right-5'>
            <Image src={rectangletopRight1} width={100} height={100} alt='rectandle'/>
          </div> 
    </div>

  )
}

export default WalletSvgs