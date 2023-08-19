"use client"
import React from 'react'
import PageHeader from './PageHeader'
import DashboardGrid from '@/components/DashboardGrid'

const Dashboard = () => {
  return (
    <div className='page'>
      <PageHeader pageHeader={'Analytics Dashboard'}/>
      <DashboardGrid/>
    </div>
  )
}

export default Dashboard