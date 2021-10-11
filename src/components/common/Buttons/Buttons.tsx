import { BiShoppingBag } from 'react-icons/bi'
import { Button, Text } from '@chakra-ui/react'
import { useState } from 'react'

interface ButtonProps {
  handleClick: () => void
  isInCart: boolean
}

export const AddButton = ({ handleClick, isInCart }: ButtonProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleButtonClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      handleClick()
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Button
      disabled={isInCart}
      isLoading={isLoading}
      leftIcon={<BiShoppingBag />}
      loadingText="ADDING..."
      variant="primary"
      onClick={handleButtonClick}
    >
      <Text fontSize="12px">{!isInCart ? 'ADD TO CART' : 'IS ADDED'}</Text>
    </Button>
  )
}
export default AddButton
