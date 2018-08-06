import React from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import ChannelList from './components/ChannelList'
import UserList from './components/UserList'
import Conversation from './components/Conversation'
import NewMessageForm from './components/NewMessageForm'

const Container = styled.div`
  display: grid;
`

const Chat = ({
  loading,
  redirect
}) => {
  if (redirect) {
    return (
      <Redirect
        to={{ pathname: '/channel' }}
      />
    )
  }

  return (
    loading ? (
      <div>Loading users</div>
    ) : (
      <Container>
        <ChannelList />
        <UserList />
        <Conversation />
        <NewMessageForm />
      </Container>
    )
  )
}

export default withTracker((props) => {
  const {
    match: {
      params: {
        id: channelId,
        type: channelType
      }
    }
  } = props

  let redirect = false

  if (channelType === 'direct' && !channelId.split('-').includes(Meteor.userId())) {
    redirect = true
  }

  const usersSubscription = Meteor.subscribe('users.all')
  const loading = !usersSubscription.ready()

  return {
    loading,
    redirect
  }
})(Chat)
