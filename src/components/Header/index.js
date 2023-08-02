import { ValuesCard } from '../ValuesCard'
import { Container, Content, Title } from './styles'

export const Header = () => {
  return (
    <Container>
      <Title>SenFinança</Title>

      <Content>
        <ValuesCard color="#51DB61" title="Entrada" value="30,00" />
        <ValuesCard color="#F2594E" title="Saida" value="1030,00" />
        <ValuesCard color="#fff" title="Total" value="00,00" />
      </Content>
    </Container>
  )
}
