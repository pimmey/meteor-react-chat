import React, { PureComponent } from 'react'
import moment from 'moment'

import { updateMessage } from '../../../../../../../api/messages/methods'

class Message extends PureComponent {
  state = {
    showForm: false,
    updatedMessage: ''
  }

  componentDidMount () {
    this.setState({ updatedMessage: this.props.message })
  }

  handleMessageChange = ({
    target: {
      value: updatedMessage
    }
  }) => this.setState({ updatedMessage })

  toggleShowForm = () => this.setState(({ showForm: prevShowForm }) => ({
    showForm: !prevShowForm
  }))

  saveMessage = (e) => {
    e.preventDefault()

    const {
      id: messageId
    } = this.props

    const { updatedMessage } = this.state

    updateMessage.call({
      messageId,
      updatedMessage
    }, (err, res) => {
      if (err) {
        return console.error(err)
      } else {
        return this.setState({ showForm: false })
      }
    })
  }

  render () {
    const {
      message,
      user: {
        username
      },
      editable,
      createdAt,
      updatedAt
    } = this.props

    const {
      showForm,
      updatedMessage
    } = this.state

    if (!showForm) {
      return (
        <div>
          <strong>{username} {moment(createdAt).fromNow()}:</strong> {message}
          {updatedAt && (
            <span>(updated)</span>
          )}
          {editable && (
            <button onClick={this.toggleShowForm}>edit</button>
          )}
        </div>
      )
    }

    return (
      <div>
        {showForm && (
          <form onSubmit={this.saveMessage}>
            <input
              value={updatedMessage}
              onChange={this.handleMessageChange}
            />
            <button onClick={this.toggleShowForm}>cancel</button>
            <button type="submit">save changes</button>
          </form>
        )}
      </div>
    )
  }
}

export default Message
