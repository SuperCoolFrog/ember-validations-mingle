import {
  formatDescription,
  formatMessage
} from 'ember-validations-mingle/utils/format-message';
import getMessages from 'ember-validations-mingle/utils/get-messages';
import Ember from 'ember';

const { get, assign } = Ember;

export default function getMessage(key, type, value, context) {
  let messages = getMessages();
  let description = formatDescription(key);
  return formatMessage(get(messages, type), assign({ description }, context));
}
