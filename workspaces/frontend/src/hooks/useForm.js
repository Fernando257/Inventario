import { useState } from 'react'
import { useFormik } from 'formik'

export const useForm = ({ initialValues, validationForm, submitFunction }) => {
  const [loading, setLoading] = useState(false)

  const form = useFormik({
    initialValues,
    validationSchema: validationForm,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async values => {
      setLoading(true)
      submitFunction(values)
      setLoading(false)
    }
    ,
  })

  const handleChange = (e) => {
    form.setFieldError(e.target.name, undefined)
    form.handleChange(e)
  }

  const handleFileChange = (e) => {
    form.setFieldValue('file', e.target.files[0])
  }

  const handleIndividualChange = ({ name, value }) => {
    form.setFieldValue(name, value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    form.handleSubmit()
  }

  const handleResetForm = () => {
    form.resetForm()
    let imageInput = document.getElementById('file')
    imageInput.value = ''
  }

  return {
    values: { ...form.values },
    errors: { ...form.errors },
    loading,
    handleChange,
    handleFileChange,
    handleIndividualChange,
    handleSubmit,
    handleResetForm,
  }
}
