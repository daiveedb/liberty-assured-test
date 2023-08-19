import React from 'react'
import TransferComponent from './TransferComponent'
import { transfer } from '@/testData'

const Transfers = () => {
  return (
    <>
    {transfer.map((item) => {
        return <TransferComponent key={item.title} item={item}/>
    })}
</>
  )
}

export default Transfers