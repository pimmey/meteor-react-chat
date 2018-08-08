import React, { PureComponent } from 'react'
import { Meteor } from 'meteor/meteor'
import { withRouter } from 'react-router'
import styled from 'styled-components'

import { addMessage } from '../../../../../../../api/messages/methods'

const Form = styled.form`
  position: fixed;
  bottom: 0;
`

const Input = styled.input`
  width: calc(100vw - 200px);
  height: 48px;
  padding-left: 16px;
  border: 1px solid lightgray;
  border-bottom-color: white;
`

const InputWrapper = styled.div`
  position: relative;
`

const Button = styled.button`
  position: absolute;
  top: 50%;
  right: 16px;
  padding: 8px 16px;
  color: white;
  background: black;
  border-radius: 16px;
  transform: translateY(-50%);
`

class NewMessageForm extends PureComponent {
  state = {
    message: ''
  }

  sendMessage = (e) => {
    e.preventDefault()

    const { message } = this.state

    const {
      match: {
        params: {
          id: channelId,
          type: channelType
        }
      }
    } = this.props

    if (message === '') {
      return
    }

    const newMessage = {
      message,
      channelId,
      userId: Meteor.userId(),
      isDirect: channelType === 'direct'
    }

    return addMessage.call(newMessage, (err) => {
      if (err) {
        return console.error(err)
      } else {
        return this.setState({ message: '' }) // Reset message input
      }
    })
  }

  changeMessage = ({
    target: {
      value: message
    }
  }) => this.setState({ message })

  render () {
    return (
      <Form onSubmit={this.sendMessage}>
        <InputWrapper>
          <Input
            value={this.state.message}
            onChange={this.changeMessage}
            placeholder="Type a message"
          />
          <Button type="submit">Send</Button>
        </InputWrapper>
      </Form>
    )
  }
}

export default withRouter(NewMessageForm)
