import React, { useState, useEffect, useContext } from 'react'
import TransactionContext from '../context/TransactionContext'

const Form = () => {

const {dispatch, edit}  = useContext(TransactionContext)



const [text, setText] = useState('')
const [amount, setAmount] = useState('')

const handleSubmit =(e) => {
e.preventDefault()

!edit.isEdit ?
dispatch({
  type : "ADD_TRANSACTIONS",
  payload : {id:crypto.randomUUID(), text, amount : +amount}
})
:
dispatch({
  type: "UPDATE_TRANSACTIONS",
  payload : {id: edit.transaction.id, text, amount : +amount}
}
)


setText('')
setAmount('')

}


useEffect(()=> {
setText(edit.transaction.text)
setAmount(edit.transaction.amount)
}, [edit])

  return (
    <form  onSubmit={(e)=>handleSubmit(e)}>
   
    <input type="text"  placeholder="Enter Transaction Name" className='form-control my-2' onChange={(e)=>setText(e.target.value)}  value = {text}/>
    <input type="number" placeholder='amount' className='form-control'  onChange={(e)=>setAmount(e.target.value)} value = {amount} />
    <button className="btn w-100 btn-danger my-2">Submit</button>
  </form>
  )
}

export default Form