var zombie = require('zombie');
var assert = require('assert');

var PagesWorld = require('./pages.js').pagesWorld;

var World = function World(callback) {

    this.pages = new PagesWorld();

    this.browser = new zombie({runScripts: true, debug: true});

    this.visitMoneySupermarket = function(callback) {
        this.browser.visit("http://www.moneysupermarket.com", callback);
    };

    this.clickOnCarInsuranceLink = function(callback) {
        this.browser.clickLink("#house-mainnav-car-insurance", callback);
    };

    this.thePageTitleIs = function(title) {
        assert.equal(this.browser.text("title"), title);
    };

    callback();
};

exports.World = World;