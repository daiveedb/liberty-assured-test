import React from 'react'
import { transaction } from '@/testData'
import TransactionsComponent from './TransactionsComponent'

const Transactions = () => {
  return (
    <>
        {transaction.map((item) => {
            return <TransactionsComponent key={item.title} item={item}/>
        })}
    </>
  )
}

export default Transactions