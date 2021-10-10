import React, { FC, lazy } from 'react'

import ProductProvider from './providers/ContextProvider'
import Router from './routes/Router'

const App: FC = (): JSX.Element => {
  return (
    <ProductProvider>
      <Router />
    </ProductProvider>
  )
}

export default App
