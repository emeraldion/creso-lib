'use strict';

const currencies = require('../../lib/constants/currencies'),
	expect = require('chai').expect,

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
