import * as yup from 'yup'

const feedBacks = {
  short: 'Muy corto',
  long: 'Muy largo',
  invalid: 'Caracteres invalidos',
  required: 'Este campo es obligatorio',
  emailInvalid: 'El email no es valido',
  withoutAccents: 'El campo no permite el ingreso de tildes'
}

export const passwordSchema = yup.string()
  .min(3, feedBacks.short)
  .max(15, feedBacks.long)
  .required(feedBacks.required)

export const emailSchema = yup.string()
  .required(feedBacks.required)
  .email(feedBacks.emailInvalid)
  .min(3, feedBacks.short)
  .max(50, feedBacks.long)