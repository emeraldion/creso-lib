'use strict';

const _ = require('lodash'),
  bondFetcher = require('../../../lib/fetchers/eurotlx/bond'),
  expect = require('chai').expect;

describe('eurotlx bond fetcher', function() {
  it('fetches a bond by isin', function(done) {
    bondFetcher('XS1115184753', function(err, bond) {
      expect(err).to.be.null;
      expect(bond).to.be.defined;

      expect(bond.isin).to.equal('XS1115184753');
      expect(bond.expiration).to.equal('2024-10-03');
      expect(bond.cadence).to.equal(12);
      expect(bond.rate).to.equal('9.25');

      done();
    });
  });

  it('handles an unlisted bond', function(done) {
    bondFetcher('NZGOVDT427C1', function(err, bond) {
      expect(err).to.be.defined;
      expect(err.code).to.equal('ENOTFOUND');
      expect(bond).to.be.null;

      done();
    });
  })
});
