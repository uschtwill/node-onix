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
    var feed;

    it('should correctly parse ONIX 3 xml', function() {
        feed = onix.parse(onix3sample, '3.0');
        console.log(JSON.stringify(feed, null, 4));
    });
});
