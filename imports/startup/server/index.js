import { Meteor } from 'meteor/meteor'

import '../../api/messages'
import '../../api/channels'
import seed from './seed'

Meteor.startup(() => {
  seed()
})
