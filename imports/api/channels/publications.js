import { Meteor } from 'meteor/meteor'

import Channels from './collection'

Meteor.publish('channels.all', () => Channels.find())
