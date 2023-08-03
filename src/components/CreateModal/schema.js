import * as Yup from 'yup'

const schema = Yup.object().shape({
  title: Yup.string().required(),
  type: Yup.string().required(),
  category: Yup.string().required(),
  value: Yup.string().required()
})

export default schema
