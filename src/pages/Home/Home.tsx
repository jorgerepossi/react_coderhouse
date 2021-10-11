import React, { FC } from 'react'
import { Container, Stack, Flex } from '@chakra-ui/react'

import { Banner } from '../../components/common'
import { ItemListContainer } from '../../components/ItemListContainer'
import { ShopServices } from '../../components/'

export const Home: FC = () => {
  return (
    <Flex flexDirection="column" width="100%">
      <Container maxWidth="container.xl">
        <Stack>
          <Banner />
        </Stack>
        <ItemListContainer />
      </Container>
      <ShopServices />
    </Flex>
  )
}
