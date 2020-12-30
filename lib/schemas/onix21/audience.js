var _ = require('lodash');
var utils = require('../../utils');

module.exports = {
    tag: 'audience',
    array: true,
    fields: {
        type: {
            tag: 'b204',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number,
            default: 1
        },
        value: {
            tag: 'b206',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number
        }
    },
    map: {
        to: 'value'
    }
};
