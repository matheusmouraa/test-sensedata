import { ConfigProvider, Modal } from 'antd'
import { Form, Formik } from 'formik'
import schema from './schema'
import { Container, Title } from './styles'
import { Input, InputPrice } from '../Input'
import { Select } from '../Select'

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
    const maxLength = 7
    const numericValue = convertCurrencyToNumber(value)

    if (numericValue > 99.99) {
      return
    }

    if (numericValue.toString().length - 3 > maxLength) {
      return
    }

    setValues(values => setValues({ ...values, value: value }))
  }

  const handleSubmit = () => {}

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
            {({ values, setValues }) => (
              <Form>
                <Input label="Título*:" name="title" />
                <Select options={options} label="Tipo*:" name="type" />
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
                />
                <Input label="Categoria*:" name="category" />
              </Form>
            )}
          </Formik>
        </Container>
      </Modal>
    </ConfigProvider>
  )
}
