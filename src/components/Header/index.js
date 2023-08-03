import { useTransactions } from '../../hooks/useTransactions'

import { ValuesCard } from '../ValuesCard'

import { Container, Content, Title } from './styles'

export const Header = () => {
  const { transactions } = useTransactions()

  let values = {
    deposits: 0,
    withdraws: 0,
    total: 0
  }

  transactions.forEach(item => {
    if (item.type === 'deposit') {
      values.deposits += parseFloat(item.value)
      values.total += parseFloat(item.value)
    } else {
      values.withdraws += parseFloat(item.value)
      values.total -= parseFloat(item.value)
    }
  })

  return (
    <Container>
      <Title>SenFinança</Title>

      <Content>
        <ValuesCard
          color="#51DB61"
          title="Entrada"
          value={values.deposits.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        />
        <ValuesCard
          color="#F2594E"
          title="Saida"
          value={values.withdraws.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        />
        <ValuesCard
          color={values.total < 0 ? '#F2594E' : '#51DB61'}
          title="Total"
          value={values.total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        />
      </Content>
    </Container>
  )
}
