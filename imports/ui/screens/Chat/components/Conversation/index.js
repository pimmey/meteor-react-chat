import React from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import { withRouter } from 'react-router'

import Messages from '../../../../../api/messages/collection'
import NewMessageForm from '../NewMessageForm'

const Conversation = ({
  loading,
  messages,
  chatrooms
}) => (
  <div>
    {messages.map(message => <div key={message._id}>{message.message}</div>)}
    <NewMessageForm />
  </div>
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

    return {
      loading: !subscription.ready(),
      messages: Messages.find().fetch()
    }
  })(Conversation)
)
