import { createContext, useReducer, useState } from "react";
import TransactionReducer from "./TransactionReducer";

const TransactionContext = createContext()

export const TransactionProvider = ({children}) => {

      const initialState = {
        transactions : [
          // {text:"Bill", id: 1, amount: 500},
          // {text:"Pillow", id: 2, amount: -500},
        ],
        edit : {transaction : {}, isEdit : false}
      }

      const [state, dispatch] = useReducer(TransactionReducer, initialState)





    return (
   <TransactionContext.Provider value = {{...state, dispatch }}>
    {children}
   </TransactionContext.Provider>
    )
}

export default TransactionContext;