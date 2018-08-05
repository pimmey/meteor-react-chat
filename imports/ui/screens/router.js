import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from '../components/Routes'

const Router = () => (
  <BrowserRouter>
    <Fragment>
      <Routes />
    </Fragment>
  </BrowserRouter>
)

export default Router
