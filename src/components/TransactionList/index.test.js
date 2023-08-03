import { render, screen } from '@testing-library/react'

import { TransactionList } from '.'
import { TransactionsProvider } from '../../hooks/useTransactions'

describe('TransactionList component', () => {
  it('render TransactionList component', () => {
    render(
      <TransactionsProvider>
        <TransactionList />
      </TransactionsProvider>
    )

    expect(screen.getByText('Nova transação')).toBeInTheDocument()
  })
})
