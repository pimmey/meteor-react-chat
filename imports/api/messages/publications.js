import { Meteor } from 'meteor/meteor'
import SimpleSchema from 'simpl-schema'

import Messages from './collection'

Meteor.publish('messages.all', () => Messages.find())

Meteor.publishComposite('messages.byChannelId', function ({
  channelId,
  isDirect
}) {
  new SimpleSchema({
    channelId: {
      type: String
    }
  }).validate({ channelId })

  if (isDirect && !channelId.split('-').includes(Meteor.userId())) {
    return this.ready()
  }

  return {
    find () {
      return Messages.find({ channelId })
    },

    children: [{
      find (message) {
        return Meteor.users.find({
          _id: message.userId
        })
      }
    }]
  }
})
