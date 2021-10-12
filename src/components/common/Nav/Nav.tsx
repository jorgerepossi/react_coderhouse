import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Flex, Stack, Box } from '@chakra-ui/react'

import { MenuLink } from '../../../types/interfaces'

import Menu from './../../../api/MenuLinks.json'

export const Nav: FC = (): JSX.Element => {
  return (
    <Stack>
      <Flex>
        {Menu.map(({ id, link, name }: MenuLink) => {
          return (
            <Box key={id} mx="20px">
              <Link to={`/category/${link}`}> {name} </Link>
            </Box>
          )
        })}
      </Flex>
    </Stack>
  )
}

export const FooterNav: FC = (): JSX.Element => {
  return (
    <Stack>
      <Flex flexDirection={['column', 'column','row', 'row']}>
        {Menu.map(({ id, link, name }: MenuLink) => {
          return (
            <Box key={id} mx="20px">
              <Link to={`/category/${link}`}> {name} </Link>
            </Box>
          )
        })}
      </Flex>
    </Stack>
  )
}
