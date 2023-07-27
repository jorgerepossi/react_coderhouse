import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import { GrMenu } from 'react-icons/gr'

import { Logo } from '..'
import { CartWidget } from '../../CartWidget/CartWidget'
import { NavBar } from '../NavBar'
import { MenuLink } from '../../../types/interfaces'

import Menu from './../../../api/MenuLinks.json'
export const NavigationContent: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>(null)

  return (
    <>
      <Logo />
      <NavBar />
      <CartWidget />
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
        colorScheme="blue"
        display={['flex', 'flex', 'none', 'none']}
        icon={<GrMenu />}
        size="lg"
        variant="outline"
        onClick={onOpen}
      />
    </>
  )
}
