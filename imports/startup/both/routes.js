import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Chat from '../../ui/screens/Chat'
import Profile from '../../ui/screens/Profile'

const Router = () => (
  <Fragment>
    <Route exact path='/' component={Chat} />
    <Route exact path='/profile' component={Profile} />
  </Fragment>
)

export default Router
