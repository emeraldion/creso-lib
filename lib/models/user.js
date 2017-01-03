'use strict';

const Columns = require('../constants/columns');
const Model = require('adelia').Model;
const User = Model.create('user');

User.prototype.primaryKey = Columns.USER;

User.prototype.tableName = 'utenti';

module.exports = User;
