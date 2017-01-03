'use strict';

const Columns = require('../constants/columns');
const Model = require('adelia').Model;
const Bond = Model.create('bond');

Bond.prototype.primaryKey = Columns.ISIN;

Bond.prototype.tableName = 'creso_obbligazioni';

module.exports = Bond;
