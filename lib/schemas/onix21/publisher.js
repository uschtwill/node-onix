var _ = require('lodash');
var utils = require('../../utils');

module.exports = {
    tag: 'publisher',
    fields: {
        role: {
            tag: 'b291',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number,
            default: 1
        },
        nameType: {
            tag: 'b241',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number,
            default: 1
        },
        name: {
            tag: 'b081',
            transform: String
        }
    },
    map: {
        to: 'name'
    }
};
