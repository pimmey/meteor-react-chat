import React from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import styled from 'styled-components'

import ChannelList from './components/ChannelList'
import Conversation from './components/Conversation'

const Container = styled.div`
  display: grid;
`

const Chat = ({ loading }) => (
  loading ? (
    <div>Loading users</div>
  ) : (
    <Container>
      <ChannelList />
      <Conversation />
    </Container>
  )
)

export default withTracker(() => {
  const usersSubscription = Meteor.subscribe('users.all')
  const loading = !usersSubscription.ready()

  return {
    loading
  }
})(Chat)
