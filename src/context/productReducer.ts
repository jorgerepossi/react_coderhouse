import { initialState } from '../providers/ContextProvider'
import { InitCartProps, ProductsProps } from '../types/interfaces'
import { ProductItem } from '../types/types'

type DataAction =
  | {
      type: 'addProduct'
      payload: {
        product: ProductItem
        quantity: number
      }
    }
  | {
      type: 'removeProduct'
      payload: {
        id: string
      }
    }
  | {
      type: 'handleUpdatePrice'
      payload: {
        type: 'add' | 'subtract'
        price: number
        id: string
        quantity: number
      }
    }
  | {
      type: 'removeCart'
    }

export const productReducer = (
  state = initialState,
  action: DataAction
): InitCartProps => {
  switch (action.type) {
    case 'addProduct':
      const productQuantity = action.payload.quantity
      const productItem = action.payload.product

      const productFind = state.cart.products.find(
        (el) => el.item.id === productItem.id
      )

      let newProducts: Array<ProductsProps> = []
      let quantities = state.cart.quantities
      let totalPrice = state.cart.total

      // product find quantity = 2
      // price unidades = 500

      // totalPrice = 1000

      if (productFind) {
        newProducts = state.cart.products.map((el) => {
          if (el.item.id === productItem.id) {
            return {
              item: el.item,
              // price = 500
              quantity: el.quantity + 1
            }
          }

          return el
        })

        // newStatePrice = 1000 ----------- 1000 * (2)
        // let newStatePrice = productFind.item.price

        // 2000        // 1000       // 1000
        totalPrice = totalPrice + productFind.item.price
      } else {
        newProducts = [
          ...state.cart.products,
          {
            item: productItem,
            quantity: productQuantity
          }
        ]
        ++quantities

        totalPrice = totalPrice + productItem.price * productQuantity
      }

      return {
        ...state,
        cart: {
          ...state.cart,
          products: newProducts,
          quantities,
          total: totalPrice
        }
      }

    case 'removeProduct':
      const productId = action.payload.id
      const productItemToRemove = state.cart.products.find(
        (el) => el.item.id === productId
      )
      let priceToRemove: number = 0

      if (productItemToRemove)
        priceToRemove =
          productItemToRemove.item.price * productItemToRemove.quantity

      const filterProducts = state.cart.products.filter(
        (product) => product.item.id !== productId
      )

      localStorage.setItem(
        'cart',
        JSON.stringify({
          products: filterProducts,
          quantities: state.cart.quantities - 1,
          total: state.cart.total - priceToRemove
        })
      )

      return {
        ...state,
        cart: {
          quantities: state.cart.quantities - 1,
          products: filterProducts,
          total: state.cart.total - priceToRemove
        }
      }

    case 'handleUpdatePrice':
      let newPrice = 0
      const productIdToUpdate = action.payload.id
      const productQuantityToUpdate = action.payload.quantity

      const newArrProducts = state.cart.products.map((el) => {
        if (el.item.id === productIdToUpdate) {
          return {
            ...el,
            quantity: productQuantityToUpdate
          }
        }

        return el
      })

      if (action.payload.type === 'add')
        newPrice = state.cart.total + action.payload.price
      else newPrice = state.cart.total - action.payload.price

      return {
        ...state,
        cart: {
          ...state.cart,
          products: newArrProducts,
          total: newPrice
        }
      }

    case 'removeCart':
      return {
        ...state,
        cart: {
          products: [],
          quantities: 0,
          total: 0
        }
      }
    default:
      return state
  }
}
