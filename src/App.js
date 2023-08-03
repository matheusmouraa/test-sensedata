import { TransactionList } from './components/TransactionList'
import { TransactionsProvider } from './hooks/useTransactions'
import { GlobalStyle, MainContent } from './styles/global'
import { ToastContainer } from 'react-toastify'
import { Header } from './components/Header'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <TransactionsProvider>
      <ToastContainer />
      <GlobalStyle />
      <MainContent>
        <Header />
        <TransactionList />
      </MainContent>
    </TransactionsProvider>
  )
}

export default App
