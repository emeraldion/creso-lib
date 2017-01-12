'use strict';

const quoteFetcher = require('../../../lib/fetchers/boerse-berlin/quote'),
  expect = require('chai').expect;

describe('börse berlin quote fetcher', function() {
  it('fetches quotes of a real isin', function(done) {
    quoteFetcher('XS0541528682', function(err, value) {
      expect(err).to.be.null;
      expect(value).to.be.defined;
      done();
    });
  });

  it('handles a fake isin', function(done) {
    quoteFetcher('XS0000000000', function(err, value) {
      expect(err).to.be.defined;
      expect(err.code).to.equal('ENOTFOUND');
      expect(value).to.be.null;
      done();
    });
  });
});
