var zombie = require('zombie');
var assert = require('assert');

var World = function (callback) {

    this.browser = new zombie({ runScripts: true, debug: true });

    this.visitMoneySupermarket = function(callback) {
        this.browser.visit("http://www.moneysupermarket.com")
            .then(function() {
                assert.equal(this.browser.text("title"), "MoneySuperMarket - Helping You Make The Most Of Your Money");
                this.browser.clickLink("#house-mainnav-car-insurance");
            })
            .then(function() {
                assert.ok(this.browser.success);
                assert.equal(this.browser.text("title"), "Compare Cheap Car Insurance Quotes - MoneySuperMarket");
            });
    };

    this.clickOnCarInsurance = function(callback) {
        // do something
    }

    callback(this);
};

exports.World = World;