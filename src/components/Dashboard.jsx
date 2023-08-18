import React from 'react'
import PageHeader from './PageHeader'

const Dashboard = () => {
  return (
    <div className='w-full min-h-[100vh] md:min-h-[95vh] md:max-h-[95vh] overflow-y-auto bg-[#F8F9FB] md:rounded-2xl text-black'>
      <PageHeader pageHeader={'Analytics Dashboard'}/>
    </div>
  )
}

export default Dashboard