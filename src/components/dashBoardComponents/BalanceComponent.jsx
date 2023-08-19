import React from 'react'
import { commaFormat } from '../formatNumber'
import Image from 'next/image'
import rightArrow from "@/projectSvgs/rightArrowsIcon.png"

const BalanceComponent = ({item}) => {
  return (
    <div className='bg-white w-full h-[160px] rounded-lg text-libertyBlue py-3 px-3 relative font-sora'>
        <div className='bg-libertyDashboardLightBlue w-full rounded-lg px-2 py-4 flex flex-col justify-between gap-7'>
            <p className='font-sora text-sm text-libertyDTextBlue font-light capitalize'>{item.title}</p>
            <p className='text-xl font-semibold'>{item.amount?"₦":""}{commaFormat(item.amount)}</p>
        </div>
        <div className='flex items-center gap-1 py-[11px] px-3'>
            <p className='text-xs font-nunito font-light'>View Details</p>
            <div className='translate-y-[1px]'>
                <Image src={rightArrow} width={19} height={19} alt='right arrow'/>
            </div>
        </div>
    </div>
  )
}

export default BalanceComponent