'use strict';

const _ = require('lodash'),
  request = require('request'),
  baseFetcher = require('../base'),
  constants = require('../../constants'),
  endpoints = require('./endpoints'),
  utils = require('../../utils'),

  QUOTE_BEGIN = '>Prezzo<',
  QUOTE_END = '<',
  EOD_QUOTE_BEGIN = '>Prezzo di chiusura<',
  EOD_QUOTE_END = '<',
  ERROR_MARKER = 'This page is not available';

function fetcher(isin, callback) {

  const url = endpoints.ISIN_LOOKUP.replace('%ISIN%', isin);

  baseFetcher(url, function(err, response, body) {
    if (err || body.indexOf(ERROR_MARKER) !== -1) {
      callback(err, null);
      return;
    }

    let value = body;

    value = value
      .substr(value.indexOf(QUOTE_BEGIN) + QUOTE_BEGIN.length + 15, 20)
      .substring(0, value.indexOf(QUOTE_END));

    // Fall back to previous EOD quote
    if (_.isEmpty(value) || value === '-') {
      value = body;
      
      value = value
      	.substr(value.indexOf(EOD_QUOTE_BEGIN) + EOD_QUOTE_BEGIN.length + 15, 20)
      	.substr(0, value.indexOf(EOD_QUOTE_END));
    }

    value = utils.comma2dot(value);

    callback(null, value);
  });
}

module.exports = fetcher;
