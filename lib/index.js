var _ = require("lodash");
var builder = require('xmlbuilder');
var subjects = require("subjects-utils");

var utils = require('./utils');
var codes = require('./codes');


function addPrice(feed, price) {
    var el = feed.ele('Price');
    if (!_.isObject(price)) price = { amount: price };

    el.ele('PriceTypeCode', '01');
    el.ele('PriceQualifier', '05');
    el.ele('PriceAmount', price.amount);
    el.ele('CurrencyCode', (price.currency || 'USD').toUpperCase());
}

function addTitle(feed, title) {
    if (_.isString(title)) title = { text: title };

    var el = feed.ele('Title');
    el.ele('TitleType', {}, utils.pad(title.type || 1, 2));
    el.ele('TitleText', {}, title.text);
    if (title.subtitle) el.ele('Subtitle', {}, title.subtitle);
}

function addLanguage(feed, lang) {
    if (_.isString(lang)) lang = { code: lang };

    var el = feed.ele('Language');
    el.ele('LanguageRole', {}, utils.pad(lang.role || 1, 2));
    el.ele('LanguageCode', {}, lang.code.toLowerCase());
}

function addProduct(feed, definition, product) {
    var el = feed.ele('Product');

    el.ele('RecordReference', {}, product.id);
    el.ele('NotificationType', {}, utils.pad(product.notification));

    addTitle(el, product.title);
    addLanguage(el, product.language);

    // Add supplier
    var supplyDetail = el.ele('SupplyDetail');
        supplyDetail.ele('SupplierName', {}, definition.suplier.name);
        supplyDetail.ele('AvailabilityCode', {}, definition.suplier.availabilityCode);

    // Add prices
    if (product.price) product.prices = [product.price];
    _.each(product.prices, _.partial(addPrice, supplyDetail));
}


function create(definition, products) {
    definition =_.defaults(definition || {}, {
        sent: new Date(),
        from: {},
        suplier: {}
    });
    products = products || [];

    var feed = builder.create('ONIXMessage', {
        version: '1.0',
        encoding: 'UTF-8',
        standalone: false
    });

    feed.dtd('http://www.editeur.org/onix/2.1/reference/onix-international.dtd');

    // Add header
    var header = feed.ele('Header');
    header.ele('SentDate', utils.formatDate(definition.sent));
    if (definition.from.company) header.ele('FromCompany', {}, definition.from.company);
    if (definition.from.person) header.ele('FromPerson', {}, definition.from.person);
    if (definition.from.email) header.ele('FromEmail', {}, definition.from.email);

    // Add products
    _.each(products, _.partial(addProduct, feed, definition));

    return feed.end({
        pretty: true
    });
}

module.exports = {
    create: create,
    codes: codes
};