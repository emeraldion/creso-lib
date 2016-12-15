'use strict';

const quote = require('../../../lib/fetchers/eurotlx/quote'),
  expect = require('chai').expect;

describe('eurotlx quote fetcher', function() {
  it('fetches quotes of a real isin', function(done) {
    quote('XS1115184753', function(err, value) {
      expect(err).to.be.null;
      expect(value).to.be.defined;
      done();
    });
  });

  it('handles a fake isin', function(done) {
    quote('XS0000000000', function(err, value) {
      expect(err).to.be.defined;
      expect(value).to.be.null;
      done();
    });
  });
});
