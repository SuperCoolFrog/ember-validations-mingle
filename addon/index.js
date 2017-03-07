import mingleMessage from 'ember-validations-mingle/mingles/message';
import Ember from 'ember';

const { set } = Ember;

const mingleObject = function(obj) {
  let keys = Object.keys(obj);

  return keys.reduce((mingled, k) => {
    set(mingled, k, mingleMessage(obj[k]));
    return mingled;
  }, {});
};

export default function mingle(validation) {
  let t = typeof validation;

  switch(t) {
    case 'function':
      return mingleMessage(validation);
    case 'object':
      return mingleObject(validation);
    default:
      throw 'you must provide a validation function or array of functions';
  }
}
