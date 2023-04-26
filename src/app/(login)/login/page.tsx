'use client'

import { api } from '@/libs/api'
import {
  Box,
  Typography,
  TextField,
  Button,
  Link as MuiLink,
  Alert,
} from '@mui/material'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
const Page = () => {
  const [emailField, setEmailField] = useState('')
  const [passwordField, setPasswordField] = useState('')
  const [formError, setFormError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!emailField || !passwordField) {
      setFormError('Preencha seu e-mail e senha.')
      return
    }

    setFormError('')
    setLoading(true)
    const result = await api.login(emailField, passwordField)
    setLoading(false)
    if (result.error) {
      setFormError(result.error)
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
        Digite seus dados para entrar no painel administrativo do
        estabelecimento e gerenciar produtos/pedidos
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
        <TextField
          label="Digite sua senha"
          sx={{
            mb: 2,
          }}
          name="password"
          required
          type="password"
          fullWidth
          onChange={(e) => setPasswordField(e.target.value)}
          value={passwordField}
          disabled={loading}
        />
        <Button disabled={loading} type="submit" variant="contained" fullWidth>
          {loading ? 'Carregando...' : 'Entrar'}
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

        <Box sx={{ mt: 3 }}>
          <MuiLink href="/login/forgot" variant="body2" component={Link}>
            Esqueceu sua senha?
          </MuiLink>
        </Box>
      </Box>
    </>
  )
}

export default Page
