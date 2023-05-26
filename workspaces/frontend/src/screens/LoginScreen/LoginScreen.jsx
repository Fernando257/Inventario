import { useNavigate } from 'react-router-dom'
import { Box, TextField, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useForm } from '../../hooks/useForm'
import LoginFormSchema from './LoginFormSchema'
import { loginUser } from '../../utils/apiCore'
import styles from './styles'

const initialValues = {
  email: '',
  password: ''
}

export const LoginScreen = () => {
  const navigate = useNavigate()

  const handleLogin = async (values) => {
    await loginUser(values)
    .then(() => {
      navigate('/home')
    })
  }

  const loginForm = useForm({
    initialValues,
    validationForm: LoginFormSchema,
    submitFunction: handleLogin
  })

  const { errors, handleChange, values, handleSubmit, loading } = loginForm

  return (
    <Box sx={styles.container}>
      <Box sx={styles.loginContainer}>
        <Box sx={styles.titleContainer}>
          <Typography
            variant='body1'
            sx={styles.title}
          >
            Login
          </Typography>
        </Box>
        <Box sx={styles.formContainer}>
          <TextField
            fullWidth
            type='text'
            id='email'
            name='email'
            label='Email'
            variant='outlined'
            autoComplete="off"
            value={values.email}
            error={errors.email}
            helperText={errors.email}
            onChange={handleChange}
            sx={styles.input}
          />
          <TextField
            fullWidth
            type='password'
            id='password'
            name='password'
            label='Contraseña'
            variant='outlined'
            autoComplete="off"
            value={values.password}
            error={errors.password}
            helperText={errors.password}
            onChange={handleChange}
            sx={styles.input}
          />
        </Box>
        <Box sx={styles.btnContainer}>
          <LoadingButton
            loading={loading}
            variant='contained'
            onClick={handleSubmit}
            sx={styles.btn}
          >
            Login
          </LoadingButton>
        </Box>
      </Box>
    </Box>
  )
}
