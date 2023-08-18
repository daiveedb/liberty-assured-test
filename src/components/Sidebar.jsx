import React from 'react'

const Sidebar = () => {
  return (
    <div>
        <div className='absolute -right-[250px] md:static top-0 max-w-[200px] min-w-[250px] min-h-screen py-4 px-7'>
           <div className='py-6'>
            <h1 className='text-4xl font-bold tracking-tight'>Paybox</h1>
            <p className='text-xs tracking-wide font-extralight'>by LibertyPay</p>
           </div>
        </div>
    </div>
  )
}

export default Sidebar