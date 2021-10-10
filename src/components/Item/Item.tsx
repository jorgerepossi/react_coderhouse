import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Heading, Image, Text } from '@chakra-ui/react'

import { useData } from '../../hooks/useData'
import AddButton from '../common/Buttons/Buttons'
import { ProductItem } from '../../types/types'
import { ItemCount } from '../ItemCount'
import useCountState from '../../hooks/useCountState'
import { AddToCartProps } from '../../context/ProductContext'

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

  const desc = (params: string | undefined) => {
    return params && params.substring(0, 60)
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
    <Box flex="1" margin="20px 0px">
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
        <Box alignItems="center" display="flex" height="50px">
          <Heading size="sm">{item.name}</Heading>
        </Box>
        <Box display="flex" height="80px">
          <Text>{desc(item.description)}</Text>
        </Box>
        <Text> stock {item.stock}</Text>
      </Link>
      {!isInCart && (
        <ItemCount
          count={count}
          decrement={decrement}
          increment={increment}
          maxStock={item.stock}
        />
      )}
      {isInCart && <div>añadir algo aqui</div>}
      {!item.stock && <Text>No hay Stock</Text>}
      {item.stock && (
        <AddButton handleClick={handleAddToCart} isInCart={isInCart} />
      )}
    </Box>
  )
}
