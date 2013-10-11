var zombie = require('zombie');
var assert = require('assert');

var pages = function(world) {
    this.browser = new zombie({runScripts: true, debug: true});
};

pages.prototype.visitMoneySupermarket = function(callback) {
    this.browser.visit("http://www.moneysupermarket.com", callback);
};

pages.prototype.clickOnCarInsuranceLink = function(callback) {
    this.browser.clickLink("#house-mainnav-car-insurance", callback);
};

pages.prototype.thePageTitleIs = function(title) {
    assert.equal(this.browser.text("title"), title);
};

exports.pagesWorld = pages;