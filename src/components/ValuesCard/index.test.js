import { render, screen } from '@testing-library/react'

import { ValuesCard } from './'

describe('ValuesCard component', () => {
  it('render ValuesCard component', () => {
    const data = {
      title: 'any title',
      value: '50',
      color: '#51DB61'
    }
    render(
      <ValuesCard title={data.title} value={data.value} color={data.color} />
    )

    expect(screen.getByText('any title')).toBeInTheDocument()
  })
})
