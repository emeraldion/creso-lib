'use strict';

const Model = require('adelia').Model;
const Dividend = Model.create('dividend');

Dividend.prototype.tableName = 'creso_dividendi';

module.exports = Dividend;
