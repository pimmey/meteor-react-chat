import React, { PureComponent } from 'react'
import { Meteor } from 'meteor/meteor'
import { withRouter } from 'react-router'

import { addMessage } from '../../../../../api/messages/methods'

class NewMessageForm extends PureComponent {
  state = {
    message: ''
  }

  sendMessage = () => {
    const { message } = this.state
    const {
      match: {
        params: {
          id: channelId
        }
      }
    } = this.props

    return addMessage.call({
      message,
      channelId,
      userId: Meteor.userId()
    }, (err, res) => {
      if (err) {
        console.error(err)
      } else {
        console.log('success')
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
      <div>
        <input
          value={this.state.message}
          onChange={this.changeMessage}
        />
        <button onClick={this.sendMessage}>Send</button>
      </div>
    )
  }
}

export default withRouter(NewMessageForm)
