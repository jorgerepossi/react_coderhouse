import React, { FC } from 'react'
import { Container, Stack } from '@chakra-ui/react'

import { Nav } from '../Nav/Nav'

export const Footer: FC = () => {
  return (
    <Stack as="footer" width="100%">
      <Container maxWidth="container.xl">
        <Stack>
          <Nav />
        </Stack>
      </Container>
    </Stack>
  )
}
