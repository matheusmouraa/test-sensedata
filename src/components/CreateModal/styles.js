import { Form } from 'formik'
import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;

  width: 100%;

  background: #f5f8fa;

  color: #131313;
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

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  margin-top: 10px;
  gap: 10px;
`
