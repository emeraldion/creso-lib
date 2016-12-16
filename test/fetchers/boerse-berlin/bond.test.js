'use strict';

const _ = require('lodash'),
  bondFetcher = require('../../../lib/fetchers/boerse-berlin/bond'),
  expect = require('chai').expect;

describe('boerse-berlin bond fetcher', function() {
  it('fetches a bond by isin', function(done) {
    bondFetcher('AT0000A19XC3', function(err, bond) {
      expect(err).to.be.null;
      expect(bond).to.be.defined;

      expect(bond.isin).to.equal('AT0000A19XC3');
      expect(bond.expiration).to.equal('2019-10-18');
      // expect(bond.cadence).to.equal(12);
      // expect(bond.rate).to.equal('0.25');

      done();
    });
  });

  it('handles an unlisted bond', function(done) {
    bondFetcher('AT0000000000', function(err, bond) {
      expect(err).to.be.defined;
      expect(err.code).to.equal('ENOTFOUND');
      expect(bond).to.be.null;

      done();
    });
  })
});
