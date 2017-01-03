'use strict';

const Model = require('adelia').Model;
const Coupon = Model.create('coupon');

Coupon.prototype.tableName = 'creso_cedole';

module.exports = Coupon;
