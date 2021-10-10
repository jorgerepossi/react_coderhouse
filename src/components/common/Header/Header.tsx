import React, { FC } from 'react'
import { Container, Flex, Stack } from '@chakra-ui/react'

import { NavigationContent } from '../NavigationContent'

export const Header: FC = () => {
  return (
    <Stack
      as="header"
      borderBottomColor="#cccccc88"
      borderBottomStyle="solid"
      borderBottomWidth="1px"
      height="80px"
    >
      <Container height="80px" maxWidth="container.xl">
        <Flex alignItems="center" height="100%" justifyContent="space-between">
          <NavigationContent />
        </Flex>
      </Container>
    </Stack>
  )
}
