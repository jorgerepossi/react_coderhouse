import React from 'react'
import { Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export const Logo = () => {
  return (
    <Link to="/">
      <Text color={'facebook.300'}>logo</Text>
    </Link>
  )
}
