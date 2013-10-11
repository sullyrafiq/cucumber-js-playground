var assert = require('assert');

var myStepDefinitionsWrapper = function () {
    this.World = require("../support/world.js").World;

    this.Given(/^I am on the MoneySupermarket home page$/, function(callback) {
        this.visitMoneySupermarket(callback);
    });

    this.When(/^I select car insurance$/, function(callback) {
        this.clickOnCarInsuranceLink(callback);
    });

    this.Then(/^the title should be "([^"]*)"$/, function(title, callback) {
        this.thePageTitleIs(title, callback);
    });
};

module.exports = myStepDefinitionsWrapper;