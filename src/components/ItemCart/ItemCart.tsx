import { IoClose } from 'react-icons/io5'
import {
  Flex,
  Box,
  SimpleGrid,
  Text,
  Image,
  CloseButton
} from '@chakra-ui/react'

import useCountState from '../../hooks/useCountState'
import { useData } from '../../hooks/useData'
import { ProductItem } from '../../types/types'
import { ItemCount } from '../ItemCount'

interface ItemCartProps {
  item: ProductItem
  quantity: number
  handleChangePrice: (
    price: number,
    type: 'add' | 'subtract',
    id: string,
    quantity: number
  ) => void
}

export const handleConvertPrice = (price: number) => {
  return String(price).replace(/(.)(?=(\d{3})+$)/g, '$1.')
}

const ItemCart = ({ item, quantity, handleChangePrice }: ItemCartProps) => {
  const { count, decrement, increment } = useCountState({
    maxStock: item.stock,
    initialValue: quantity
  })

  const { removeItem } = useData()

  const handleDecrementPrice = () => {
    if (count - 1 === 0 || count === 0) return
    handleChangePrice(item.price, 'subtract', item.id, count - 1)
    decrement()
  }

  const handleIncrementPrice = () => {
    increment()
    handleChangePrice(item.price, 'add', item.id, count + 1)
  }

  return (
    <Box
      alignItems="center"
      paddingBottom={6}
      borderBottomWidth="1px"
      paddingTop={4}
      marginBottom={4}
    >
      <SimpleGrid alignItems="center" columns={[2, 2, 4]} textAlign="center">
        <Box>
          <Flex alignItems="center">
            <Image height="80px" src={item.image} width="80px" />
            <Text fontSize="12" fontWeight="bold" textTransform="capitalize">
              {item.name}
            </Text>
          </Flex>
        </Box>
        <Box>
          <Text color="primary" fontSize="14px" textAlign="center">
            {` $${handleConvertPrice(item.price)}`}
          </Text>
        </Box>
        <Box alignItems="center" display="flex" flexDirection="column">
          <Text color="text" fontSize="14px" marginBottom="10px">
            Stock: {item.stock}
          </Text>
          <ItemCount
            count={count}
            decrement={handleDecrementPrice}
            increment={handleIncrementPrice}
            maxStock={item.stock}
          />
        </Box>
        <Box alignItems="center" display="flex" justifyContent="space-around">
          <Text fontWeight="bold">
            $ {handleConvertPrice(item.price * count)}
          </Text>
          <CloseButton size="sm" onClick={() => removeItem(item.id)} />
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default ItemCart
