import React from 'react'
import { Formik } from 'formik'
import { Accounts } from 'meteor/accounts-base'
import { withRouter } from 'react-router'

import SignUpForm from './components/SignUpForm'
import validate from './utils/validate'

const initialValues = {
  username: '',
  email: '',
  password: ''
}

const onSubmit = (values) => Accounts.createUser(values, () => console.log('user created'))

const SignUp = () => (
  <Formik
    initialValues={initialValues}
    validate={validate}
    onSubmit={onSubmit}
    render={SignUpForm}
  />
)

export default withRouter(SignUp)
