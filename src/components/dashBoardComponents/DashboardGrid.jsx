import React from 'react'
import WalletBalance from './WalletBalance'
import Balances from './Balances'
import Transfers from './Transfers'
import Transactions from './Transactions'

const DashboardGrid = () => {
  return (
    <div className='w-full px-6 py-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center gap-3'>
        <WalletBalance/>
        <Balances/>
        <Transfers/>
        <Transactions/>
    </div>
  )
}

export default DashboardGrid