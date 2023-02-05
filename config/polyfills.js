'use strict';

if (typeof Promise === 'undefined') {

  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions.js');
}

// fetch() polyfill for making API calls.
require('whatwg-fetch');


Object.assign = require('object-assign');

if (process.env.NODE_ENV === 'test') {
  require('raf').polyfill(global);
}
