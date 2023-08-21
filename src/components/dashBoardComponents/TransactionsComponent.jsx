import React from 'react'
import downArrow from "@/projectSvgs/downArrowIcon.svg"
import Image from 'next/image'
import { commaFormat } from '../../formatNumber'

const TransactionsComponent = ({item}) => {
    const id = item.id

    let style
    if(id === 5){
        style = "h-[190px]"
    }else{
        style = "h-[150px]"
    }
    let padding
    if(id === 2){
        padding = "pl-3"
    }else{
        padding = "pl-0"
    }

  return (
    <div className={style + ' dashboard-div'}>
        <div className='bg-libertyDashboardLightBlue w-full h-full py-4 px-3 flex flex-col justify-between'>
            <div className='flex justify-between items-center gap-x-4'>
                <p className='dashboard-div-header md:max-w-[60%]'>{item.title}</p>
                <div className='bg-libertyLightestBlue w-[60px] h-8 flex justify-center items-center rounded-md gap-x-1 cursor-pointer'>
                    <p className='text-[10px] font-extralight'>More</p>
                    <Image src={downArrow} width={10} height={10} alt='down arrow'/>
                </div>
            </div>
            <div className='grid grid-cols-2 py-3'>
                <div>
                    <div className='flex items-center'>
                        {item.icon1 && <div className='pr-1'><Image src={item.icon1} width={5} height={5} alt='green dot'/></div>}
                        <p className='capitalize text-xs font-nunito font-extralight py-[2px]'>{item.header1}</p>
                    </div>
                    <p className={padding +' text-sm md:text-[10px] lg:text-sm font-semibold tracking-wide'}>{!item.icon1 &&'₦'}{commaFormat(item.value1)}</p>
                </div>
                <div>
                    <div className='flex items-center'>
                        {item.icon2 && <div className='pr-1'><Image src={item.icon2} width={5} height={5} alt='green dot'/></div>}
                        <p className='capitalize text-xs font-nunito font-extralight py-[2px]'>{item.header2}</p>
                    </div>
                    <p className={padding +' text-sm md:text-[10px] lg:text-sm font-semibold tracking-wide'}>{!item.icon2 &&'₦'}{commaFormat(item.value2)}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TransactionsComponent