import SimpleSchema from 'simpl-schema'

const ChannelSchema = new SimpleSchema({
  name: {
    type: String
  },
  isDialogue: {
    type: Boolean,
    optional: true
  }
})

export default ChannelSchema
