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
      loadingText="Adding to cart..."
      variant="primary"
      onClick={handleButtonClick}
    >
      <Text>{!isInCart ? 'ADD TO CART' : 'IS ADDED'}</Text>
    </Button>
  )
}
export default AddButton
