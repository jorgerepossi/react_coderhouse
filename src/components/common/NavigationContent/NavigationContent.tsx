import React, { FC } from 'react'

import { Logo } from '..'
import { CartWidget } from '../../CartWidget/CartWidget'
import { NavBar } from '../NavBar'

export const NavigationContent: FC = () => {
  return (
    <>
      <Logo />
      <NavBar/>
      <CartWidget />
    </>
  )
}
