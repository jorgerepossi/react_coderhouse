import { FC } from 'react'
import { Box, Container, Divider, SimpleGrid, Text } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

import { useData } from '../../hooks/useData'
import ItemCart from '../../components/ItemCart/ItemCart'
import CartForm from '../../components/Form/CartForm'
import { FormData } from '../../types/types'
import { getFirestore } from '../../api/config'

interface Props {}

export const Cart: FC<Props> = () => {
  const { state, removeCart, handleUpdatePrice } = useData()
  const history = useHistory()

  const handleChangePrice = (price: number, type: 'add' | 'subtract') => {
    handleUpdatePrice(type, price)
  }

  const totalPriceEncode = String(state.cart.total).replace(
    /(.)(?=(\d{3})+$)/g,
    '$1.'
  )

  const updateStock = async (): Promise<void> => {
    const db = getFirestore()

    await Promise.all([
      state.cart.products.forEach(({ item, quantity }) => {
        const id = item.id
        const totalStock = item.stock
        const newStock = totalStock - quantity

        return db.collection('items').doc(id).update({
          stock: newStock
        })
      })
    ])
  }

  const handleSubmitForm = (formData: FormData) => {
    const newOrder = {
      buyer: formData,
      items: state.cart,
      total: state.cart.total
    }

    const db = getFirestore()

    db.collection('orders')
      .add(newOrder)
      .then((data) => {
        updateStock()
          .finally(removeCart)
          .finally(() => history.push(`/order/${data.id}`))
      })
      .catch((err) => {
        console.error(err)
      })
  }

  if (!state.cart.products.length) {
    return (
      <div>
        <h1>Cart is empty</h1>
      </div>
    )
  }

  return (
    <Container maxWidth="container.xl">
      <SimpleGrid columns={4} padding="20px 0">
        <Text>Producto</Text>
        <Text>Precio</Text>
        <Text>Cantidad</Text>
        <Text>Total</Text>
      </SimpleGrid>
      <Divider mb="20px" spacing={1} />
      {state.cart.products.map(({ item, quantity }) => (
        <ItemCart
          key={item.id}
          handleChangePrice={handleChangePrice}
          item={item}
          quantity={quantity}
        />
      ))}
      <h2>Total price: ${totalPriceEncode}</h2>
      <CartForm handleSubmitForm={handleSubmitForm} />
    </Container>
  )
}
