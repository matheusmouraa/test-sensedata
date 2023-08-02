import { useField } from 'formik'
import {
  Container,
  InputControl,
  Label,
  StyledCurrencyInputField
} from './styles'

export const Input = ({ label, name, style, ...rest }) => {
  const [field, meta] = useField(name)

  return (
    <Container>
      <Label
        style={{
          color: `${meta.touched && meta.error ? 'red' : '#f5f8fa'}`
        }}
      >
        {label}
      </Label>
      <InputControl
        className="form-control"
        name={name}
        style={{
          ...style,
          border: `${meta.touched && meta.error ? '2.5px solid red' : '0'}`
        }}
        {...rest}
      />
    </Container>
  )
}

export const InputPrice = ({ label, name, style, ...rest }) => {
  const [field, meta] = useField(name)

  return (
    <Container>
      <Label
        style={{
          color: `${meta.touched && meta.error ? 'red' : '#f5f8fa'}`
        }}
      >
        {label}
      </Label>
      <StyledCurrencyInputField
        className="form-control"
        name={name}
        style={{
          ...style,
          border: `${meta.touched && meta.error ? '2.5px solid red' : '0'}`
        }}
        {...rest}
      />
    </Container>
  )
}
