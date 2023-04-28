import { OrderStatus } from '@/types/OrderStatus'
import { Order } from '@/types/order'
import { Box, Button, Typography } from '@mui/material'

type Props = {
  item: Order
}

export function OrderItem({ item }: Props) {
  function getStatusBackground(status: OrderStatus) {
    const statuses = {
      preparing: '#2787BA',
      sent: '#27BA3A',
      delivered: '#999999',
    }
    return statuses[status]
  }
  return (
    <Box
      sx={{
        border: '1px solid #eee',
        color: '#fff',
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 1,
          backgroundColor: getStatusBackground(item.status),
        }}
      >
        <Box>
          <Typography component="p">{item.orderDate}</Typography>
          <Typography component="p">{item.userName}</Typography>
          <Button size="small" sx={{ color: '#FFF' }}>
            Imprimir
          </Button>
        </Box>
        <Box>
          <Typography component="p" sx={{ fontSize: 24 }}>
            #{item.id}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
