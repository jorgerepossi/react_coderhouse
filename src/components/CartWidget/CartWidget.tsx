import { FC } from 'react'
import { Box, Badge } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BiShoppingBag } from 'react-icons/bi'

import { useData } from '../../hooks/useData'

export const CartWidget: FC = () => {
  const { state } = useData()

  return (
    <Box>
      <Link to="/cart">
        <Box
          colorscheme="primary"
          height="30px"
          position="relative"
          width="30px"
        >
          <Badge
            alignItems="center"
            bg="primary"
            borderRadius="full"
            color="white"
            display="flex"
            fontSize="12px"
            height="20px"
            justifyContent="center"
            position="absolute"
            px="2"
            right="0px"
            top="-10px"
            width="20px"
          >
            {state.cart.products.length}
          </Badge>

          <BiShoppingBag size="25" />
        </Box>
      </Link>
    </Box>
  )
}
/*  alignContent="center"
            alignItems="center"
            bg="primary"
            borderRadius="50px"
            color="white"
            display="flex"
            fontSize="12px"
            height="20px"
            justifyContent="center"
            position="absolute"
            right="0px"
            top="-10px"
            width="20px" */
