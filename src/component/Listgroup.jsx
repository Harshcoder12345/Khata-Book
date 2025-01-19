import React, { useContext } from 'react'
import Listiten from './Listiten'
import TransactionContext from '../context/TransactionContext'

const Listgroup = () => {

  const {transactions} = useContext(TransactionContext)



  return (
    <ul className='list-group'>
      {
       transactions.map((transaction)=> <Listiten transaction= {transaction} />) 
      }

  </ul>
  )
}

export default Listgroup