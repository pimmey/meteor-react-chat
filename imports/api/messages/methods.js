import { Meteor } from 'meteor/meteor'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import SimpleSchema from 'simpl-schema'

import Messages from './collection'

export const addMessage = new ValidatedMethod({
  name: 'messages.addMessage',
  validate: new SimpleSchema({
    userId: {
      type: String
    },
    channelId: {
      type: String
    },
    message: {
      type: String
    },
    isDirect: {
      type: Boolean,
      optional: true
    }
  }).validator(),
  run (message) {
    const {
      isDirect,
      channelId
    } = message

    if (isDirect && !channelId.split('-').includes(this.userId)) {
      throw new Meteor.Error(
        'messages.addMessage.unauthorized',
        'You are not allowed to post this message'
      )
    }

    Messages.insert(message)
  }
})

export const updateMessage = new ValidatedMethod({
  name: 'messages.updateMessage',
  validate: new SimpleSchema({
    messageId: {
      type: String
    },
    updatedMessage: {
      type: String
    }
  }).validator(),
  run ({
    messageId,
    updatedMessage
  }) {
    const message = Messages.findOne(messageId)

    if (message.userId !== this.userId) {
      throw new Meteor.Error(
        'messages.updateMessage.unauthorized',
        'Cannot edit this message, it was not created by you'
      )
    }

    Messages.update(messageId, {
      $set: {
        message: updatedMessage
      }
    })
  }
})
