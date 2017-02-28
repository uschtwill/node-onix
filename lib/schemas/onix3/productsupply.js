var _ = require('lodash');
var utils = require('../../utils');

var Price = require('./price');
var SupplyDetail = require('./supplydetail')

module.exports = {
    tag: 'ProductSupply',
    fields: {
        'details': SupplyDetail // Group P.26
    },
    array: true,
    map: {
      to: 'title'
    }
};
