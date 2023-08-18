"use client"
import React from 'react'
import PageHeader from '@/components/PageHeader'
import ComingSoon from '@/components/ComingSoon'

const page = () => {
  return (
    <div className='page'>
      <PageHeader pageHeader={'Cards'}/>
      <ComingSoon/>
    </div>
    
  )
}

export default page