var _ = require('lodash');
var utils = require('../../utils');

module.exports = {
    tag: 'imprint',
    fields: {
        name: {
            tag: 'b079',
            transform: String
        }
    },
    map: {
        to: 'name'
    }
};
