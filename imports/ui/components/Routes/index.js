import React from 'react'
import { Route } from 'react-router-dom'

import PrivateRoute from '../PrivateRoute'
import Chat from '../../screens/Chat'
import Profile from '../../screens/Profile'
import SignIn from '../../screens/SignIn'
import SignUp from '../../screens/SignUp'

const ROUTES = [
  {
    path: '/:id?',
    component: Chat,
    isPrivate: true
  },
  {
    path: '/profile',
    component: Profile,
    isPrivate: true
  },
  {
    path: '/sign-in',
    component: SignIn
  },
  {
    path: '/sign-up',
    component: SignUp
  }
]

const Routes = () => (
  ROUTES.map(({
    path,
    component,
    isPrivate
  }) => {
    const RouteComponent = isPrivate ? PrivateRoute : Route

    return (
      <RouteComponent
        key={path}
        path={path}
        component={component}
        exact
      />
    )
  })
)

export default Routes
