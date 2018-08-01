import React from 'react'
import { Form } from 'formik'

import FormGroup from '../../../../components/FormGroup/'
import FIELDS from './config/fields'

const SignInForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => (
  <Form>
    {FIELDS.map((field) => (
      <FormGroup
        key={field.name}
        {...field}
      />
    ))}
    <button
      type="submit"
      disabled={isSubmitting}
    >
      Sign in
    </button>
  </Form>
)

export default SignInForm
