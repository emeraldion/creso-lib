'use strict';

const _ = require('lodash'),
  request = require('request'),
  endpoints = require('./endpoints'),
  constants = require('../../constants'),
  currencies = require('../../constants/currencies'),
  markets = require('../../constants/markets'),
  utils = require('../../utils'),

  NAME_BEGIN = '>Descrizione<',
  NAME_END = '<',
  KIND_BEGIN = '>Tipologia<',
  KIND_END = '<',
  CURRENCY_BEGIN = '>Valuta di negoziazione<',
  CURRENCY_END = '<',
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
      name,
      kind,
      currency;

    name = value.substr(value.indexOf(NAME_BEGIN) + NAME_BEGIN.length + 15, 20);
    name = name.substring(0, name.indexOf(NAME_END));

    kind = value.substr(value.indexOf(KIND_BEGIN) + KIND_BEGIN.length + 15, 20);
    kind = kind.substring(0, kind.indexOf(KIND_END));

    kind = utils.parseKind(kind);

    currency = value.substr(value.indexOf(CURRENCY_BEGIN) + CURRENCY_BEGIN.length + 17, 20);
    currency = currency.substring(0, currency.indexOf(CURRENCY_END));

    const stock = {
      isin: isin,
      name: name,
      kind: kind,
      currency: currencies[currency],
      market: markets.EUROTLX
    };

    callback(null, stock);
  });
}

module.exports = fetcher;