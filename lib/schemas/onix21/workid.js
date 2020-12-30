var _ = require('lodash');
var utils = require('../../utils');

module.exports = {
    tag: 'WorkIdentifier',
    fields: {
        type: {
            tag: 'b201',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number,
            default: 1
        },
        value: {
            tag: 'b244',
            transform: String
        }
    },
    map: {
        to: 'value'
    }
};
