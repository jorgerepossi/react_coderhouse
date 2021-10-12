import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {  Box, Container, Flex, Spinner,  Text } from '@chakra-ui/react'

import { getFirestore } from '../../api/config'
import useBooleanState from '../../hooks/useBooleanState'
import { NewOrderCart } from '../../types/types'

const Order = () => {
  const { id }: { id: string } = useParams()
  const { state: isLoading, handleActive, handleInactive } = useBooleanState()
  const [isError, setIsError] = useState(false)
  const [orderState, setOrderState] = useState<NewOrderCart>({
    buyer: {
      userName: '',
      email: '',
      tel: ''
    },
    items: {
      products: [],
      quantities: 0,
      total: 0
    },
    total: 0
  })

  const handleGetOrderById = () => {
    const db = getFirestore()

    handleActive()
    db.collection('orders')
      .doc(id)
      .get()
      .then((data) => {
        if (!data.exists) {
          handleInactive()

          return setIsError(true)
        }
        setOrderState(data.data() as any)
        handleInactive()
      })
  }

  useEffect(() => {
    handleGetOrderById()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return (
      <Container maxWidth="container.xl">
        <Flex
          alignContent="center"
          alignItems="center"
          h="80vh"
          justifyContent="center"
        >
          <Spinner
            color="primary"
            emptyColor="gray.200"
            size="xl"
            speed="0.65s"
            thickness="4px"
          />
        </Flex>
      </Container>
    )
  }

  if (isError) {
    return (
      <Box>
        <h1>Error!!! document not found for id {id}</h1>
      </Box>
    )
  }

  return (
    <Container maxWidth="container.xl">
      <h1>Order {id}</h1>

      <Box>
        <h2>Buyer</h2>
        <Text>userName: {orderState.buyer.userName}</Text>
        <Text>email: {orderState.buyer.email}</Text>
        <Text>tel: {orderState.buyer.tel}</Text>
      </Box>

      <Box>
        Total : {orderState.total}
        <ul>
          {orderState.items.products.map(({ item, quantity }) => (
            <li key={item.id}>
              <p>{item.name}</p>
              <p>cantidad: {quantity}</p>
            </li>
          ))}
        </ul>
      </Box>
    </Container>
  )
}

export default Order
