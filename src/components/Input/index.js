import { useField } from 'formik'

import {
  Container,
  InputControl,
  Label,
  StyledCurrencyInputField
} from './styles'

export const Input = ({ label, name, value, style, ...rest }) => {
  // eslint-disable-next-line no-unused-vars
  const [field, meta] = useField(name)

  return (
    <Container>
      <Label
        htmlFor={name}
        style={{
          color: `${meta.touched && meta.error ? 'red' : '#131313'}`
        }}
      >
        {label}
      </Label>
      <InputControl
        defaultValue={value}
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

export const InputPrice = ({ label, name, style, onChange, ...rest }) => {
  const [field, meta] = useField(name)

  return (
    <Container>
      <Label
        htmlFor={name}
        style={{
          color: `${meta.touched && meta.error ? 'red' : '#131313'}`
        }}
      >
        {label}
      </Label>
      <StyledCurrencyInputField
        className="form-control"
        name={name}
        onValueChange={value => onChange(value)}
        value={meta.value}
        style={{
          ...style,
          border: `${meta.touched && meta.error ? '2.5px solid red' : '0'}`
        }}
        {...rest}
      />
    </Container>
  )
}
