import React, { FC } from 'react'
import { Container, Stack } from '@chakra-ui/react'

import { Banner } from '../../components/common'
import { ItemListContainer } from '../../components/ItemListContainer'
import { ShopServices } from '../../components/'

export const Home: FC = () => {
  return (
    <Container maxWidth="container.xl">
      <Stack>
        <Banner />
      </Stack>
      <ItemListContainer />
      <ShopServices />
    </Container>
  )
}
