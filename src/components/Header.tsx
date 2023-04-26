'use client'
import { Menu } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { HeaderDrawer } from './HeaderDrawer'
import { useState } from 'react'

export function Header() {
  const pageTitle = 'Painel B7Delivery'
  const router = useRouter()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  function handleLogout() {
    router.push('/login')
  }
  function handleDrawerToggle() {
    setIsDrawerOpen(!isDrawerOpen)
  }
  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            sx={{ display: { sm: 'none' } }}
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
          <Typography
            component="div"
            variant="h6"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>
              {pageTitle}
            </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '16px' }}>
            <Link href="/pedidos" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: '#fff' }}> Pedidos</Button>
            </Link>
            <Link href="/produtos" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: '#fff' }}> Produtos</Button>
            </Link>
            <Link href="/categorias" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: '#fff' }}> Categorias</Button>
            </Link>
            <Button onClick={handleLogout} sx={{ color: '#fff' }}>
              Sair
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <HeaderDrawer
          open={isDrawerOpen}
          onClose={handleDrawerToggle}
          title={pageTitle}
          onLogout={handleLogout}
        />
      </Box>
    </>
  )
}
