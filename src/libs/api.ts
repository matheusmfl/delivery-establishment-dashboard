import { OrderStatus } from '@/types/OrderStatus'
import { Product } from '@/types/Product'
import { Order } from '@/types/order'

const tmpProduct: Product = {
  id: 999,
  image:
    'https://classic.exame.com/wp-content/uploads/2020/05/mafe-studio-LV2p9Utbkbw-unsplash-1.jpg?quality=70&strip=info&w=1024',
  category: {
    id: 99,
    name: 'X-egg',
  },
  productName: 'Hamburguer com bacon',
  price: 500,
  description: ' Hamburguer gourmet',
}

export const api = {
  login: async (
    email: string,
    password: string,
  ): Promise<{ error: string; token?: string }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email !== 'matheus@hotmail.com') {
          resolve({
            error: 'E-mail ou senha não batem',
          })
        } else {
          resolve({
            error: '',
            token: '123',
          })
        }
      }, 1000)
    })
  },
  forgotPassword: async (email: string): Promise<{ error: string }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ error: '' })
      }, 1000)
    })
  },
  redefinePassword: async (
    password: string,
    token: string,
  ): Promise<{ error: string }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ error: '' })
      }, 1000)
    })
  },
  getOrders: async (): Promise<Order[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const orders: Order[] = []
        const statuses: OrderStatus[] = ['preparing', 'sent', 'delivery']

        // TODO: Montar array de pedidos

        for (let i = 0; i < 6; i++) {
          orders.push({
            id: parseInt('12' + 1),
            status: statuses[Math.floor(Math.random() * 3)],
            orderDate: '2023-01-03 18:30',
            userId: '1',
            userName: '1',
            shippingAddress: {
              id: 99,
              cep: '51021000',
              street: 'Rua do Sol',
              number: '1200',
              district: 'Boa Viagem',
              city: 'Recife',
              state: 'PE',
              complement: 'Casa',
            },
            shippingPrice: 12,
            paymentMethod: 'card',
            cashAdvanceValue: 0,
            cupom: 'Verãao',
            cupomDiscount: 2,
            products: [
              { quantity: 2, product: tmpProduct },
              {
                quantity: 3,
                product: {
                  ...tmpProduct,
                  id: 888,
                  productName: 'Burguer Simplão',
                },
              },
            ],
            subtotal: 99,
            total: 120,
          })
        }
        resolve(orders)
      }, 1000)
    })
  },
}
