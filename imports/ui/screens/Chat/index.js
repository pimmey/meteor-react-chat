import React from 'react'
// import styled from 'styled-components'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'

import Messages from '../../../api/messages/collection'
import Message from './components/Message'

// const Div = styled.div`
//   background: lightblue;
// `

const Chat = ({
  loading,
  messages
}) => (
  <div>
    {messages.map(message => <div key={message._id}>{message.message}</div>)}
    <Message />
  </div>
)

export default withTracker(() => {
  let subscription

  subscription = Meteor.subscribe('messages.all')

  return {
    loading: !subscription.ready(),
    messages: Messages.find().fetch()
  }
  //
  // if (Meteor.isServer || (subscription && subscription.ready())) {
  //   return {
  //     messages: Messages.find({}, { sort: { createdAt: -1 } }).fetch()
  //   }
  // }
})(Chat)
