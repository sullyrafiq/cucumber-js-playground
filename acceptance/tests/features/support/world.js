var HomePage = require('./pages/homePage.js').homePage;
var Driver = require('./driver/seleniumDriver.js').driver;

var World = function World(callback) {

    console.log("Creating the world...");

    this.driver = new Driver(this);
    this.homePage = new HomePage(this.driver);

    callback();
};

exports.World = World;