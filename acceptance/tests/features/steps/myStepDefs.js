var myStepDefinitions = function () {
    this.World = require("../support/world.js").World;

    this.Given(/^I am on MoneySupermarket/, function (next) {
        this.visitMoneySupermarket();
        next();
    });

    this.When(/^I click on car insurance/, function (next) {
        this.clickOnCarInsurance();
        next();
    });
};

module.exports = myStepDefinitions;