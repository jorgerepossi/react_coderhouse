import { createContext } from 'react'

import { InitCartProps } from '../types/interfaces'
import { ProductItem } from '../types/types'

export interface AddToCartProps {
  product: ProductItem
  quantity: number
}

export type ProductContextProps = {
  state: InitCartProps
  addToCart: ({ product, quantity }: AddToCartProps) => void
  removeItem: (id: string) => void
  removeCart: () => void
  handleUpdatePrice: (type: 'add' | 'subtract', price: number, id: string, quantity: number) => void
}

export const ProductContext = createContext<ProductContextProps>({
  state: {
    cart: {
      products: [],
      quantities: 0,
      total: 0
    }
  },
  addToCart: () => {},
  removeItem: () => {},
  removeCart: () => {},
  handleUpdatePrice: () => {}
})
