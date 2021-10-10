import { CartProps, IdProp, Products } from './interfaces'

export type Item = {}

export type ProductItem = IdProp & Products

export type FormData = {
  readonly userName: string
  readonly tel: string
  readonly email: string
}

export type OrderBuyer = FormData

export interface NewOrderCart {
  buyer: OrderBuyer
  items: CartProps
  total: number
}
