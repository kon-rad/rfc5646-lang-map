const assert = require('assert');
const RFC5646 = require('../build/main.build.js');

describe('getName', () => {
  it('en', () => {
    console.log('RFC5646:',RFC5646);
    // let rfc = new RFC5646();
    // assert(rfc.getName('en'), 'English');
    assert(RFC5646.getName('en'), 'English');
  })
});