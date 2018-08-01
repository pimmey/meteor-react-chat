import SimpleSchema from 'simpl-schema'

const MessagesSchema = new SimpleSchema({
  userId: {
    type: String
  },
  chatId: {
    type: String
  },
  message: {
    type: String
  }
})

export default MessagesSchema
