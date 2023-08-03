/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen } from '@testing-library/react'

import { CreateModal } from '.'

describe('CreateModal component', () => {
  it('render createModal component', () => {
    render(<CreateModal isOpen={true} handleClose={() => {}} />)
    expect(screen.getByText('Salvar')).toBeInTheDocument()
  })

  it('render with EditMode', () => {
    const data = {
      id: '123',
      title: 'any title',
      type: 'deposit',
      category: 'any category',
      value: '50.00',
      date: new Date()
    }

    render(<CreateModal isOpen={true} handleClose={jest.fn()} data={data} />)
    expect(screen.getByText('Editar')).toBeInTheDocument()
  })
})
