var zombie = require('zombie');
var assert = require('assert');

var World = function World(callback) {

    this.browser = new zombie({runScripts: true, debug: true});

    this.visitMoneySupermarket = function(callback) {
        this.browser.visit("http://www.moneysupermarket.com", callback);
    };

    this.clickOnCarInsuranceLink = function(callback) {
        this.browser.clickLink("#house-mainnav-car-insurance", callback);
    };

    this.thePageTitleIs = function(title, callback) {
        assert.equal(this.browser.text("title"), title);
        callback();
    };

    callback();
};

exports.World = World;