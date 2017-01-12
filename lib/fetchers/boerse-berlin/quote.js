'use strict';

const _ = require('lodash'),
  request = require('request'),
  baseFetcher = require('../base'),
  constants = require('../../constants'),
  endpoints = require('./endpoints'),
  utils = require('../../utils'),

  QUOTE_BEGIN = '_last">',
  QUOTE_END = '<',
  QUOTE_OFFSET = 0,
  QUOTE_LENGTH = 10,
  EOD_QUOTE_BEGIN = '_historicClose">',
  EOD_QUOTE_END = '<',
  EOD_QUOTE_OFFSET = 0,
  EOD_QUOTE_LENGTH = 10,
  ERROR_MARKER = 'Homepage</a></div';

function fetcher(isin, callback) {

  const url = endpoints.BOND_LOOKUP.replace('%ISIN%', isin);

  baseFetcher(url, function(err, response, body) {
    if (err) {
      callback(err, null);
      return;
    }

    if (body.indexOf(ERROR_MARKER) !== -1) {
      callback({code: 'ENOTFOUND'}, null);
      return;
    }

    let value = body;

    value = value.substr(value.indexOf(QUOTE_BEGIN) + QUOTE_BEGIN.length + QUOTE_OFFSET, QUOTE_LENGTH);
    value = value.substring(0, value.indexOf(QUOTE_END)).trim();

    // Fall back to previous EOD quote
    if (_.isEmpty(value) || value === '-') {
      value = body;

      value = value.substr(value.indexOf(EOD_QUOTE_BEGIN) + EOD_QUOTE_BEGIN.length + EOD_QUOTE_OFFSET, EOD_QUOTE_LENGTH);
      value = value.substr(0, value.indexOf(EOD_QUOTE_END)).trim();
    }

    callback(null, value);
  });
}

module.exports = fetcher;
