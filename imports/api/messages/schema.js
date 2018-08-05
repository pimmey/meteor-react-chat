import SimpleSchema from 'simpl-schema'

const MessageSchema = new SimpleSchema({
  userId: {
    type: String
  },
  channelId: {
    type: String
  },
  message: {
    type: String
  }
})

export default MessageSchema
