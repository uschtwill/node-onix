var _ = require('lodash');
var utils = require('../../utils');

module.exports = {
    tag: 'salesrights',
    array: true,
    fields: {
        type: {
            tag: 'b089',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number,
            default: 02
        },
        territory: {
            tag: 'b388',
            default: 'WORLD'
        },
        countryCode: {
            tag: 'b090',
        }
    },
    map: {
        to: 'territory'
    }
};