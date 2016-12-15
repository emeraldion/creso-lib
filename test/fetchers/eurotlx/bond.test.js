'use strict';

const _ = require('lodash'),
  bondFetcher = require('../../../lib/fetchers/eurotlx/bond'),
  expect = require('chai').expect;

describe('eurotlx bond fetcher', function() {
  it('fetches a bond by isin', function(done) {
    bondFetcher('XS1115184753', function(err, bond) {
      expect(err).to.be.null;
      expect(bond).to.be.defined;

      expect(bond.expiration).to.be.defined;
      expect(bond.cadence).to.be.defined;
      expect(bond.rate).to.be.defined;

      done();
    });
  });
});
