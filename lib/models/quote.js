'use strict';

const Model = require('adelia').Model;
const Quote = Model.create('quote');

Quote.prototype.tableName = 'creso_quotazioni';

module.exports = Quote;
