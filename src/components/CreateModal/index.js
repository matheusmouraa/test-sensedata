import { useState } from 'react'

import { useTransactions } from '../../hooks/useTransactions'
import { ConfigProvider, Modal } from 'antd'
import { toast } from 'react-toastify'
import { Formik } from 'formik'
import schema from './schema'
import moment from 'moment'
import 'moment/locale/pt-br'
import { v4 } from 'uuid'

import { Input, InputPrice } from '../Input'
import { Button } from '../Button'
import { Select } from '../Select'

import { ButtonContainer, Container, FormContainer, Title } from './styles'

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

export const CreateModal = ({ isOpen, handleClose, data, onSubmit }) => {
  const { createTransaction, editTransaction } = useTransactions()

  const [editMode, setEditMode] = useState(data?.id ? true : false)

  const handleSubmit = (values, actions) => {
    if (onSubmit) {
      onSubmit(values)
      return
    }
    if (editMode) {
      editTransaction(values)
      toast.success('Transacão editada com sucesso.', {
        position: toast.POSITION.TOP_RIGHT
      })
    } else {
      const atualDate = moment
        .utc(new Date(), 'YYYY-MM-DD HH:mm')
        .local()
        .format('DD/MM/YYYY HH:mm')
      let payload = { ...values, id: v4(), date: atualDate }

      createTransaction(payload)
      actions.resetForm()
      toast.success('Transacão salva com sucesso.', {
        position: toast.POSITION.TOP_RIGHT
      })
    }
    handleClose()
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: '#f5f8fa'
        }
      }}
    >
      <Modal
        open={isOpen}
        onCancel={() => {
          handleClose()
          setEditMode(false)
        }}
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
            initialValues={
              data?.id ? data : { title: '', type: '', category: '', value: '' }
            }
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            {({ values, setValues }) => (
              <FormContainer>
                <Input
                  label="Título*:"
                  id="title"
                  name="title"
                  value={values.title}
                />

                <Select
                  options={options}
                  label="Tipo*:"
                  name="type"
                  defaultValue={values.type ?? ''}
                  id="type"
                />

                <InputPrice
                  label="Valor*:"
                  placeholder="R$ 00,00"
                  prefix="R$ "
                  decimalSeparator=","
                  groupSeparator="."
                  decimalScale={2}
                  allowNegativeValue={false}
                  name="value"
                  id="value"
                  onChange={value =>
                    setValues(state => ({ ...state, value: value }))
                  }
                />

                <Input
                  label="Categoria*:"
                  name="category"
                  id="category"
                  value={values.category}
                  placeholder="Categoria"
                />

                <ButtonContainer>
                  {editMode && (
                    <Button
                      style={{
                        width: '160px'
                      }}
                      type="button"
                      onClick={() => handleClose()}
                    >
                      Cancelar
                    </Button>
                  )}
                  <Button
                    style={{
                      width: '160px'
                    }}
                    type="submit"
                  >
                    {editMode ? 'Editar' : 'Salvar'}
                  </Button>
                </ButtonContainer>
              </FormContainer>
            )}
          </Formik>
        </Container>
      </Modal>
    </ConfigProvider>
  )
}
