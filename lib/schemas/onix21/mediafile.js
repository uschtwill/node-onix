var _ = require('lodash');
var utils = require('../../utils');

module.exports = {
    tag: 'mediafile',
    array: true,
    fields: {
        type: {
            tag: 'f114',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number,
            default: 1
        },
        format: {
            tag: 'f115',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number,
        },
        linkType: {
            tag: 'f116',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number,
            default: 1
        },
        link: {
            tag: 'f117'
        }
    }
};
