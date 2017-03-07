/*
 *  Copied from ember-changeset-validations
 *    https://github.com/DockYard/ember-changeset-validations
 *
 *  @TODO contact for licensing
 */
import Ember from 'ember';

const {
  String: { dasherize, capitalize },
  isNone,
} = Ember;
const regex = /\{(\w+)\}/g;

export function formatDescription(key = '') {
  return capitalize(dasherize(key).split(/[_-]/g).join(' '));
}

export function formatMessage(message, context = {}) {
  if (isNone(message) || typeof message !== 'string') {
    return 'is invalid';
  }

  return message.replace(regex, (s, attr) => context[attr]);
}
