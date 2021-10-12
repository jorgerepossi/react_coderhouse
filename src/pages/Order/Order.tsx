import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {
  Box,
  Container,
  Flex,
  Spinner,
  Stack,
  Text,
  Image,
  Badge,
  position
} from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption
} from '@chakra-ui/react'

import { getFirestore } from '../../api/config'
import useBooleanState from '../../hooks/useBooleanState'
import { NewOrderCart } from '../../types/types'
import { handleConvertPrice } from '../../components/ItemCart/ItemCart'

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
      <Stack>
        <Flex
          alignContent="center"
          alignItems="center"
          flexDirection="column"
          h="80vh"
          justifyContent="center"
        >
          <Box
            bg="white"
            borderRadius="md"
            boxShadow="xs"
            padding="20px"
            width="768px"
          >
            <h1>
             <b>  Order  </b>
              <Badge
                borderRadius="md"
                colorScheme="green"> {id} </Badge>
            </h1>
            <Box mt="20px">
              <h2>Buyer</h2>
              <Text fontSize="md">
                User:
                <Text as="span" color="text" textTransform="capitalize"> {orderState.buyer.userName} 
                </Text>
              </Text>
              <Text fontSize="md">
                
                Email: 
                <Text as="span" color="text"> {orderState.buyer.email} 
                </Text>
              </Text>
              <Text fontSize="md">
                Phone: 
                <Text as="span" color="text"> {orderState.buyer.tel} 
                </Text>
              </Text>
            </Box>

            <Box mt={5}>
              
              <Box>
                  <Box>
                    <Table variant="simple">
                      <Thead>
                        <Tr>
                          <Th>Image</Th>
                          <Th>Name</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                {orderState.items.products.map(({ item, quantity }) => (
                        <Tr  key={item.id}>
                          <Td width="100">
                          
                            <Box my="10px" style={{ position: 'relative' }}>
                              <Image
                                height="60px"
                                src={item.image}
                                width="60px"
                              />
                              <Badge
                                borderRadius="md"
                                colorScheme="green"
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 80
                                }}
                              >
                                {quantity}
                              </Badge>
                            </Box>
                          </Td>
                          <Td flex="1">
                            <Text fontSize="sm" textAlign="left">{item.name}</Text>
                          </Td>
                        </Tr>
                ))}
                </Tbody>
              </Table>
                </Box>
              </Box>
            </Box>
            <Box mt={2}> <Text>  Total :<b> $ {handleConvertPrice(orderState.total)} </b> </Text></Box>
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}

export default Order
