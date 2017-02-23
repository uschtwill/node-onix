var _ = require('lodash');
var utils = require('../../utils');

var Sender = require('./sender')

module.exports = {
    tag: 'Header',
    fields: {
        sender: Sender,
        sentDateTime: {
            tag: 'SentDateTime',
            transform: utils.formatDate,
            untransform: utils.unformatDate
        }
    },
    attributes: {
       xmlns: {
         name: "xmlns",
         default: "http://ns.editeur.org/onix/3.0/reference" },
      release: {
        name: "release",
        default: "3.0"
      }
    }
};
