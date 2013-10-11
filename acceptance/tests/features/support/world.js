var zombie = require('zombie');

var WorldConstructor = function WorldConstructor(callback) {
    this.browser = new zombie({runScripts: true, debug: true});

    var world = {
        visit: function(url, callback) {
            this.browser.visit(url, callback);
        }
    };

    callback(world);
};

exports.World = WorldConstructor;