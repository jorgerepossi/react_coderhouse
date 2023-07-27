import { FC } from 'react'
import { Box, Container, Flex, Text, Button, Link } from '@chakra-ui/react'
import { BiShoppingBag } from 'react-icons/bi'

export const EmptyCart: FC = () => {
  return (
    <Container height="100%" maxWidth="container.xl">
      <Box flex="1" height="100%" maxHeight="500px">
        <Flex
          alignContent="center"
          alignItems="center"
          flex="1"
          flexDirection="column"
          h="80vh"
          justifyContent="center"
        >
          <Text color="primary" fontSize="xl" fontWeight="bold">
            Shopping Cart
          </Text>
          <Box color="grey.20">
            {' '}
            <BiShoppingBag size={150} />
          </Box>
          <Text color="text" my="5">
            {' '}
            You have no items in your shopping cart.{' '}
          </Text>
          <Button variant="primary">
            <Link href="/">Continue Shopping</Link>
          </Button>
        </Flex>
      </Box>
    </Container>
  )
}
