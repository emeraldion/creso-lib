'use strict';

const _ = require('lodash'),
  changesFetcher = require('../../../lib/fetchers/eurotlx/changes'),
  currencies = require('../../../lib/constants/currencies'),
  expect = require('chai').expect;

describe('eurotlx changes fetcher', function() {
  it('fetches changes', function(done) {
    changesFetcher(function(err, values) {
      expect(err).to.be.null;
      expect(values).to.be.defined;

      _.forEach(currencies, function(currency) {
        expect(values[currency]).to.be.defined;
      });
      done();
    });
  });
});
