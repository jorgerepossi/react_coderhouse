import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Flex, Stack, Box } from '@chakra-ui/react'

import { MenuLink } from '../../../types/interfaces'

import Menu from './../../../api/MenuLinks.json'
interface Props {
  direction?: {}
}
export const Nav: FC<Props> = ({ direction }): JSX.Element => {
  return (
    <Stack>
      <Flex flexDirection={direction}>
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
