var _ = require('lodash');
var utils = require('../../utils');

var Price = require('./price');
var Title = require('./title');
var Language = require('./language');
var ProductId = require('./productid');
var WorkId = require('./workid');
var Contributor = require('./contributor');
var Subject = require('./subject');
var MainSubject = require('./mainsubject');
var Audience = require('./audience');
var SupplyDetail = require('./supplydetail');
var MediaFile = require('./mediafile');
var OtherText = require('./othertext');
var Imprint = require('./imprint');
var Publisher = require('./publisher');
var SalesRights = require('./salesright');

module.exports = {
    tag: 'product',
    array: true,
    fields: {
        'dataSupplierSpecificId': {
            tag: 'a001',
            raw: true
        },
        'messageType': {
            tag: 'a002',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number
        },
        'publishingStatus': {
            tag: 'b394',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number
        },
        'id': ProductId,
        'workId': WorkId,
        'form': {
            tag: 'b012',
            transform: String
        },
        'epubType': {
            tag: 'b211',
            transform: _.partialRight(utils.pad, 3),
            untransform: Number,
        },
        'cityOfPublication': {
            tag: 'b209'
        },
        'countryOfPublication': {
            tag: 'b083'
        },
        'publicationDate': {
            tag: 'b003',
            transform: utils.formatDate,
            untransform: utils.unformatDate
        },
        'title': Title,
        'prices': Price,
        'language': Language,
        'contributors': Contributor,
        'subjects': Subject,
        'mainsubject': MainSubject,
        'audiences': Audience,
        'medias': MediaFile,
        'supplydetail': SupplyDetail,
        'texts': OtherText,
        'imprint': Imprint,
        'publisher': Publisher,
        'salesRights': SalesRights,
        'numberOfPages': {
            tag: 'b061',
            untransform: Number
        },
    }
}
