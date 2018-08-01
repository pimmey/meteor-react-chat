import React from 'react'
import { Field } from 'formik'
import Input from './components/Input'

const FormGroup = ({
  name,
  label,
  type
}) => (
  <div>
    <label htmlFor={name}>
      {label}
    </label>
    <Field
      name={name}
      id={name}
      type={type}
      autoComplete={type === 'password' ? 'new-password' : undefined}
      component={Input}
    />
  </div>
)

export default FormGroup
