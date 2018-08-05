import React, { PureComponent, Fragment } from 'react'
import { Formik } from 'formik'
import { Meteor } from 'meteor/meteor'
import { withRouter } from 'react-router'

import SignInForm from './components/SignInForm'
import validate from './utils/validate'

class SignIn extends PureComponent {
  initialValues = {
    user: '',
    password: ''
  }

  handleSubmit = ({
    user,
    password
  }) => Meteor.loginWithPassword(
    user,
    password,
    (err) => {
      if (err) {
        return console.error(err) // TODO: maybe add a toast here?
      }

      return this.props.history.push('/channel')
    }
  )

  logout = () => Meteor.logout(() => this.props.history.push('/'))

  render () {
    return (
      <Fragment>
        <Formik
          initialValues={this.initialValues}
          validate={validate}
          onSubmit={this.handleSubmit}
          render={SignInForm}
        />
        <button onClick={this.logout}>Logout</button>
      </Fragment>
    )
  }
}

export default withRouter(SignIn)
