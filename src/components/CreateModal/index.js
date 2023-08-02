import { ConfigProvider, Modal } from 'antd'
import { Form, Formik } from 'formik'
import schema from './schema'
import { Container } from './styles'
import { Input } from '../Input'
import { Select } from '../Select'

export const CreateModal = ({ isOpen, handleClose }) => {
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
            {() => (
              <Form>
                <Input label="Título*:" name="title" />
                <Select label="Tipo*:" name="type" />
                <Input label="Valor:*:" name="value" />
                <Input label="Categoria*:" name="category" />
              </Form>
            )}
          </Formik>
        </Container>
      </Modal>
    </ConfigProvider>
  )
}
