import * as Yup from 'yup'

const schema = Yup.object().shape({
  title: Yup.string(),
  type: Yup.string(),
  category: Yup.string(),
  value: Yup.string()
})

export default schema
