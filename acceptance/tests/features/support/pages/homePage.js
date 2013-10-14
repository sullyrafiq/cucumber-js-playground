var zombie = require('zombie');
var assert = require('assert');

var homePage = function(driver) {
    this.driver = driver;
};

homePage.prototype.visitMoneySupermarket = function(callback) {
    this.driver.visit("http://www.moneysupermarket.com", callback);
};

homePage.prototype.clickOnCarInsuranceLink = function(callback) {
    this.driver.clickLink("#house-mainnav-car-insurance", callback);
};

homePage.prototype.thePageTitleIs = function(title) {
    assert.equal(this.driver.getPageTitle(), title);
};

exports.homePage = homePage;