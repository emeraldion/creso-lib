'use strict';

const _ = require('lodash'),
  stockFetcher = require('../../../lib/fetchers/eurotlx/stock'),
  expect = require('chai').expect;

describe('eurotlx stock fetcher', function() {
  it('fetches a stock by isin', function(done) {
    stockFetcher('XS1115184753', function(err, stock) {
      expect(err).to.be.null;
      expect(stock).to.be.defined;
      
      expect(stock.isin).to.equal('XS1115184753');
      expect(stock.name).to.be.defined;
      expect(stock.market).to.be.defined;
      expect(stock.currency).to.be.defined;
      expect(stock.kind).to.be.defined;

      done();
    });
  });
});
