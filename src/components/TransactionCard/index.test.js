import { render, screen } from '@testing-library/react'

import { TransactionCard } from './'

describe('TransactionCard component', () => {
  it('render TransactionCard component', () => {
    const data = {
      title: 'any title',
      type: 'deposit',
      value: '50',
      category: 'any category'
    }

    render(
      <table>
        <tbody>
          <TransactionCard data={data} />
        </tbody>
      </table>
    )

    expect(screen.getByText('any title')).toBeInTheDocument()
  })
})
