import { Mongo } from 'meteor/mongo'

import ChannelSchema from './schema'

const Channels = new Mongo.Collection('channels')

Channels.attachSchema(ChannelSchema)

export default Channels
