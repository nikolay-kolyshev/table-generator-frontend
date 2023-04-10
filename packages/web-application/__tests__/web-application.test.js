'use strict';

const webApplication = require('..');
const assert = require('assert').strict;

assert.strictEqual(webApplication(), 'Hello from webApplication');
console.info('webApplication tests passed');
