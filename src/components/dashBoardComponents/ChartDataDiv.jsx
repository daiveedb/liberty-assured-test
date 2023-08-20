import React from 'react'
import Image from 'next/image'
import { commaFormat } from '@/formatNumber'

const ChartDataDiv = ({image,title,value}) => {
  return (
    <div>
        <div className='flex items-center'>
            <Image src={image} width={5} height={5} alt={title}/>
            <p className='pl-[6px] text-[10px] capitalize font-nunito font-thin py-[2px] text-libertyTextGray'>{title}</p>
        </div>
        <p className='font-sora tracking-wide text-sm text-libertyTextBlack font-semibold'>₦{commaFormat(value)}</p>
    </div>
  )
}

export default ChartDataDiv