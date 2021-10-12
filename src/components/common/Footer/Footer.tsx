import React, { FC } from 'react'
import { Container, Divider, Link, Stack, Text } from '@chakra-ui/react'
import { ImHeart } from 'react-icons/im'

import { Nav } from '../Nav/Nav'

export const Footer: FC = () => {
  return (
    <Stack as="footer" paddingTop={20} width="100%">
      <Container maxWidth="container.xl">
        <Stack marginY="5">
          <Nav direction={['column', 'row', 'column']} />
        </Stack>
        <Divider />
        <Stack alignItems="center" justifyContent="center" marginY="5">
          <Text alignItems="center" display="flex" fontSize="xs">
            Copyright &copy; 2021 | Hecho con
            <span style={{ marginRight: 5, marginLeft: 5 }}>
              <ImHeart />
            </span>
            by
            <Link
              color="primary"
              href="https://github.com/jorgerepossi/react_coderhouse"
              marginLeft={2}
              marginRight={2}
            >
              Jo Repossi
            </Link>
            All Rights Reserved.
          </Text>
        </Stack>
      </Container>
    </Stack>
  )
}
