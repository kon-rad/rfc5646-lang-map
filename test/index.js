const assert = require('assert');
import RFC5646 from '../build/main.js';

describe('getName', () => {
  it('should return English name for code', () => {

    assert(RFC5646.getName('en'), 'English');
  });

  it('should return Native name for code', () => {

    assert(RFC5646.getNativeName('fr-FR'), 'Français');
  });

  it('should validate existing language code', () => {

    assert(RFC5646.validateCode('fr-FR'), true);
  });

  it('should not validate non existing language code', () => {

    assert(RFC5646.validateCode('not-real'), false);
  });
});