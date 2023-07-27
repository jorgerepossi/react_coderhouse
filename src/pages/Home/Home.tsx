import React, { FC } from 'react'
import { Container, Stack, Flex } from '@chakra-ui/react'

import { Banner } from '../../components/common'
import { ItemListContainer } from '../../components/ItemListContainer'
import { ShopServices } from '../../components/'
import Head from '../../components/common/Head/Head'

export const Home: FC = () => {
  return (
    <Flex flexDirection="column" width="100%">
      <Head title="Home | Music Center" />
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
