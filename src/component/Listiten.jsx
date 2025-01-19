import React, { useContext } from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import TransactionContext from '../context/TransactionContext'

const Listiten = ({transaction}) => {

  const {dispatch} = useContext(TransactionContext)


  const DeleteTrans = (id)=> {
    dispatch(
      {
        type: "DELETE_TRANSACTIONS",
        payload : id
      }
    )
  }
  
  const EditTrans = (transaction)=> {
    dispatch(
      {
        type: "EDIT_TRANSACTIONS",
        payload : transaction
      }
    )
  }
  
  return (
    <li className='list-group-item'>
    <p>Text: {transaction.text}</p>
    <p>Amount:{transaction.amount}</p>
    {/* <p>id:{transaction.id}</p> */}
    <span className='float-end'>
      <button className="btn btn-sm color-blue mx-2" onClick={()=>EditTrans(transaction)}  ><CiEdit /></button>
      <button className="btn btn-sm btn-danger" onClick={()=>DeleteTrans(transaction.id)}><MdDelete /></button>
    </span>
  </li>
  )
}

export default Listiten