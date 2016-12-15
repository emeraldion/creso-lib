'use strict';

const expect = require('chai').expect,
  currencies = require('../../lib/constants/currencies'),

  CODES = [
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

describe('currencies', function() {
  CODES.forEach(function(code) {
    it('support ' + code, function() {
      expect(currencies[code]).to.equal(code);
    });
  });
});
