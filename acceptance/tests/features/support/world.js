var Pages = require('./pages.js').pages;
var Driver = require('./driver.js').driver;

var World = function World(callback) {

    this.driver = new Driver();
    this.pages = new Pages(this.driver);

    callback();
};

exports.World = World;