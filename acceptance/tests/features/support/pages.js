var zombie = require('zombie');
var assert = require('assert');

var pages = function(driver) {
    this.driver = driver;
};

pages.prototype.visitMoneySupermarket = function(callback) {
    this.driver.visit("http://www.moneysupermarket.com", callback);
};

pages.prototype.clickOnCarInsuranceLink = function(callback) {
    this.driver.clickLink("#house-mainnav-car-insurance", callback);
};

pages.prototype.thePageTitleIs = function(title) {
    assert.equal(this.driver.getPageTitle());
};

exports.pages = pages;