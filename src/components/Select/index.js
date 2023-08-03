import { useField } from 'formik'
import { Container, Label, SelectFormikControl } from './styles'

export const Select = ({ label, style, options, name, ...rest }) => {
  const [field, meta] = useField(name)

  return (
    <Container>
      {label && (
        <Label
          style={{
            color: `${meta.touched && meta.error ? 'red' : '#131313'}`
          }}
        >
          {label}
        </Label>
      )}
      <SelectFormikControl
        as="select"
        style={{
          ...style,
          border: `${meta.touched && meta.error ? '2.5px solid red' : '0'}`
        }}
        {...field}
        value={meta.value}
        onChange={field.onChange}
        {...rest}
      >
        <option value="">Selecione uma opção</option>
        {options.map(item => (
          <option value={item.value}>{item.label}</option>
        ))}
      </SelectFormikControl>
    </Container>
  )
}
