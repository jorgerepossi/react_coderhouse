import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { ItemListContainer, ItemDetailContainer, Layout } from '../components'
import Order from '../pages/Order/Order'

import { Cart, Home, Error } from './../pages'

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact component={Home} path="/" />
          <Route
            exact
            component={ItemListContainer}
            path="/category/:categorie"
          />
          <Route exact component={ItemDetailContainer} path="/item/:id" />
          <Route exact component={Cart} path="/cart" />
          <Route exact component={Order} path="/order/:id" />
          <Route component={Error} path="*" />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
export default Router
