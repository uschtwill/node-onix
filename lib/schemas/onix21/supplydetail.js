var _ = require('lodash');
var utils = require('../../utils');

var Price = require('./price');
var Stock = require('./stock');

module.exports = {
    tag: 'supplydetail',
    fields: {
        name: {
            tag: 'j137',
        },
        availabilityDeprc: {
            tag: 'j141',
            default: 20
        },
        shipDate: {
            tag: 'j142',
            transform: utils.formatDate,
            untransform: utils.unformatDate
        },
        saleDate: {
            tag: 'j143',
            transform: utils.formatDate,
            untransform: utils.unformatDate
        },
        availabilityNew: {
            tag: 'j396',
            default: 20
        },
        deliveryTime: {
            tag: 'j144',
        },
        stock: Stock,
        prices: Price
    }
};
