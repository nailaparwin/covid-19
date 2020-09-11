import React, { createContext, useReducer } from 'react'
import APPReducer from './AppReducer';

//create the initial state
const initialState = {
    transactions:[{
    code: 'DZ',
    source: 'https://thevirustracker.com/algeria-coronavirus-information-dz',
    title:'Algeria',
    key: 100,
    total_cases: 0,
    active_cases: 0,
    recovered_cases: 0,
    fatalities:0}
]}

// create the Global Context
export const GlobalContext = createContext(initialState);

//create a provider for global context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(APPReducer, initialState)

    function updateTransaction(transaction){
        dispatch({type:'update', payload:transaction})
    }
    return (
        <GlobalContext.Provider value={          
                { transactions: state.transactions, updateTransaction}            
        }>
            {children}
            </GlobalContext.Provider>
    )
}