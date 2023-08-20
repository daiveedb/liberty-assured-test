import Image from 'next/image'
import React from 'react'
import downArrow from "@/projectSvgs/downArrowIcon.svg"
import { commaFormat } from '../../formatNumber'

const TransferComponent = ({item}) => {

    const gridData = item.values

    const keyValuePairs = Object.entries(gridData)


  return (
    <div className='dashboard-div h-[190px]'>
        <div className='bg-libertyDashboardLightBlue w-full h-full py-4 px-3'>
            <div className='flex justify-between items-center'>
                <p className='dashboard-div-header'>{item.title}</p>
                <div className='bg-libertyLightestBlue w-[70px] h-8 flex justify-center items-center rounded-md gap-x-2 cursor-pointer'>
                    <p className='text-xs font-extralight'>More</p>
                    <Image src={downArrow} width={10} height={10} alt='down arrow'/>
                </div>
            </div>
            <div className='grid grid-cols-2 py-4 gap-y-3 w-full'>
                {keyValuePairs.map(([key,value],index) => {
                   return(
                    <div key={index}>
                        <p className='capitalize text-xs font-nunito font-extralight py-[2px]'>{key.replace("_"," ")}</p>
                        <p className='text-sm md:text-[10px] lg:text-sm font-semibold tracking-wide'>₦{commaFormat(value)}</p>
                    </div>
                )})}
            </div>
        </div>
    </div>
  )
}

export default TransferComponent