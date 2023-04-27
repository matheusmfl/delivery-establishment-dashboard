'use client'
import { Refresh, Search } from '@mui/icons-material'
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  InputAdornment,
  Skeleton,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'

const Page = () => {
  const [searchInput, setSearchInput] = useState('')
  const [loading, setLoading] = useState(false)
  function handleSearchKey() {}
  function handleSearchInput() {}
  return (
    <Box sx={{ my: 3 }}>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h5" component="h5" sx={{ color: '#555', mr: 2 }}>
            Pedidos
          </Typography>
          {loading ? (
            <CircularProgress size={24} />
          ) : (
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
          )}
        </Box>
        <TextField
          value={searchInput}
          onChange={handleSearchInput}
          onKeyUp={handleSearchKey}
          variant="standard"
          disabled={loading}
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
      <Grid container spacing={3} columns={{ xs: 1, sm: 2, md: 4 }}>
        {loading && (
          <>
            <Grid item xs={1}>
              <Skeleton variant="rectangular" height={220} />
            </Grid>
            <Grid item xs={1}>
              <Skeleton variant="rectangular" height={220} />
            </Grid>
            <Grid item xs={1}>
              <Skeleton variant="rectangular" height={220} />
            </Grid>
            <Grid item xs={1}>
              <Skeleton variant="rectangular" height={220} />
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  )
}

export default Page
