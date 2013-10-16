var HomePage = require('./pages/home.js').homePage;
var Driver = require('./driver/selenium.js').driver;

var World = function World(callback) {

    console.log("Creating the world...");

    this.driver = new Driver();
    this.homePage = new HomePage(this.driver);

    callback();
};

exports.World = World;