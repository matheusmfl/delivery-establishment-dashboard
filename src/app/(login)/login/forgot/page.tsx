'use client'

import { api } from '@/libs/api'
import { Box, Typography, TextField, Button, Alert } from '@mui/material'
import { FormEvent, useState } from 'react'
const Page = () => {
  const [emailField, setEmailField] = useState('')
  const [success, setSuccess] = useState('')
  const [formError, setFormError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!emailField) {
      setFormError('Preencha seu e-mail')
      return
    }

    setFormError('')
    setLoading(true)
    const result = await api.forgotPassword(emailField)
    setLoading(false)
    if (result.error) {
      setFormError(result.error)
    } else {
      setSuccess('Enviamos um e-mail para recuperação de sua senha')
    }
  }
  return (
    <>
      <Typography
        component="p"
        sx={{
          textAlign: 'center',
          mt: 2,
          color: '#555',
        }}
      >
        {' '}
        Deseja recuperar sua senha?
      </Typography>
      <Box
        component="form"
        sx={{
          mt: 3,
        }}
        onSubmit={handleLogin}
      >
        <TextField
          label="Digite seu e-mail"
          name="email"
          required
          fullWidth
          autoFocus
          disabled={loading}
          sx={{
            mb: 2,
          }}
          onChange={(e) => setEmailField(e.target.value)}
          value={emailField}
        />

        <Button disabled={loading} type="submit" variant="contained" fullWidth>
          {loading ? 'Carregando...' : 'Recuperar senha'}
        </Button>
        {formError && (
          <Alert
            variant="filled"
            severity="warning"
            sx={{ mt: 3, bgcolor: 'red' }}
          >
            {formError}
          </Alert>
        )}

        {success && (
          <Alert
            variant="filled"
            severity="success"
            sx={{ mt: 3, bgcolor: 'red' }}
          >
            {success}
          </Alert>
        )}
      </Box>
    </>
  )
}

export default Page
