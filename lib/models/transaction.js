'use strict';

const Model = require('adelia').Model;
const Transaction = Model.create('transaction');

Transaction.prototype.tableName = 'creso_transazioni';

module.exports = Transaction;
