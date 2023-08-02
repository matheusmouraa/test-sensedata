import { Header } from './components/Header'
import { TransactionList } from './components/TransactionList'
import { GlobalStyle, MainContent } from './styles/global'

function App() {
  return (
    <>
      <GlobalStyle />
      <MainContent>
        <Header />
        <TransactionList />
      </MainContent>
    </>
  )
}

export default App
