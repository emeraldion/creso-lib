'use strict';

const _ = require('lodash'),
  changes = require('../../../lib/fetchers/eurotlx/changes'),
  currencies = require('../../../lib/constants/currencies'),
  expect = require('chai').expect;

describe('changes eurotlx fetcher', function() {
  it('fetches changes', function(done) {
    changes(function(err, values) {
      expect(err).to.be.null;
      expect(values).to.be.defined;

      _.forEach(currencies, function(currency) {
      	expect(values[currency]).to.be.defined;
      });
      done();
    });
  });
});
