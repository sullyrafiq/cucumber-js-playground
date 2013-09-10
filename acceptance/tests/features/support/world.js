var zombie = require('zombie');
var assert = require('assert');

var World = function (callback) {

    this.browser = new zombie();

    this.visitMoneySupermarket = function(callback) {
        this.browser.visit("http://www.moneysupermarket.com")
            .then(function() {
                assert.equal(this.browser.text("title"), "MoneySuperMarket - Helping You Make The Most Of Your Money");
            });
    };

    this.clickOnCarInsurance = function(callback) {

    }

    callback(this);
};

exports.World = World;