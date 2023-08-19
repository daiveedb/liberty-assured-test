import React from 'react'
import { balance } from '@/testData'
import WalletSvgs from './WalletSvgs'

const WalletBalance = () => {

    const WalletBalance = balance[0]

  return (
    <div className='bg-libertyBlue w-full h-[160px] rounded-lg text-white py-7 px-5 relative'>
        <div>
            <p className='text-sm text-libertyDarkGray capitalize font-nunito tracking-wide'>{WalletBalance.title}</p>
            <p className='text-xl font-semibold font-sora tracking-wide'>₦{WalletBalance.amount}</p>
        </div>   
        <div className='flex justify-between w-full text-sm py-4'>
            <button className='wallet-button'>Add Funds</button>
            <button className='wallet-button'>Withdraw</button>
        </div>
        <WalletSvgs/>        
    </div>
  )
}

export default WalletBalance