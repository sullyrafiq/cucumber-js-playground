// features/step_definitions/myStepDefinitions.js

var myStepDefinitionsWrapper = function () {
    this.World = require("../support/world.js").World;

    this.Given(/^I am on the Cucumber.js Github repository$/, function(callback) {
        this.visit('http://github.com/cucumber/cucumber-js', callback);
    });
};

module.exports = myStepDefinitionsWrapper;