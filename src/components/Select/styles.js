import styled from 'styled-components'

import { Field } from 'formik'

export const Container = styled.span`
  display: flex;
  flex-direction: column;

  width: auto;
`

export const Label = styled.label`
  margin-bottom: 6px;
  text-align: left;

  font-size: 17px;
  letter-spacing: 0px;
  white-space: nowrap;
`

export const SelectFormikControl = styled(Field)`
  padding: 10px 12px;

  max-width: 100%;

  background: #fff;
  border: 0;
  border-radius: 8px;

  font-size: 21px;
  letter-spacing: -0.07px;
  color: #131313;

  transition: all 300ms linear 0s;

  &:disabled {
    border: 0.1px solid #d0d0d0;
    cursor: not-allowed;
  }
`
