'use strict';

function comma2dot(str) {
  return str
    .replace(/\./g, '')
    .replace(/,/g, '.');
}

module.exports = {
  comma2dot: comma2dot
};
