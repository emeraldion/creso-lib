'use strict';

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

module.exports = {
  comma2dot: comma2dot,
  flipdate: flipdate
};
