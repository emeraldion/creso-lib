'use strict';

const _ = require('lodash'),
  request = require('request'),
  endpoints = require('./endpoints'),
  constants = require('../../constants'),
  utils = require('../../utils'),

  EXPIRATION_BEGIN = '>Data di scadenza<',
  EXPIRATION_END = '<',
  CADENCE_BEGIN = '>Frequenza di pagamento<',
  CADENCE_END = ' Mesi<',
  RATE_BEGIN = '>Tasso cedola in corso<',
  RATE_END = '<',
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

    let value = body,
      expiration,
      cadence,
      rate;

    expiration = value.substr(value.indexOf(EXPIRATION_BEGIN) + EXPIRATION_BEGIN.length + 17, 20);
	expiration = expiration.substring(0, expiration.indexOf(EXPIRATION_END));

    expiration = utils.flipdate(expiration);

    cadence = value.substr(value.indexOf(CADENCE_BEGIN) + CADENCE_BEGIN.length + 17, 20);
    cadence = cadence.substring(0, cadence.indexOf(CADENCE_END));

    if (value.indexOf(RATE_BEGIN) === -1) {
      rate = 0;
    } else {
      rate = value.substr(value.indexOf(RATE_BEGIN) + RATE_BEGIN.length + 17, 20);
      rate = rate.substring(0, rate.indexOf(RATE_END));

      rate = utils.comma2dot(rate);
    }

    const bond = {
    	expiration: expiration,
    	cadence: cadence,
    	rate: rate
    };

    callback(null, bond);
  });
}

module.exports = fetcher;
