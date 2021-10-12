import { useContext, useReducer, FC, useEffect } from 'react'

import { InitCartProps } from '../types/interfaces'
import { productReducer } from '../context/productReducer'
import { AddToCartProps, ProductContext } from '../context/ProductContext'

export const initialState: InitCartProps = {
  cart: {
    products: [],
    quantities: 0,
    total: 0
  }
}

const initializeData = () => {
  let state = initialState
  const cartData = localStorage.getItem('cart')

  if (cartData) {
    state = {
      cart: JSON.parse(cartData)
    }
  }

  return state
}

export const useProductContext = () => useContext(ProductContext)

const ProductProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(
    productReducer,
    initialState,
    initializeData
  )

  const addToCart = ({ product, quantity }: AddToCartProps) => {
    dispatch({
      type: 'addProduct',
      payload: {
        product,
        quantity
      }
    })
  }

  const removeItem = (id: string) => {
    dispatch({
      type: 'removeProduct',
      payload: { id }
    })
  }

  const handleUpdatePrice = (type: 'add' | 'subtract', price: number, id: string, quantity: number) => {
    dispatch({
      type: 'handleUpdatePrice',
      payload: { type, price, id, quantity }
    })
  }

  const removeCart = () => {
    dispatch({ type: 'removeCart' })
    localStorage.removeItem('cart')
  }

  useEffect(() => {
    if (state.cart.quantities) {
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  }, [state.cart])

  return (
    <ProductContext.Provider
      value={{
        state,
        addToCart,
        removeItem,
        removeCart,
        handleUpdatePrice
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
