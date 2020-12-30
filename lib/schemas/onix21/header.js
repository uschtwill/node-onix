var _ = require('lodash');
var utils = require('../../utils');

module.exports = {
    tag: 'header',
    fields: {
        'from.company': {
            tag: 'm174'
        },
        'from.person': {
            tag: 'm175'
        },
        'from.email': {
            tag: 'm283'
        },
        'sent': {
            tag: 'm182',
            transform: utils.formatDate,
            untransform: utils.unformatDate
        },
        'messageNumber': {
            tag: 'm180'
        },
    }
};
