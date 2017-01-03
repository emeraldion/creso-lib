'use strict';

const _ = require('lodash'),
  expect = require('chai').expect,
  Bond = require('../../lib/models/bond'),
  Promise = require('bluebird');

describe('bond', function() {
  it('is defined', function() {
    expect(Bond).to.be.defined;
  });

  it('can be instantiated', function() {
    expect(function() {
      new Bond();
    }).to.not.throw;
  });

  describe('find', function() {
    let bond;

    beforeEach(function(done) {
      new Bond({
          isin: 'ES0000000001'
        })
        .save({
          force: true
        })
        .then(function(b) {
          bond = b;
          done();
        });
    });

    afterEach(function(done) {
      bond.delete()
        .then(function() {
          bond = undefined;
          done();
        });
    });

    it('finds the bond associated with the given isin', function(done) {
      Bond.find('ES0000000001')
        .then(function(b) {
          return b.get('isin');
        })
        .then(function(isin) {
           expect(isin).to.equal('ES0000000001');
        })
        .then(function() {
          done();
        });
    });
  });
});
