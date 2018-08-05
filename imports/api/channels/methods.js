import { ValidatedMethod } from 'meteor/mdg:validated-method'

import Channels from './collection'
import ChannelsSchema from './schema'

export const addChannel = new ValidatedMethod({
  name: 'channels.addChannel',
  validate: ChannelsSchema.validator(),
  run (channel) {
    Channels.insert(channel)
  }
})
