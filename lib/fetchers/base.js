'use strict';

const request = require('request'),
	constants = require('../constants');

function fetcher(url, callback) {

  request({
    url: url,
    headers: {
      'User-Agent': constants.CRESO_AGENT
    }
  }, function(err, response, body) {
	callback(err, response, body);
  });
}

module.exports = fetcher;
