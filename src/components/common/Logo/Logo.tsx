import React from 'react'
import { Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export const Logo = () => {
  return (
    <Link to="/">
      <Image
        src="https://www.verbostudio.com/musiccenter/img/logo.svg"
        height="50"
        width="150"
        alt="Logo Music Store"
      />
    </Link>
  )
}
