import { Button, Box, Flex } from '@chakra-ui/react'

interface ItemCountProps {
  count: number
  decrement: () => void
  increment: () => void
  maxStock: number
}

export const ItemCount = ({
  count,
  decrement,
  increment,
  maxStock
}: ItemCountProps) => {
  return (
    <Flex>
      <Button
        disabled={count === 0}
        title="boton"
        variant="outline"
        onClick={decrement}
      >
        -
      </Button>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="center"
        width="40px"
      >
        {count}
      </Box>
      <Button
        disabled={maxStock === count}
        title="boton"
        variant="outline"
        onClick={increment}
      >
        +
      </Button>
    </Flex>
  )
}
