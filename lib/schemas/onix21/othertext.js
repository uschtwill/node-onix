var _ = require('lodash');
var utils = require('../../utils');

module.exports = {
    tag: 'othertext',
    array: true,
    fields: {
        type: {
            tag: 'd102',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number
        },
        content: {
            tag: 'd104',
            cdata: true
        }
    }
};
