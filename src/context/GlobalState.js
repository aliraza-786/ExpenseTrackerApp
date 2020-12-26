import React, { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer";

const initialState = {
    transactions: [
        // {id:1, text: "aaa", amount: -20},
        // {id:2, text: "bbb", amount: 40},
        // {id:3, text: "ccc", amount: -30},
        // {id:4, text: "ddd", amount: 30}
    ]
}

export const GlobalContext = createContext(initialState)
    //Provider
export const GloablProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AppReducer, initialState);

    //Action
    function deleteTransaction(id){
        dispatch({
            type:"Delete_Transaction",
            payload: id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type:"Add_Transaction",
            payload: transaction
        })
    }

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}