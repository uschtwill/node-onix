var _ = require('lodash');
var utils = require('../../utils');

var Publisher = require('./publisher');

module.exports = {
    tag: 'PublishingDetail',
    fields: {
        'publisher': Publisher, // Group ~P.19
        'status': { // P.20.1
            tag: 'PublishingStatus',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number,
            default: 4
        }
    }
};
