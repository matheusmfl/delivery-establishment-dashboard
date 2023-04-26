'use client'

import { ReactNode } from 'react'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Box, Container, Typography } from '@mui/material'

type props = {
  children: ReactNode
}

const LoginLayout = ({ children }: props) => {
  return (
    <html lang="pt-BR">
      <body>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              mt: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h3" variant="h3">
              B7 delivery
            </Typography>
            <Typography component="h5" variant="h5">
              Painel do estabelecimento
            </Typography>
            {children}
          </Box>
        </Container>
      </body>
    </html>
  )
}

export default LoginLayout
