'use strict';

const _ = require('lodash'),

  CURRENCIES = [
    'USD',
    'AUD',
    'BRL',
    'CAD',
    'CHF',
    'CNY',
    'DEM',
    'DKK',
    'GBP',
    'HKD',
    'HUF',
    'ITL',
    'JPY',
    'MXN',
    'NOK',
    'NZD',
    'PLN',
    'RUB',
    'SEK',
    'TRY',
    'ZAR',
    'INR',
    'IDR',
    'THB',
    'EGP'
  ];

module.exports = _.reduce(CURRENCIES, function(buffer, currency) {
  const value = {};
  value[currency] = currency;
  return _.assign(buffer, value);
}, {});
