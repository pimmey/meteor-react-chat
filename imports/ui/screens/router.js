import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from 'Startup/both/routes'

const Router = () => (
  <BrowserRouter>
    <Fragment>
      <Routes />
    </Fragment>
  </BrowserRouter>
)

export default Router