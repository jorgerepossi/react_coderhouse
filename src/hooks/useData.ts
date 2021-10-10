import { useContext } from 'react'

import { ProductContext } from '../context/ProductContext'

export const useData = () => {
  const { state, addToCart, removeItem, removeCart, handleUpdatePrice } =
    useContext(ProductContext)

  return {
    state,
    addToCart,
    removeItem,
    removeCart,
    handleUpdatePrice
  }
}
