import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: lightgoldenrodyellow;
`

const Button = ({ children }) => <StyledButton>{children}</StyledButton>

export default Button
