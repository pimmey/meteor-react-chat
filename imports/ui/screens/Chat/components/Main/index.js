import React, { Component } from 'react'
import styled from 'styled-components'

import Conversation from './components/Conversation'
import NewMessageForm from './components/NewMessageForm'

const StyledMain = styled.main`
  flex: 1;
  padding-bottom: 56px;
  overflow-x: scroll;
`

class Main extends Component {
  componentDidMount () {
    // TODO: Conversation should scroll on sub .ready
    this.main.scrollTo(0, this.main.scrollHeight)
  }

  render () {
    return (
      <StyledMain innerRef={node => (this.main = node)}>
        <Conversation />
        <NewMessageForm />
      </StyledMain>
    )
  }
}

export default Main
