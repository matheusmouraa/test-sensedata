import { Container, Value, Title } from './styles'

export const ValuesCard = ({ title, color, value }) => {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Value>R$ {value}</Value>
    </Container>
  )
}
