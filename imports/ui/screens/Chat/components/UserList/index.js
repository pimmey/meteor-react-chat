import React from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  display: block;
`

const ChannelList = ({
  users,
  currentUserId
}) => (
  <div>
    {users.map(({
      _id: id,
      username
    }) => (
      <StyledLink
        key={id}
        to={`/direct/${[id, currentUserId].sort().join('-')}`}
      >
        {username}
      </StyledLink>
    ))}
  </div>
)

export default withTracker(() => ({
  // Users except for yourself :-)
  users: Meteor.users.find({
    _id: {
      $ne: Meteor.userId()
    }
  }).fetch(),
  currentUserId: Meteor.userId()
}))(ChannelList)
