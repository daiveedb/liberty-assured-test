"use client"
import React from 'react'
import PageHeader from '@/components/utilityComponents/PageHeader'
import ComingSoon from '@/components/utilityComponents/ComingSoon'

const page = () => {
  return (
    <div className='page'>
      <PageHeader pageHeader={'Leaderboards'}/>
      <ComingSoon/>
    </div>
  )
}

export default page