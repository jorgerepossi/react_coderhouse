import {
  Stack,
  Box,
  Heading,
  Text,
  Divider,
  Image,
  Flex
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { ItemCount } from '../ItemCount/ItemCount'
import { Breadcrumbs } from '../Breadcrumb/Breadcrumb'
import AddButton from '../common/Buttons/Buttons'
import useCountState from '../../hooks/useCountState'
import { useData } from '../../hooks/useData'
import { AddToCartProps } from '../../context/ProductContext'
import { ProductItem } from '../../types/types'

export const ItemDetail = ({ item }: { item: ProductItem }) => {
  const { count, decrement, increment } = useCountState({
    maxStock: item.stock
  })
  const [isInCart, setIsInCart] = useState(false)
  const { addToCart, state } = useData()

  const handleAddToCart = () => {
    const itemToAddInCart: AddToCartProps = {
      quantity: count,
      product: item
    }

    addToCart(itemToAddInCart)
    setIsInCart(true)
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
    <>
      <Stack direction={['column', 'column', 'row']} width="100%">
        <Box>
          <Breadcrumbs item={item.category} />
        </Box>
      </Stack>
      <Divider orientation="horizontal" />
      <Stack as="main" direction={['column', 'column', 'row']} spacing={6}>
        <Stack direction={['column', 'column', 'row']} width="100%">
          <Box maxWidth="container.sm" width="100%">
            <Box>
              <Image
                alt={item.name}
                boxSize="100%"
                fallbackSrc="https://via.placeholder.com/150"
                objectFit="cover"
                src={item.image}
              />
            </Box>
            <Flex>
              {item.images
                ? item.images?.map((e) => (
                    <Box key={e}>
                      <Image alt="" height="100" src={e} width="100" />
                    </Box>
                  ))
                : null}
            </Flex>
          </Box>
          <Box height="500px" maxWidth="500px" width="100%">
            <Heading as="h3" mb={5} mt={5} size="lg">
              {item.name}
            </Heading>
            <Text fontSize="xl" mb={5}>
              <b> {item.price} </b>
            </Text>
            <Text fontSize="md">{item.description}</Text>
            <Text fontSize="sm" mb={5} mt={5}>
              Stock: <b>{item.stock}</b>
            </Text>
            <Divider orientation="horizontal" />
            <Box mb={5} mt={5}>
              <Flex justifyContent="space-between">
                {!item.stock && <Text>No stock available</Text>}
                {item.stock && (
                  <>
                    {isInCart && <div>Ya fue añadido</div>}
                    {!isInCart && (
                      <ItemCount
                        count={count}
                        decrement={decrement}
                        increment={increment}
                        maxStock={item.stock}
                      />
                    )}
                    <AddButton
                      handleClick={handleAddToCart}
                      isInCart={isInCart}
                    />
                  </>
                )}
              </Flex>
            </Box>
          </Box>
        </Stack>
      </Stack>
      <Divider orientation="horizontal" />
    </>
  )
}
