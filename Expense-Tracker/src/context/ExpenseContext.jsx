import React, {createContext, useContext, useState} from "react"

export const ExpenseContext = createContext();

export const ExpenseProvider = ({children}) => {

    const [expenses, setExpenses] = useState([])
    const [total, setTotal] = useState(0)

    const addExpenses = (title, amount, date) => {
        const newExpense = {
            id: Date.now(),
            title,
            amount: parseFloat(amount),
            date
        };

        setExpenses([...expenses, newExpense]);
        setTotal(total + parseFloat(amount))
    }

    return(
        <ExpenseContext.Provider value={{ expenses, total, addExpenses}}>
            {children}
        </ExpenseContext.Provider>
    )

}
