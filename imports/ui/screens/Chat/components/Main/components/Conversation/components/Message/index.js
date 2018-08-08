import React, {
  PureComponent,
  Fragment
} from 'react'
import moment from 'moment'

import {
  updateMessage,
  deleteMessage
} from '../../../../../../../../../api/messages/methods' // Wish I could configure aliases, but WebStorm bitches about them
import EditMessageForm from './components/EditMessageForm/index'
import ConfirmDeleteModal from './components/ConfirmDeleteModal/index'

class Message extends PureComponent {
  state = {
    showEditMessageForm: false,
    updatedMessage: '',
    showModal: false
  }

  componentDidMount () {
    this.setState({ updatedMessage: this.props.message })
  }

  handleMessageChange = ({
    target: {
      value: updatedMessage
    }
  }) => this.setState({ updatedMessage })

  toggleShowForm = () => this.setState(({ showEditMessageForm: prevShowForm }) => ({
    showEditMessageForm: !prevShowForm
  }))

  saveMessage = (e) => {
    e.preventDefault()

    const {
      id: messageId
    } = this.props

    const { updatedMessage } = this.state

    // Call the update message method and close edit form on success
    updateMessage.call({
      messageId,
      updatedMessage
    }, (err) => {
      if (err) {
        return console.error(err)
      } else {
        return this.setState({ showEditMessageForm: false })
      }
    })
  }

  openConfirmDeleteModal = () => this.setState({ showModal: true })

  closeConfirmDeleteModal = () => this.setState({ showModal: false })

  deleteMessage = () => {
    const {
      id: messageId
    } = this.props

    deleteMessage.call({ messageId }, (err) => {
      if (err) {
        return console.error(err)
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
      showEditMessageForm,
      updatedMessage,
      showModal
    } = this.state

    // Rendering the message item, with control buttons for editable messages
    if (!showEditMessageForm) {
      return (
        <div>
          <strong>{username} {moment(createdAt).fromNow()}:</strong> {message}
          {updatedAt && (
            <span>(updated)</span>
          )}
          {editable && (
            <Fragment>
              <button onClick={this.toggleShowForm}>edit</button>
              <button onClick={this.openConfirmDeleteModal}>delete</button>
              {showModal && (
                <ConfirmDeleteModal
                  isOpen={showModal}
                  close={this.closeConfirmDeleteModal}
                  deleteMessage={this.deleteMessage}
                />
              )}
            </Fragment>
          )}
        </div>
      )
    }

    // Rendering the edit message form
    return (
      <div>
        {showEditMessageForm && (
          <EditMessageForm
            saveMessage={this.saveMessage}
            handleMessageChange={this.handleMessageChange}
            toggleShowForm={this.toggleShowForm}
            updatedMessage={updatedMessage}
          />
        )}
      </div>
    )
  }
}

export default Message
