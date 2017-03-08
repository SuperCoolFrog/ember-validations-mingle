# ember-validations-mingle

**if you are able to completely use ember-changeset-validations and uninstall ember-validations, this package is not necessary**

`ember-validations-mingle` is a package meant to ease the transition from ember-validation to ember-changeset-validation if you cannot totally convert your project at once.
  
Currently this plugin fixes the following issues we encountered:  
* clashes with ember-validations/messages


# Usage

## You can pass in a single validate function
```js
// validations/form.js
import {
  validatePresence,
} from 'ember-changeset-validations/validators';
import mingle from 'ember-validations-mingle';

const _validatePresence = mingle(validatePresence);

export default {
  firstName: _validatePresence({ presence: true }),
  lastName: _validatePresence({ presence: true })
};
```

## You can also pass in an object of functions

```js
// validations/form.js
import {
  validatePresence,
  validateLength
} from 'ember-changeset-validations/validators';
import mingle from 'ember-validations-mingle';

const mingles = mingle({
  validatePresence,
  validateLength
});

export default {
  firstName: [
    mingles.validatePresence({ presence: true }),
    mingles.validateLength({ min: 1 })
  ],
  lastName: [
    mingles.validatePresence({ presence: true }),
    mingles.validateLength({ min: 1 })
  ]
};
```

