'use client'

import { ReactNode } from 'react'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Container } from '@mui/material'
import { Header } from '@/components/Header'

type props = {
  children: ReactNode
}

const InsideLayout = ({ children }: props) => {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, padding: 0, boxSizing: 'border-box' }}>
        <Header />
        <Container component="section" maxWidth="lg">
          {children}
        </Container>
      </body>
    </html>
  )
}

export default InsideLayout
