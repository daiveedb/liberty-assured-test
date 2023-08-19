import React from 'react'
import { balance } from '@/testData'
import WalletSvgs from './WalletSvgs'
import { commaFormat } from '../../formatNumber'

const WalletBalance = () => {

    const WalletBalance = balance[0]

  return (
    <div className='bg-libertyBlue w-full h-[160px] rounded-lg text-white py-7 px-5 relative overflow-y-hidden'>
        <div>
            <p className='text-sm text-libertyDarkGray capitalize font-nunito tracking-wide'>{WalletBalance.title}</p>
            <p className='text-xl font-semibold font-sora tracking-wide'>₦{commaFormat(WalletBalance.amount.toString())}</p>
        </div>   
        <div className='flex justify-between w-max gap-x-8 md:gap-x-0 md:w-full py-4'>
            <div className='wallet-button'>
              <p className='text-xs text-center'>Add Funds</p>
            </div>
            <div className='wallet-button'>
              <p className='text-xs text-center'>Withdraw</p>
            </div>
        </div>
        <WalletSvgs/>        
    </div>
  )
}

export default WalletBalance