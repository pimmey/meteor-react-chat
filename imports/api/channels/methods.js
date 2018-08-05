import { ValidatedMethod } from 'meteor/mdg:validated-method'

import Channels from './collection'
import ChannelSchema from './schema'

export const addChannel = new ValidatedMethod({
  name: 'channels.addChannel',
  validate: ChannelSchema.validator(),
  run (channel) {
    Channels.insert(channel)
  }
})
