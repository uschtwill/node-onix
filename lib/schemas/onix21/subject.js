var _ = require('lodash');
var utils = require('../../utils');

module.exports = {
    tag: 'subject',
    array: true,
    fields: {
        identifier: {
            tag: 'b067',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number,
            default: 10
        },
        version: {
            tag: 'b068'
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
