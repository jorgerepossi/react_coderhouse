import React, { FC } from 'react'
import { Flex, Stack } from '@chakra-ui/react'

import { Header, Footer } from '../common/'
import { Base } from '../../types/interfaces'

export const Layout: FC<Base> = ({ children }) => {
  return (
    <Flex flexDirection="column" height="100vh">
      <Header />
      <Stack flex={1}>
        <Flex>{children}</Flex>
      </Stack>
      <Footer />
    </Flex>
  )
}
export default Layout
