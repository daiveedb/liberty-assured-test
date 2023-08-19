import React from 'react'
import { balance } from '@/testData'
import BalanceComponent from './BalanceComponent'

const Balances = () => {

    const balanceList = balance.slice(1,4)

  return (
    <>
        {balanceList.map((item) => {
            return <BalanceComponent key={item.title} item={item}/>
        })}
    </>
  )
}

export default Balances