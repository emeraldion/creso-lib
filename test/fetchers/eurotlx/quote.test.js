'use strict';

const quoteFetcher = require('../../../lib/fetchers/eurotlx/quote'),
  expect = require('chai').expect;

describe('eurotlx quote fetcher', function() {
  it('fetches quotes of a real isin', function(done) {
    quoteFetcher('XS1115184753', function(err, value) {
      expect(err).to.be.null;
      expect(value).to.be.defined;
      done();
    });
  });

  it('handles a fake isin', function(done) {
    quoteFetcher('XS0000000000', function(err, value) {
      expect(err).to.be.defined;
      expect(value).to.be.null;
      done();
    });
  });
});
