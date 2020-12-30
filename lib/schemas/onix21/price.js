var _ = require('lodash');
var utils = require('../../utils');

module.exports = {
    tag: 'price',
    array: true,
    fields: {
        code: {
            tag: 'j148',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number,
            default: 1
        },
        qualifier: {
            tag: 'j261',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number,
            default: 5
        },
        amount: {
            tag: 'j151',
            transform: Number
        },
        currency: {
            tag: 'j152',
            default: 'EUR'
        },
        discountPercent: {
            tag: 'j267',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number,
        },
        taxRate: {
            tag: 'j153',
        },
        taxRateCountry: {
            tag: 'j251',
        },
    },
    map: {
        to: 'amount'
    }
};
