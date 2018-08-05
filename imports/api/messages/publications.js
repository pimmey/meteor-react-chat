import { Meteor } from 'meteor/meteor'
import SimpleSchema from 'simpl-schema'

import Messages from './collection'
import Channels from '../channels/collection'

Meteor.publish('messages.all', () => Messages.find())

Meteor.publishComposite('messages.byChannelId', function (channelId) {
  new SimpleSchema({
    channelId: {
      type: String
    }
  }).validate({ channelId })

  // return Messages.find({ channelId })
  return {
    find () {
      return Messages.find({ channelId })
    },

    children: [{
      find (message) {
        // return Meteor.users.find({
        //   _id: message.userId
        // })

        return Channels.find({
          _id: message.channelId
        })
      }
    }]
  }
})
