'use strict';

const Columns = require('../constants/columns');
const Model = require('adelia').Model;
const Stock = Model.create('stock');

Stock.prototype.primaryKey = Columns.ISIN;

Stock.prototype.tableName = 'creso_titoli';

module.exports = Stock;
