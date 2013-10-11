var PagesWorld = require('./pages.js').pagesWorld;

var World = function World(callback) {

    this.pages = new PagesWorld();

    callback();
};

exports.World = World;