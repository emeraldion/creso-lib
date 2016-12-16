'use strict';

const _ = require('lodash'),
  request = require('request'),
  baseFetcher = require('../base'),
  constants = require('../../constants'),
  endpoints = require('./endpoints'),
  utils = require('../../utils'),

  EXPIRATION_BEGIN = '>Fälligkeit\n',
  EXPIRATION_END = '<',
  CADENCE_BEGIN = '>Kuponperiode\n',
  CADENCE_END = '<',
  RATE_BEGIN = '">Kupon\n',
  RATE_END = '%',
  ERROR_MARKER = 'Hoppla';

function fetcher(isin, callback) {

  const url = endpoints.ISIN_LOOKUP.replace('%ISIN%', isin);

  baseFetcher(url, function(err, response, body) {
    if (err) {
      callback(err, null);
      return;
    }

    if (body.indexOf(ERROR_MARKER) !== -1) {
      callback({code: 'ENOTFOUND'}, null);
      return;
    }

    let value = body,
      expiration,
      cadence,
      rate;

    expiration = value.substr(value.indexOf(EXPIRATION_BEGIN) + EXPIRATION_BEGIN.length + 29, 20);
    expiration = expiration.substring(0, expiration.indexOf(EXPIRATION_END)).trim();

    expiration = utils.flipdate(expiration, '.');

    cadence = value.substr(value.indexOf(CADENCE_BEGIN) + CADENCE_BEGIN.length + 28, 20);
    cadence = cadence.substring(0, cadence.indexOf(CADENCE_END)).trim();

    switch (cadence.toLowerCase()) {
      case 'jahr':
        cadence = 12;
        break;
      case 'halbjahr':
        cadence = 6;
        break;
    }

    if (value.indexOf(RATE_BEGIN) === -1) {
      rate = 0;
    } else {
      rate = value.substr(value.indexOf(RATE_BEGIN) + RATE_BEGIN.length + 28, 20);
      rate = rate.substring(0, rate.indexOf(RATE_END)).trim();
    }

    const bond = {
      isin: isin,
      expiration: expiration,
      cadence: cadence,
      rate: rate
    };

    callback(null, bond);
  });
}

module.exports = fetcher;
