import React, { useContext } from 'react'
import TransactionContext from '../context/TransactionContext'

const Dashboard = () => {


  const {transactions} = useContext(TransactionContext)

  let Income = transactions.filter((transaction)=>transaction.amount>0).reduce((a,b)=>a+b.amount,0)
  let Expense = transactions.filter((transaction)=>transaction.amount<0).reduce((a,b)=>a+b.amount,0)
  let total = Income+Expense






  return (
    <div className="row">
    <div className="col-sm-12 col-md-4">
     <div className="card color-green p-3 m-2 text-light ">
     <h1 className='text-light display-6'>Income   </h1>
     <h1 className='text-light display-6'>Amount : {Income} </h1>
   </div>
  </div>
    <div className="col-sm-12 col-md-4">
       <div className="card color-red p-3 m-2 text-light ">
     <h1 className='text-light display-6'>Expense : </h1>
     <h1 className='text-light display-6'>Amount : {Expense} </h1>
   </div>
  </div>
    <div className="col-sm-12 col-md-4">
       <div className="card color-blue p-3 m-2 text-light ">
     <h1 className='text-light display-6'>Total : {total}</h1>
     <h1 className='text-light display-4'>Amount </h1>
   </div>
  </div>
  
   </div>
  )
}

export default Dashboard