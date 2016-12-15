'use strict';

const kinds = require('../constants/kinds');

function comma2dot(str) {
  return str
    .replace(/\./g, '')
    .replace(/,/g, '.');
}

function flipdate(str) {
	return str
	  .split('-')
	  .reverse()
	  .join('-');
}

function parseKind(str) {
	switch (str.toLowerCase()) {
		case 'obbligazioni sovranazionali / agency':
			return kinds.BOND;
	}
	return null;
}

module.exports = {
  comma2dot: comma2dot,
  flipdate: flipdate,
  parseKind: parseKind
};
