var _ = require('lodash');
var utils = require('../../utils');

var Title = require('./title');
var Contributor = require('./contributor');
var Language = require('./language');
var Subject = require('./subject');

module.exports = {
    tag: 'DescriptiveDetail',
    fields: {
        'title': Title, // Group P.6
        'contributors': Contributor, // Group P.7
        'languages': Language, // Group P.10
        'subjects': Subject
    }, map: {
      to: 'title'
    }
};
