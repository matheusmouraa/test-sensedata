import { createContext, useContext, useEffect, useState } from 'react'

const TransactionsContext = createContext({})

const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([])
  const [atualFilter, setAtualFilter] = useState('')

  const getStorage = () => {
    const data = localStorage.getItem('transactions')
    if (data) {
      setTransactions(JSON.parse(data))
    }
  }

  const filterTransactions = type => {
    const atualType = type === '' ? 'date' : type

    let arr = transactions
    arr = arr.slice().sort((a, b) => {
      if (a[atualType] < b[atualType]) {
        return -1
      }
      if (a[atualType] > b[atualType]) {
        return 1
      }
      return 0
    })

    setAtualFilter(type)
    setTransactions(arr)
    localStorage.setItem('transactions', JSON.stringify(arr))
  }

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

  useEffect(() => {
    console.log(atualFilter)
  }, [atualFilter])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        atualFilter,
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
