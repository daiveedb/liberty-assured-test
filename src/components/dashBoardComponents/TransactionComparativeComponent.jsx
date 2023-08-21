import React from 'react'
import { chartData } from '@/testData'
import ChartDataDiv from './ChartDataDiv'
import Divider from '../utilityComponents/Divider'
import DoughnutChart from './DoughnutChart'

const TransactionComparativeComponent = () => {
  return (
    <div className='dashboard-div md:col-span-2 h-max md:h-[190px]'>
        <div className='flex flex-col md:flex-row justify-between md:items-center text-black p-2'>
            <div className='flex-1'>
                <p className='font-nunito'>Transaction Comparative</p>
                <div className='py-4'>
                    <ChartDataDiv title={chartData.header1} value={chartData.value1} image={chartData.icon1}/>
                    <Divider index={2}/>
                    <div className='flex items-center gap-x-2 sm:gap-x-6'>
                        <ChartDataDiv title={chartData.header2} value={chartData.value2} image={chartData.icon2} />
                        <ChartDataDiv title={chartData.header3} value={chartData.value3} image={chartData.icon3}/>
                    </div>
                </div>
            </div>
            <div className='flex-1 w-full py-2'>
                <DoughnutChart/>     
            </div>
        </div>
    </div>
  )
}

export default TransactionComparativeComponent