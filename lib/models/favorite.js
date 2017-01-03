'use strict';

const Model = require('adelia').Model;
const Favorite = Model.create('favorite');

Favorite.prototype.tableName = 'creso_preferiti';

module.exports = Favorite;
