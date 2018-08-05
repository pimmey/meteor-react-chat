import React, { PureComponent } from 'react'
import { Meteor } from 'meteor/meteor'
import { withRouter } from 'react-router'

import { addMessage } from '../../../../../api/messages/methods'

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
          id: channelId
        }
      }
    } = this.props

    if (message === '') {
      return
    }

    return addMessage.call({
      message,
      channelId,
      userId: Meteor.userId()
    }, (err, res) => {
      if (err) {
        return console.error(err)
      } else {
        console.log('success')
        return this.setState({ message: '' })
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
      <form onSubmit={this.sendMessage}>
        <input
          value={this.state.message}
          onChange={this.changeMessage}
        />
        <button type="submit">Send</button>
      </form>
    )
  }
}

export default withRouter(NewMessageForm)
