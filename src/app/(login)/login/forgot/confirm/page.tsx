'use client'

import { api } from '@/libs/api'
import { Box, Typography, TextField, Button, Alert } from '@mui/material'
import { FormEvent, useState } from 'react'
const Page = () => {
  const [success, setSuccess] = useState('')
  const [formError, setFormError] = useState('')
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!password || !confirmPassword) {
      setFormError('Preencha sua senha')
      return
    }

    if (password !== confirmPassword) {
      setFormError('as senhas não batem!')
      return
    }

    setFormError('')
    setLoading(true)
    const result = await api.redefinePassword(password, '123')
    setLoading(false)
    if (result.error) {
      setFormError(result.error)
    } else {
      setSuccess('Success! Faça login com sua nova senha!')
      setPassword('')
      setConfirmPassword('')
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
        Olá _User, defina sua nova senha abaixo
      </Typography>
      <Box
        component="form"
        sx={{
          mt: 3,
        }}
        onSubmit={handleLogin}
      >
        <TextField
          label="Digite sua senha"
          name="confirm Password"
          type="password"
          required
          fullWidth
          autoFocus
          disabled={loading}
          sx={{
            mb: 2,
          }}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <TextField
          label="Confirme sua nova senha"
          name="password"
          type="password"
          required
          fullWidth
          autoFocus
          disabled={loading}
          sx={{
            mb: 2,
          }}
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />

        <Button disabled={loading} type="submit" variant="contained" fullWidth>
          {loading ? 'Carregando...' : 'Definir nova senha'}
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
          <Alert variant="filled" severity="success" sx={{ mt: 3 }}>
            {success}
          </Alert>
        )}
      </Box>
    </>
  )
}

export default Page
