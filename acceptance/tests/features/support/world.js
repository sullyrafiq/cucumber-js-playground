var Pages = require('./pages.js').pages;

var World = function World(callback) {

    this.pages = new Pages();

    callback();
};

exports.World = World;