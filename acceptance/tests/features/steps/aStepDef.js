var myStepDefinitions = function () {
    this.World = require("../support/world.js").World;

    this.givenNumber = 0;

    this.Given(/^a variable set to (\d+)$/, function(number, callback) {
        this.givenNumber = parseInt(number);
        callback();
    });

    this.When(/^I increment the variable by (\d+)$/, function (number, callback) {
        this.givenNumber = this.givenNumber + parseInt(number);
        callback();
    });

    this.Then(/^the variable should contain (\d+)$/, function (number, callback) {
        if (this.givenNumber != number)
            throw(new Error("This test didn't pass, givenNumber is " + this.givenNumber + " expected 0"));
        callback();
    });
};

module.exports = myStepDefinitions;