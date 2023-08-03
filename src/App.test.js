/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { fireEvent, render, screen } from '@testing-library/react'

import App from './App'
import { CreateModal } from './components/CreateModal'
import user from '@testing-library/user-event'

test('render App', () => {
  render(<App />)
  expect(screen.getByText('SenFinança')).toBeInTheDocument()
})

test('render CreateModal', () => {
  render(<CreateModal isOpen={true} handleClose={() => {}} />)

  expect(screen.getByText('Salvar')).toBeInTheDocument()
})

test('render with EditMode', () => {
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

test('calls createTransaction when submitting a new transaction', () => {
  const onSubmit = jest.fn()

  render(
    <CreateModal isOpen={true} handleClose={jest.fn()} onSubmit={onSubmit} />
  )

  user.type(screen.getByLabelText('Título*:', { name: 'title' }), 'any title')
  user.type(screen.getByLabelText('Tipo*:', { name: 'type' }), 'deposit')
  user.type(screen.getByLabelText('Valor*:', { name: 'value' }), '50.00')
  user.type(
    screen.getByLabelText('Categoria*:', { name: 'category' }),
    'any category'
  )

  user.click(screen.getByText('Salvar'))

  expect(onSubmit).toHaveBeenCalledWith({
    title: 'any title',
    type: 'deposit',
    value: '50.00',
    category: 'any category'
  })

  expect(onSubmit).toHaveBeenCalledTimes(1)
})
