import { ValidatedMethod } from 'meteor/mdg:validated-method'

import Messages from './collection'
import MessagesSchema from './schema'

export const addMessage = new ValidatedMethod({
  name: 'messages.addMessage',
  validate: MessagesSchema.validator(),
  run (message) {
    console.log('message', message)
    Messages.insert(message)
  }
})
