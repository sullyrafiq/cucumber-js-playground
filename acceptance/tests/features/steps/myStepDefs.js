var myStepDefinitionsWrapper = function () {

    this.World = require("../support/world.js").World;

    this.Given(/^I am on the MoneySupermarket home page$/, function(callback) {
        this.homePage.visitMoneySupermarket(callback);
    });

    this.When(/^I select car insurance$/, function(callback) {
        this.homePage.clickOnCarInsuranceLink(callback);
    });

    this.Then(/^the title should be "([^"]*)"$/, function(title, callback) {
        this.homePage.assertThePageTitleIs(title);
        callback();
    });
};

module.exports = myStepDefinitionsWrapper;