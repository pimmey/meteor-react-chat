import SimpleSchema from 'simpl-schema'

SimpleSchema.extendOptions(['denyInsert', 'denyUpdate'])

const MessageSchema = new SimpleSchema({
  userId: {
    type: String
  },
  channelId: {
    type: String
  },
  message: {
    type: String
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      console.log('this.isInsert', this.isInsert)
      if (this.isInsert) {
        return new Date()
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()}
      } else {
        this.unset()
      }
    },
    denyUpdate: true
  },
  updatedAt: {
    type: Date,
    autoValue: function () {
      if (this.isUpdate) {
        return new Date()
      }
    },
    denyInsert: true,
    optional: true
  }
})

export default MessageSchema
