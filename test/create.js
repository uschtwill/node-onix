var should = require('should');
var onix = require('../');

describe('Creating', function () {
    it('should correctly create ONIX 3', function() {
        var xml = onix.create({
            sender: {
                senderName: "Christian Roy",
                emailAddress: "roychristian@gmail.com"
            },
            sentDateTime: new Date(2017, 2, 23)
        }, '3.0');

        console.log(xml);
    });
});
