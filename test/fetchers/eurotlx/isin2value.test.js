'use strict';

const isin2value = require('../../../lib/fetchers/eurotlx/isin2value'),
  expect = require('chai').expect;

describe('isin2value eurotlx fetcher', function() {
  it('fetches a real isin', function(done) {
    isin2value('XS1115184753', function(err, value) {
      expect(err).to.be.null;
      expect(value).to.be.defined;
      done();
    });
  });

  it('handles a fake isin', function(done) {
    isin2value('XS0000000000', function(err, value) {
      expect(err).to.be.defined;
      expect(value).to.be.null;
      done();
    });
  });
});
