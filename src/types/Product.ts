import { Category } from './Category'

export type Product = {
  id: number
  image: string
  category: Category
  productName: string
  price: number
  description?: string
}
