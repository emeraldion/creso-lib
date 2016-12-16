'use strict';

const kinds = require('../constants/kinds');

function comma2dot(str) {
  return str
    .replace(/\./g, '')
    .replace(/,/g, '.');
}

function flipdate(str, separator) {
  separator = separator || '-';

  return str
    .split(separator)
    .map(function(el) {
      return pad(el, 2);
    })
    .map(function(el, i) {
      return i === 2 && el.length === 2 ? '20' + el : el;
    })
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

function pad(str, len) {
  let s = String(str);

  while (s.length < len) {
    s = '0' + s;
  }
  return s;
}

module.exports = {
  comma2dot: comma2dot,
  flipdate: flipdate,
  parseKind: parseKind
};
