var _ = require('lodash');
var utils = require('../../utils');

var Price = require('./price');
var ProductId = require('./productid');
var ProductDescription = require('./productdescription');
var PublishingDetail = require('./publishingdetail');
var ProductSupply = require('./productsupply');

module.exports = {
    tag: 'Product',
    array: true,
    fields: {
        'record': {
            tag: 'RecordReference', // Group P.1
            raw: true
        },
        'notification': {
            tag: 'NotificationType',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number
        },
        'ids': ProductId, // Group P.2
        'description': ProductDescription, // Block 1
        'publishingDetail': PublishingDetail, // Block 4
        'productSupply': ProductSupply // Block 6
      }
}
