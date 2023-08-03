import { render, screen } from '@testing-library/react'
import { TransactionsProvider } from '../../hooks/useTransactions'
import { Header } from '.'

describe('Header component', () => {
  it('render header component', () => {
    render(
      <TransactionsProvider>
        <Header />
      </TransactionsProvider>
    )
    expect(screen.getByText('SenFinança')).toBeInTheDocument()
  })
})
