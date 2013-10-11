var myStepDefinitionsWrapper = function () {

    this.World = require("../support/world.js").World;

    this.Given(/^I am on the MoneySupermarket home page$/, function(callback) {
        this.pages.visitMoneySupermarket(callback);
    });

    this.When(/^I select car insurance$/, function(callback) {
        this.pages.clickOnCarInsuranceLink(callback);
    });

    this.Then(/^the title should be "([^"]*)"$/, function(title, callback) {
        this.pages.thePageTitleIs(title);
        callback();
    });
};

module.exports = myStepDefinitionsWrapper;