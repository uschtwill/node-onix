var _ = require('lodash');
var utils = require('../../utils');

module.exports = {
    tag: 'title',
    fields: {
        type: {
            tag: 'b202',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number,
            default: 1
        },
        text: {
            tag: 'b203',
            transform: String
        },
        subtitle: {
            tag: 'b029',
            transform: String
        }
    },
    map: {
        to: 'text'
    }
};
