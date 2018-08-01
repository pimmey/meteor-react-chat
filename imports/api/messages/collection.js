import { Mongo } from 'meteor/mongo'

import MessagesSchema from './schema'

const Messages = new Mongo.Collection('messages')

Messages.attachSchema(MessagesSchema)

export default Messages
