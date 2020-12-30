var _ = require('lodash');
var utils = require('../../utils');

module.exports = {
    tag: 'mainsubject',
    array: true,
    fields: {
        identifier: {
            tag: 'b191',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number,
            default: 10
        },
        code: {
            tag: 'b069',
            transform: function(s) { return String(s).toUpperCase(); }
        },
        heading: {
            tag: 'b070'
        },
    },
    map: {
        to: 'code'
    }
};
