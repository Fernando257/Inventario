import * as yup from 'yup'
import { emailSchema, passwordSchema } from '../../utils/schemas'

export const LoginFormSchema = yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
})

export default LoginFormSchema