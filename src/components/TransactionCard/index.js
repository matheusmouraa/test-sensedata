import { useTransactions } from '../../hooks/useTransactions'
import { Container, UpIcon, DownIcon, Label, DeleteIcon } from './styles'

export const TransactionCard = ({ data }) => {
  const { deleteTransaction } = useTransactions()
  return (
    <Container>
      <Label data-label="Título">{data.title}</Label>
      <Label data-label="Tipo" type={data.type}>
        {data.type === 'deposit' ? (
          <>
            Entrada
            <UpIcon size={20} />
          </>
        ) : (
          <>
            Saida
            <DownIcon size={20} />
          </>
        )}
      </Label>
      <Label data-label="Valor">{data.value}</Label>
      <Label data-label="Categoria">{data.category}</Label>
      <Label data-label="Data">{data.date}</Label>
      <Label>
        <DeleteIcon
          size={20}
          color="#F2594E"
          onClick={() => deleteTransaction(data.id)}
        />
      </Label>
    </Container>
  )
}
