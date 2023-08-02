import { useField } from 'formik'
import { Container, Label, SelectFormikControl } from './styles'

export const Select = ({ label, style, options, name, ...rest }) => {
  const [field, meta] = useField(name)

  return (
    <Container>
      {label && (
        <Label
          style={{
            color: `${meta.touched && meta.error ? 'red' : '#f5f8fa'}`
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
        {options.map(item => (
          <option value={item.value}>{item.label}</option>
        ))}
      </SelectFormikControl>
    </Container>
  )
}
