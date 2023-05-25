import { Box, TextField, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import React from 'react'
import styles from './styles'

export const LoginScreen = () => {
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
            id='name'
            name={'name'}
            label='Nombre de usuario'
            variant='outlined'
            sx={styles.input}
          />
          <TextField
            fullWidth
            type='password'
            id='name'
            name={'name'}
            label='Nombre de usuario'
            variant='outlined'
            sx={styles.input}
          />
        </Box>
        <Box sx={styles.btnContainer}>
          <LoadingButton
            variant='contained'
            color='secondary'
            sx={styles.btn}
          >
            Login
          </LoadingButton>
        </Box>
      </Box>
    </Box>
  )
}
