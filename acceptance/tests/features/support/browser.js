var zombie = require('zombie');

var browser = function(world) {
    this.browser = new zombie({runScripts: true, debug: true});
};

browser.prototype.visit = function(url, callback) {
    this.browser.visit(url, callback);
};

browser.prototype.clickLink = function(selector, callback) {
    this.browser.clickLink(selector, callback);
};

browser.prototype.getPageTitle = function() {
    return this.browser.text("title");
};

exports.browser = browser;