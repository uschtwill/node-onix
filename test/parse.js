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
    var product = o3feed.products[0];

    it('should correctly parse ONIX 3 xml', function() {
        o3feed.header.sender.name.should.eql('Sender Name');
        product.description.title.element.text.should.eql('The Title');
    });

    it('should find the product ISBN', function() {
      product.ids[0].value.should.eql('978XXXXXXXXXX');
    });

    it('should find the product author', function() {
      product.description.contributors[0].name.should.eql('AuthorFirst AuthorLast');
      product.description.contributors[0].note.should.eql('bio notes');
    });

    it('should find the product publisher name', function() {
      product.publishingDetail.publisher.name.should.eql('The Publisher');
    });

    it('should find the product publishing status', function() {
      product.publishingDetail.status.should.eql(4);
    });

    it('should find the product availability', function() {
      product.productSupply[0].details[0].availability.should.eql(20);
    });

    it('should find the product supply dates', function() {
      product.productSupply[0].details[0].dates[0].role.should.eql(8);
    });

    it('should find the product prices', function() {
      prices = product.productSupply[0].details[0].prices;
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

    it('shoudl find market territory', function() {
      product.productSupply[0].market[0].territory.countries.includes('BE').should.be.true;
    });

    it('should find sales restrictions for product supplies', function() {
      noRestrictions = product.productSupply[0].market[0].salesRestrictions;
      restrictions = product.productSupply[1].market[0].salesRestrictions;
      should.not.exist(noRestrictions);
      restrictions[0].type.should.eql(6);
    });

    it('should find the market publishing status', function() {
      product.productSupply[0].marketPublishingDetail[0].status.should.eql(4);
    });

    it('should find the market date', function() {
      product.productSupply[0].marketPublishingDetail[0].dates[0].role.should.eql(1);
      product.productSupply[0].marketPublishingDetail[0].dates[0].date.should.eql(new Date(2015, 4, 27));
    });

    it('should find the subjects', function() {
      main = product.description.subjects[0];
      main.scheme.should.eql('10');
      main.code.should.eql('FIC050000');
      main.main.should.be.true;

      nonMain = product.description.subjects[1];
      nonMain.main.should.be.false;

      keywords = product.description.subjects[3];
      keywords.text.includes('keyword1').should.be.true;
    });
});
