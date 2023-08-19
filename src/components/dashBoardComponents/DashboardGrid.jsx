import React from 'react'
import WalletBalance from './WalletBalance'
import Balances from './Balances'

const DashboardGrid = () => {
  return (
    <div className='w-full px-6 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-5'>
        <WalletBalance/>
        <Balances/>
    </div>
  )
}

export default DashboardGrid