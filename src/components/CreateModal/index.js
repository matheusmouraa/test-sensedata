import { useTransactions } from '../../hooks/useTransactions'
import { ConfigProvider, Modal } from 'antd'
import { v4 } from 'uuid'
import { Formik } from 'formik'
import schema from './schema'
import moment from 'moment'
import 'moment/locale/pt-br'

import { Input, InputPrice } from '../Input'
import { Select } from '../Select'

import { Container, FormContainer, Title } from './styles'
import { toast } from 'react-toastify'
import { Button } from '../Button'

const options = [
  {
    label: 'Entrada',
    value: 'deposit'
  },
  {
    label: 'Saida',
    value: 'withdraw'
  }
]

export const CreateModal = ({ isOpen, handleClose }) => {
  const { createTransaction } = useTransactions()

  const convertCurrencyToNumber = value => {
    const sanitizedValue = value?.replace(/[^\d.,]/g, '')
    const hasDecimalSeparator = sanitizedValue?.includes(',')
    let numericValue = parseFloat(sanitizedValue?.replace(/[.,]/g, ''))

    if (hasDecimalSeparator) {
      numericValue /= 100
    }

    return numericValue
  }

  const handleInputChange = (value, setValues) => {
    const maxLength = 10
    const numericValue = convertCurrencyToNumber(value)

    if (numericValue > 99.99) {
      return
    }

    if (numericValue.toString().length - 3 > maxLength) {
      return
    }
    console.log(value)
    setValues(values => ({ ...values, value }))
  }

  const handleSubmit = (values, actions) => {
    const atualDate = moment
      .utc(new Date(), 'YYYY-MM-DD')
      .local()
      .format('DD/MM/YYYY')
    let payload = { ...values, id: v4(), date: atualDate }

    createTransaction(payload)
    actions.resetForm()
    toast.success('Transacão salva com sucesso.', {
      position: toast.POSITION.TOP_RIGHT,
      bodyStyle: { color: '#000' }
    })
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: '#333'
        }
      }}
    >
      <Modal
        open={isOpen}
        onCancel={handleClose}
        footer={null}
        width="95%"
        style={{
          maxWidth: '500px'
        }}
      >
        <Container>
          <Title>
            Preencha todas as informações abaixo para adicionar uma nova
            transação.
          </Title>
          <Formik
            initialValues={{
              title: '',
              type: '',
              category: '',
              value: ''
            }}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            {({ values, setValues, errors }) => (
              <FormContainer>
                <Input label="Título*:" name="title" value={values.title} />

                <Select
                  options={options}
                  label="Tipo*:"
                  name="type"
                  defaultValue={values.type ?? ''}
                />

                <InputPrice
                  label="Valor*:"
                  placeholder="R$ 00,00"
                  prefix="R$ "
                  decimalSeparator=","
                  groupSeparator="."
                  decimalScale={2}
                  allowNegativeValue={false}
                  value={values.value}
                  onValueChange={value => handleInputChange(value, setValues)}
                  error={errors.value}
                />

                <Input
                  label="Categoria*:"
                  name="category"
                  value={values.category}
                />

                <Button
                  style={{
                    width: '200px',
                    alignSelf: 'flex-end',
                    marginTop: '10px'
                  }}
                  type="submit"
                >
                  Salvar
                </Button>
              </FormContainer>
            )}
          </Formik>
        </Container>
      </Modal>
    </ConfigProvider>
  )
}
