import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'

import 'normalize.css'
import '../../ui/styles/global'
import App from '../../ui/App'

Meteor.startup(() => {
  render(
    <App />,
    document.getElementById('app')
  )
})
