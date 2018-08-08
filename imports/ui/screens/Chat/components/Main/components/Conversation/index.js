import React from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import { withRouter } from 'react-router'

import Messages from '../../../../../../../api/messages/collection'
import Message from './components/Message/index'

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
        ...rest
      }) => (
        <Message
          key={id}
          id={id}
          {...rest}
        />
      ))}
    </div>
  )
)

export default withRouter(
  withTracker((props) => {
    const {
      match: {
        params: {
          id: channelId,
          type: channelType
        }
      }
    } = props

    const subscription = Meteor.subscribe('messages.byChannelId', {
      channelId,
      isDirect: channelType === 'direct'
    })

    const loading = !subscription.ready()

    const messages = Messages.find().fetch().map(({
      userId,
      ...rest
    }) => ({
      user: Meteor.users.findOne(userId), // This seems a bit expensive, but not sure how to avoid it
      editable: userId === Meteor.userId(),
      ...rest
    }))

    return {
      loading,
      messages
    }
  })(Conversation)
)
