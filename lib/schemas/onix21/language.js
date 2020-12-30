var _ = require('lodash');
var utils = require('../../utils');

module.exports = {
    tag: 'language',
    fields: {
        role: {
            tag: 'b253',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number,
            default: 1
        },
        code: {
            tag: 'b252',
        }
    },
    map: {
        to: 'code'
    }
};
