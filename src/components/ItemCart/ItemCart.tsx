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

  const handleConvertPrice = (price: number) => {
    return String(price).replace(/(.)(?=(\d{3})+$)/g, '$1.')
  }

  return (
    <div>
      <SimpleGrid columns={4}>
        <Box>
          <h1>{item.name}</h1>
        </Box>
        <Box>
          <Text>${handleConvertPrice(item.price)}</Text>
        </Box>
        <Box>
          <Text> Stock: {item.stock}</Text>
          <ItemCount
            count={count}
            decrement={handleDecrementPrice}
            increment={handleIncrementPrice}
            maxStock={item.stock}
          />
        </Box>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Text>$ {handleConvertPrice(item.price * count)}</Text>
          <button onClick={() => removeItem(item.id)}>
            <IoClose />
          </button>
        </div>
      </SimpleGrid>
    </div>
  )
}

export default ItemCart
