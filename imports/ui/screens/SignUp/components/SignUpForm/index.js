import React from 'react'
import { Form } from 'formik'

import FormGroup from '../../../../components/FormGroup/'
import FIELDS from './config/fields'

const SignUpForm = ({
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
      Sign up
    </button>
  </Form>
)

export default SignUpForm
