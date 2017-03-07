import message from 'ember-validations-mingle/utils/get-message';
import Ember from 'ember';

const { get, isEmpty, assign } = Ember;

export default function mingleMessage(validationFunction){
  return opts => {
    let optsMessage = get(opts, 'message');
    if(!isEmpty(optsMessage)) { return validationFunction(opts); }
    return validationFunction(assign({}, opts, { message}));
  };
}
