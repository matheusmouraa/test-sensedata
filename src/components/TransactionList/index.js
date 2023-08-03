import { useState } from 'react'

import { Button } from '../Button'
import { CreateModal } from '../CreateModal'

import { Content, Table, TableBody, TableHeader } from './styles'
import { useTransactions } from '../../hooks/useTransactions'
import { TransactionCard } from '../TransactionCard'

export const TransactionList = () => {
  const { transactions, filterTransactions } = useTransactions()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button style={{ marginBottom: '40px' }} onClick={() => setIsOpen(true)}>
        Nova transação
      </Button>

      <Table>
        <TableHeader>
          <Content>Título</Content>
          <Content>Tipo</Content>
          <Content>Valor</Content>
          <Content>Categoria</Content>
          <Content>Data</Content>
        </TableHeader>
        <TableBody>
          {transactions.map(data => (
            <TransactionCard data={data} key={data.id} />
          ))}
        </TableBody>
      </Table>

      <CreateModal
        isOpen={isOpen}
        handleClose={() => {
          setIsOpen(false)
        }}
      />
    </>
  )
}
