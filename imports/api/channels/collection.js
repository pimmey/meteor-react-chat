import { Mongo } from 'meteor/mongo'

import ChannelsSchema from './schema'

const Channels = new Mongo.Collection('channels')

Channels.attachSchema(ChannelsSchema)

export default Channels
