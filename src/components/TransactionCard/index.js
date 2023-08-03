import { Container, Label } from './styles'

export const TransactionCard = ({ data }) => {
  return (
    <Container>
      <Label data-label="Título">{data.title}</Label>
      <Label data-label="Tipo">{data.type}</Label>
      <Label data-label="Valor">{data.value}</Label>
      <Label data-label="Categoria">{data.category}</Label>
      <Label data-label="Data">{data.date}</Label>
      <Label>Apagar</Label>
    </Container>
  )
}
