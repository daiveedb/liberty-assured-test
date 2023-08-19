"use client"
import React from 'react'
import PageHeader from './utilityComponents/PageHeader'
import DashboardGrid from '@/components/dashBoardComponents/DashboardGrid'

const Dashboard = () => {
  return (
    <div className='page mt-[15vh] md:mt-0'>
      <PageHeader pageHeader={'Analytics Dashboard'}/>
      <DashboardGrid/>
    </div>
  )
}

export default Dashboard