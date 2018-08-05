import SimpleSchema from 'simpl-schema'

const ChannelsSchema = new SimpleSchema({
  name: {
    type: String
  },
  isDialogue: {
    type: Boolean,
    optional: true
  }
})

export default ChannelsSchema
