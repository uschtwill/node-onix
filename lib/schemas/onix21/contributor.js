var _ = require('lodash');
var utils = require('../../utils');

module.exports = {
    tag: 'contributor',
    array: true,
    fields: {
        sequence: {
            tag: 'b034',
            untransform: Number,
            default: 1
        },
        role: {
            tag: 'b035',
            default: 'A01'
        },
        name: {
            tag: 'b036',
        },
        nameInverted: {
            tag: 'b037',
        },
        note: {
            tag: 'b044'
        }
    }
};