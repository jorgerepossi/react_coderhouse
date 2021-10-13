import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import {
  Flex,
  Stack,
  Box,
  IconButton,
  useDisclosure,
  Button,
  Input
} from '@chakra-ui/react'
import { GrMenu } from 'react-icons/gr'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'

import { MenuLink } from '../../../types/interfaces'

import Menu from './../../../api/MenuLinks.json'

export const Nav: FC = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Stack>
      <Flex display={['none', 'none', 'flex', 'flex']}>
        {Menu.map(({ id, link, name }: MenuLink) => {
          return (
            <Box key={id} mx="20px">
              <Link to={`/category/${link}`}> {name} </Link>
            </Box>
          )
        })}
      </Flex>

      <Drawer
        finalFocusRef={btnRef}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          {Menu.map(({ id, link, name }: MenuLink) => {
            return (
              <Box key={id} mx="20px">
                <Link to={`/category/${link}`}> {name} </Link>
              </Box>
            )
          })}
        </DrawerContent>
      </Drawer>
      <IconButton
        ref={btnRef}
        aria-label="menu"
        display={['flex', 'flex', 'none', 'none']}
        icon={<GrMenu />}
        variant="primary"
        size="lg"
        onClick={onOpen}
      />
    </Stack>
  )
}

export const FooterNav: FC = (): JSX.Element => {
  return (
    <Stack>
      <Flex flexDirection={['column', 'column', 'row', 'row']}>
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
