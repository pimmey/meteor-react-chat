import React, { PureComponent } from 'react'
import { addMessage } from '../../../../../api/messages/methods'

class Message extends PureComponent {
  state = {
    message: ''
  }

  sendMessage = () => {
    const { message } = this.state

    return addMessage.call({
      message,
      chatId: '123',
      userId: '456'
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

export default Message
