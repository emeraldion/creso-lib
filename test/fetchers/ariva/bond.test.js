'use strict';

const _ = require('lodash'),
  bondFetcher = require('../../../lib/fetchers/ariva/bond'),
  expect = require('chai').expect;

describe('ariva bond fetcher', function() {
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

  it('fetches a bond by isin - six months cadence', function(done) {
    bondFetcher('NZGOVDT427C1', function(err, bond) {
      expect(err).to.be.null;
      expect(bond).to.be.defined;

      expect(bond.isin).to.equal('NZGOVDT427C1');
      expect(bond.expiration).to.equal('2027-04-05');
      expect(bond.cadence).to.equal(6);
      expect(bond.rate).to.equal('4.5');

      done();
    });
  })
});
