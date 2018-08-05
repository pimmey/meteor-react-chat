import { ValidatedMethod } from 'meteor/mdg:validated-method'
import SimpleSchema from 'simpl-schema'

import Messages from './collection'

export const addMessage = new ValidatedMethod({
  name: 'messages.addMessage',
  validate: new SimpleSchema({
    userId: {
      type: String
    },
    channelId: {
      type: String
    },
    message: {
      type: String
    }
  }).validator(),
  run (message) {
    Messages.insert(message)
  }
})
