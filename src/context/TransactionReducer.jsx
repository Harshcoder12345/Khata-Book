const TransactionReducer = (state, action) => {

switch (action.type) {
    case "ADD_TRANSACTIONS":
    return {
        ...state,
transactions :[action.payload, ...state.transactions] 
}
    case "DELETE_TRANSACTIONS":
    return {
        ...state,
transactions : state.transactions.filter((transaction)=> transaction.id !== action.payload)
}
    case "EDIT_TRANSACTIONS":
    return {
        ...state,
        edit : {transaction: action.payload, isEdit : true}
}
    case "UPDATE_TRANSACTIONS":
    return {
        ...state,
        transactions : state.transactions.map((transaction)=> transaction.id === action.payload.id ? action.payload : transaction),
        edit : {transaction: {}, isEdit : false}
        
}
        
        

    default:
       return state;
}

}


export default TransactionReducer