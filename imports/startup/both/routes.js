import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Chat from '../../ui/screens/Chat'
import Profile from '../../ui/screens/Profile'
import SignIn from '../../ui/screens/SignIn'
import SignUp from '../../ui/screens/SignUp'

const Router = () => (
  <Fragment>
    <Route exact path='/' component={Chat} />
    <Route exact path='/profile' component={Profile} />
    <Route exact path='/sign-in' component={SignIn} />
    <Route exact path='/sign-up' component={SignUp} />
  </Fragment>
)

export default Router
