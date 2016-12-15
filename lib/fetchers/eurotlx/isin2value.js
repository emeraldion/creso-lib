'use strict';

const _ = require('lodash'),
  request = require('request'),
  endpoints = require('./endpoints'),
  constants = require('../../constants'),
  utils = require('../../utils'),

  VALUE_BEGIN = '>Prezzo<',
  VALUE_END = '<',
  EOD_VALUE_BEGIN = '>Prezzo di chiusura<',
  EOD_VALUE_END = '<',
  ERROR_MARKER = 'This page is not available';

function fetcher(isin, callback) {

  const url = endpoints.ISIN_LOOKUP.replace('%ISIN%', isin);

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

    let value = body;

    value = value.substring(value.indexOf(VALUE_BEGIN) + VALUE_BEGIN.length + 15, 20);
    value = value.substr(0, value.indexOf(VALUE_END));

    // Fall back to previous EOD value
    if (_.isEmpty(value) || value === '-') {
      value = body;
      value = value.substr(value.indexOf(EOD_VALUE_BEGIN) + EOD_VALUE_BEGIN.length + 15, 20);
      value = value.substr(0, value.indexOf(EOD_VALUE_END));
    }

    value = utils.comma2dot(value);

    callback(null, value);
  });
}

module.exports = fetcher;
