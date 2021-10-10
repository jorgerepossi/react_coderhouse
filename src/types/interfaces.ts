import { ProductItem } from './types'

export interface Base {
  children?: React.ReactNode
}

export type IdProp = {
  readonly id: string
}

export interface Products {
  readonly name: string
  readonly price: number
  readonly stock: number
  readonly category: string
  readonly image: string
  readonly images?: []
  readonly description?: string
}
export interface Item {
  name: string
}

export type ProductsProps = {
  item: ProductItem
  quantity: number
}

export interface CartProps {
  quantities: number
  products: Array<ProductsProps>
  total: number
}

export interface InitCartProps {
  cart: CartProps
}

export interface ImagesGallery {
  id: string
  name: string
  url: string
}

export interface MenuLink {
  id: number
  name: string
  link: string
}
