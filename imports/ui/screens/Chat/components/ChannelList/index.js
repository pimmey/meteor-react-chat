import React from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Channels from '../../../../../api/channels/collection'

const StyledLink = styled(Link)`
  display: block;
`

const ChannelList = ({
  loading,
  channels
}) => (
  <div>
    {channels.map(({
      _id: id,
      name
    }) => (
      <StyledLink
        key={id}
        to={`/channel/${id}`}
      >
        {name}
      </StyledLink>
    ))}
  </div>
)

export default withTracker(() => {
  const subscription = Meteor.subscribe('channels.all')

  return {
    loading: !subscription.ready(),
    channels: Channels.find().fetch()
  }
})(ChannelList)
