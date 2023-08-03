import { createContext, useContext, useEffect, useState } from 'react'

const TransactionsContext = createContext({})

const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([])

  const getStorage = () => {
    const data = localStorage.getItem('transactions')
    if (data) {
      setTransactions(JSON.parse(data))
    }
  }

  const filterTransactions = type => {}

  const createTransaction = newTransaction => {
    const allTransactions = [...transactions, newTransaction]
    setTransactions(allTransactions)
    localStorage.setItem('transactions', JSON.stringify(allTransactions))
  }

  const editTransaction = data => {
    const transactionremoved = transactions.filter(
      transactions => transactions.id !== data.id
    )
    const allTransactions = [...transactionremoved, data]
    setTransactions(allTransactions)
    localStorage.setItem('transactions', JSON.stringify(allTransactions))
  }

  const deleteTransaction = id => {
    const transactionremoved = transactions.filter(
      transactions => transactions.id !== id
    )
    setTransactions(transactionremoved)
    localStorage.setItem('transactions', JSON.stringify(transactionremoved))
  }

  const clearStorage = () => {
    setTransactions([])
    localStorage.clear()
  }

  useEffect(() => {
    getStorage()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        filterTransactions,
        createTransaction,
        editTransaction,
        deleteTransaction,
        clearStorage
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

function useTransactions() {
  const context = useContext(TransactionsContext)
  return context
}

export { TransactionsProvider, useTransactions }
