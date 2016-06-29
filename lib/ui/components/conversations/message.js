import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './message.html';
import './message.css';


Template.ConversationMessage.onCreated(function() {
  this.autorun(() => {
    new SimpleSchema({
      message: { type: Message }
    }).validate(Template.currentData());
  });
});

Template.ConversationMessage.helpers({
  isSent() {
    const instance = Template.instance();
    return instance.data.message.checkOwnership();
  },
  isRecieved() {
    const instance = Template.instance();
    return !instance.data.message.checkOwnership();
  }
});