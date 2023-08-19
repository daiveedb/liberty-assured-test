"use client"
import React from 'react'
import PageHeader from './utilityComponents/PageHeader'
import DashboardGrid from '@/components/dashBoardComponents/DashboardGrid'

const Dashboard = () => {
  return (
    <div className='page'>
      <PageHeader pageHeader={'Analytics Dashboard'}/>
      <DashboardGrid/>
    </div>
  )
}

export default Dashboard