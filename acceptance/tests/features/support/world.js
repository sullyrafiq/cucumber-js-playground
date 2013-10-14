var HomePage = require('./pages/homePage.js').homePage;
var Driver = require('./driver/zombieDriver.js').driver;

var World = function World(callback) {

    this.driver = new Driver();
    this.homePage = new HomePage(this.driver);

    callback();
};

exports.World = World;