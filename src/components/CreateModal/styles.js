import { Form } from 'formik'
import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;

  width: 100%;

  background: #333;

  color: #f5f8fa;
`

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;
`

export const Title = styled.h2`
  font-size: 23px;
  font-weight: 600;
`
