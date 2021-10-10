import React, { FC, useState } from 'react'
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
            <Box key={id}>
              <Link to={`/category/${link}`}> {name} </Link>
            </Box>
          )
        })}
      </Flex>
    </Stack>
  )
}
