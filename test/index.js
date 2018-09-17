const assert = require('assert');
import RFC5646 from '../build/main.js';

describe('getName', () => {
  it('en', () => {

    assert(RFC5646.getName('en'), 'English');
  })
});