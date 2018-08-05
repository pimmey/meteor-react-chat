import { Meteor } from 'meteor/meteor'

import Messages from './collection'

Meteor.publish('messages.all', () => Messages.find())
Meteor.publish('messages.byChannelId', channelId => Messages.find({ channelId }))
