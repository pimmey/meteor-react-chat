import React from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import { withRouter } from 'react-router'

import Messages from '../../../../../api/messages/collection'
import NewMessageForm from '../NewMessageForm'

const Conversation = ({
  loading,
  messages
}) => (
  loading ? (
    <div>Loading messages</div>
  ) : (
    <div>
      {messages.map(({
        _id: id,
        message,
        user: {
          username
        }
      }) => (
        <div
          key={id}
        >
          <strong>{username}:</strong> {message}
        </div>
      ))}
      <NewMessageForm />
    </div>
  )
)

export default withRouter(
  withTracker((props) => {
    const {
      match: {
        params: {
          id: channelId
        }
      }
    } = props

    const subscription = Meteor.subscribe('messages.byChannelId', channelId)

    const loading = !subscription.ready()

    const messages = Messages.find().fetch().map(message => ({
      ...message,
      user: Meteor.users.findOne(message.userId)
    }))

    return {
      loading,
      messages
    }
  })(Conversation)
)
