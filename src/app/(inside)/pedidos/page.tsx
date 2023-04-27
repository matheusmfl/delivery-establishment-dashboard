'use client'
import { Refresh, Search } from '@mui/icons-material'
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'

const Page = () => {
  const [searchInput, setSearchInput] = useState('')
  function handleSearchKey() {}
  function handleSearchInput() {}
  return (
    <Box sx={{ my: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h5" component="h5" sx={{ color: '#555', mr: 2 }}>
            Pedidos
          </Typography>
          <Button
            sx={{ justifyContent: { xs: 'flex-start', sm: 'center' } }}
            size="small"
          >
            <Refresh />
            <Typography
              component="div"
              sx={{ color: '#555', display: { xs: 'none', md: 'block' } }}
            >
              Atualizar
            </Typography>
          </Button>
        </Box>
        <TextField
          value={searchInput}
          onChange={handleSearchInput}
          onKeyUp={handleSearchKey}
          variant="standard"
          placeholder="Pesquise um pedido"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  )
}

export default Page
