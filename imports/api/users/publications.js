import { Meteor } from 'meteor/meteor'

Meteor.publish('users.all', () => Meteor.users.find({}, {
  fields: {
    username: 1
  }
}))
