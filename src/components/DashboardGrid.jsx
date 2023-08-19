import React from 'react'
import WalletBalance from './dashBoardComponents/WalletBalance'

const DashboardGrid = () => {
  return (
    <div className='w-full px-6 py-8 grid grid-cols-4 justify-items-center gap-5'>
        <WalletBalance/>
    </div>
  )
}

export default DashboardGrid