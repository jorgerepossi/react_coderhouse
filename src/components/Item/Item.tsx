import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'

import { useData } from '../../hooks/useData'
import AddButton from '../common/Buttons/Buttons'
import { ProductItem } from '../../types/types'
import { ItemCount } from '../ItemCount'
import useCountState from '../../hooks/useCountState'
import { AddToCartProps } from '../../context/ProductContext'
import { handleConvertPrice } from '../ItemCart/ItemCart'

export const Item = ({ item }: { item: ProductItem }) => {
  const { addToCart, state } = useData()
  const { count, decrement, increment } = useCountState({
    maxStock: item.stock
  })
  const [isInCart, setIsInCart] = useState(false)

  const handleAddToCart = () => {
    const itemToAddInCart: AddToCartProps = {
      quantity: count,
      product: item
    }

    addToCart(itemToAddInCart)
  }

  const handleIsAlreadyInCart = () => {
    const { products } = state.cart

    const isInCart = products.some((product) => product.item.id === item.id)

    setIsInCart(isInCart)
  }

  useEffect(() => {
    handleIsAlreadyInCart()
  }, [state.cart])

  return (
    <Box boxShadow="xs" flex="1" margin="20px 0px" padding={5} rounded="md">
      <Link to={`/item/${item.id}`}>
        <Box display="flex" justifyContent="center">
          <Image
            alt={item.name}
            boxSize="200px"
            fallbackSrc="https://via.placeholder.com/150"
            objectFit="cover"
            src={item.image}
          />
        </Box>
        <Box display="flex" height="50px" mt={5}>
          <Heading size="xs">{item.name}</Heading>
        </Box>
        <Text color="primary" fontWeight="bold">
          {`$${handleConvertPrice(item.price)}`}
        </Text>
      </Link>
      <Box mt={5}>
        <SimpleGrid columns={2} gap={2}>
          {!isInCart && (
            <ItemCount
              count={count}
              decrement={decrement}
              increment={increment}
              maxStock={item.stock}
            />
          )}
          {isInCart && <Text>Thank´s</Text>}
          {!item.stock && <Text>No more Stock</Text>}
          {item.stock && (
            <AddButton handleClick={handleAddToCart} isInCart={isInCart} />
          )}
        </SimpleGrid>
      </Box>
    </Box>
  )
}
