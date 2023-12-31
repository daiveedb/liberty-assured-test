import React from 'react'
import Lottie from "lottie-react"
import animationData from '../../projectSvgs/animation_llh25x2b.json'

const ComingSoon = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[40%] m-auto my-40 gap-6'>
      <h1 className='font-bold text-xl sm:text-2xl md:text-4xl text-libertyDarkBlue'>Coming Soon</h1>
      <Lottie 
        animationData={animationData} 
        loop={true} 
        autoPlay={true} 
        width={50} 
        height={50} />
    </div>
  )
}

export default ComingSoon