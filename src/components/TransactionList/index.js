import { useState } from 'react'

import { Button } from '../Button'
import { CreateModal } from '../CreateModal'

import {
  ArrowIcon,
  Container,
  Content,
  Table,
  TableBody,
  TableHeader
} from './styles'
import { useTransactions } from '../../hooks/useTransactions'
import { TransactionCard } from '../TransactionCard'
import { HeaderOptions } from '../../utils'

export const TransactionList = () => {
  const { transactions, filterTransactions, atualFilter } = useTransactions()

  const [isOpen, setIsOpen] = useState(false)

  const changeFilter = type => {
    if (atualFilter === type) {
      filterTransactions('')
    } else {
      filterTransactions(type)
    }
  }

  return (
    <Container>
      <Button
        style={{ alignSelf: 'flex-end', width: '160px', marginRight: '20px' }}
        onClick={() => setIsOpen(true)}
      >
        Nova transação
      </Button>

      <Table>
        <TableHeader>
          {HeaderOptions.map(item => (
            <Content onClick={() => changeFilter(item.value)}>
              {item.label}
              {atualFilter === item.value && <ArrowIcon size={19} />}
            </Content>
          ))}
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
    </Container>
  )
}
