var fs = require('fs');
var should = require('should');
var path = require('path');

var onix = require('../');

describe('Parsing', function () {
    var EPUBDIRECT = fs.readFileSync(path.join(__dirname, './fixtures/epubDirect.onx'), { encoding: 'utf-8' });
    var feed

    it('should correctly parse xml', function() {
        feed = onix.parse(EPUBDIRECT);
        console.log(JSON.stringify(feed, null, 4));
        console.log(onix.create(feed));
    });
});

describe('Parsing ONIX 3', function() {
    var onix3sample = fs.readFileSync(path.join(__dirname, './fixtures/onix3sample.xml'), { encoding: 'utf-8' });
    var o3feed;
    o3feed = onix.parse(onix3sample, '3.0');

    it('should correctly parse ONIX 3 xml', function() {
        o3feed.header.sender.name.should.eql('Sender Name');
        o3feed.products[0].description.title.element.text.should.eql('The Title');
    });

    it('should find the product ISBN', function() {
      o3feed.products[0].ids[0].value.should.eql('978XXXXXXXXXX');
    });

    it('should find the product author', function() {
      o3feed.products[0].description.contributors[0].name.should.eql('AuthorFirst AuthorLast');
      o3feed.products[0].description.contributors[0].note.should.eql('bio notes');
    });

    it('should find the product publisher name', function() {
      o3feed.products[0].publishingDetail.publisher.name.should.eql('The Publisher');
    });

    it('should find the product publishing status', function() {
      o3feed.products[0].publishingDetail.status.should.eql(4);
    });

    it('should find the product availability', function() {
      o3feed.products[0].productSupply[0].details[0].availability.should.eql(20);
    });

    it('should find the product supply dates', function() {
      o3feed.products[0].productSupply[0].details[0].dates[0].role.should.eql(8);
    });

    it('should find the product prices', function() {
      prices = o3feed.products[0].productSupply[0].details[0].prices;
      prices.length.should.eql(45);
      prices[0].type.should.eql(4);
      prices[0].qualifier.should.eql(5);
      prices[0].currency.should.eql('EUR');
      prices[0].amount.should.eql(13.99);  // '13,99' in the ONIX file
      prices[1].amount.should.eql(13.99);  // '13.99' in the ONIX file
      prices[0].territory.countries.should.eql('BG');
      prices[2].dates[0].role.should.eql(14);
      prices[2].dates[0].date.should.eql(new Date(2015, 4, 27))
    });
});
