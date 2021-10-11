import { IoClose } from 'react-icons/io5'
import { Flex, Box, SimpleGrid, Text } from '@chakra-ui/react'

import useCountState from '../../hooks/useCountState'
import { useData } from '../../hooks/useData'
import { ProductItem } from '../../types/types'
import { ItemCount } from '../ItemCount'

interface ItemCartProps {
  item: ProductItem
  quantity: number
  handleChangePrice: (price: number, type: 'add' | 'subtract') => void
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
    handleChangePrice(item.price, 'subtract')
    decrement()
  }

  const handleIncrementPrice = () => {
    increment()
    handleChangePrice(item.price, 'add')
  }

  return (
    <Box alignItems="center" marginBottom="40px">
      <SimpleGrid alignItems="center" columns={4} textAlign="center">
        <Box>
          <Text fontWeight="bold" textTransform="capitalize">
            {item.name}
          </Text>
        </Box>
        <Box>
          <Text color="primary" fontSize="14px" textAlign="center">
            {' '}
            {`$${handleConvertPrice(item.price)}`}
          </Text>
        </Box>
        <Box alignItems="center" display="flex" flexDirection="column">
          <Text color="text" fontSize="14px" marginBottom="10px">
            {' '}
            Stock: {item.stock}
          </Text>
          <ItemCount
            count={count}
            decrement={handleDecrementPrice}
            increment={handleIncrementPrice}
            maxStock={item.stock}
          />
        </Box>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Text fontWeight="bold">
            $ {handleConvertPrice(item.price * count)}
          </Text>
          <button onClick={() => removeItem(item.id)}>
            <IoClose />
          </button>
        </div>
      </SimpleGrid>
    </Box>
  )
}

export default ItemCart
