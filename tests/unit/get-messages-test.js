import { module, test } from 'qunit';
import getMessages from 'ember-validations-mingle/utils/get-messages';
import EmberChangesetValidationMessages from 'ember-changeset-validations/utils/messages';

var _requirejs, _requireModule;

module('Addon | Utils | get messages', {
  beforeEach() {
    _requirejs = window.requirejs;
    _requireModule = window.requireModule;
  },
  afterEach() {
    window.requirejs = _requirejs;
    window.requireModule = _requireModule;
  }
});

test('is retrieves correct messages', function(assert) {
  let testAppModule = 'test-application/validations/messages';
  let entries = {
    'ember-validations/messages': 'test1',
    [testAppModule]: 'test2'
  };
  let module;

  window.requireModule = str => ({ default: str });
  module = getMessages(entries, false);

  assert.equal(module, testAppModule, 'expected messages.js from the app to be returned from getMessages');
});

test('is returns default from ember-changeset-validations when app specific messages.js is not found',
  function(assert) {
    let entries = {
      'ember-validations/messages': 'test1',
    };
    let module;

    window.requireModule = str => ({ default: str });
    module = getMessages(entries, false);

    assert.deepEqual(module, EmberChangesetValidationMessages, 'expected ember-changeset-validation defaults to be returned');
  });
