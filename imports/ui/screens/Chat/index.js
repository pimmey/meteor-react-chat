import React from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import ChannelList from './components/ChannelList'
import UserList from './components/UserList'
import Main from './components/Main'

const Container = styled.div`
  display: flex;
  height: 100vh;
`

const Aside = styled.aside`
  width: 200px;
  margin-right: -1px;
  border-right: 1px solid lightgray;
`

const Chat = ({
  loading,
  redirect
}) => {
  // If this is a direct channel where user doesn't belong - redirect away
  if (redirect) {
    return (
      <Redirect
        to={{ pathname: '/channel' }}
      />
    )
  }

  // Otherwise render chat
  return (
    loading ? (
      <div>Loading users</div>
    ) : (
      <Container>
        <Aside>
          <div>Channels</div>
          <ChannelList />
          <div>Users</div>
          <UserList />
        </Aside>
        <Main />
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
