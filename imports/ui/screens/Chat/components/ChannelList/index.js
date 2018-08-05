import React from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import { Link } from 'react-router-dom'

import Channels from '../../../../../api/channels/collection'

const ChannelList = ({
  loading,
  channels
}) => (
  <div>
    {channels.map(({
      _id: id,
      name
    }) => (
      <Link
        key={id}
        to={`/${id}`}
      >
        {name}
      </Link>
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
