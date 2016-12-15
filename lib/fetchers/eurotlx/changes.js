'use strict';

const _ = require('lodash'),
  request = require('request'),
  endpoints = require('./endpoints'),
  constants = require('../../constants'),
  currencies = require('../../constants/currencies'),
  utils = require('../../utils'),

  CHANGE_BEGIN = 'EUR/',
  CHANGE_END = '<',
  ERROR_MARKER = '>bogus<';

function fetcher(callback) {

  const url = endpoints.CURRENCIES;

  request({
    url: url,
    headers: {
      'User-Agent': constants.CRESO_AGENT
    }
  }, function(err, response, body) {
    if (err || body.indexOf(ERROR_MARKER) !== -1) {
      callback(err, null);
      return;
    }

    const changes = {};

    _.forEach(currencies, function(currency) {
      let value = body;

      value = value
      	.substr(value.indexOf(CHANGE_BEGIN + currency) + 95, 40)
      	.substring(0, value.indexOf(CHANGE_END))
      	.trim();

      value = utils.comma2dot(value);

      changes[currency] = value;
    });

    callback(null, changes);
  });
}

module.exports = fetcher;