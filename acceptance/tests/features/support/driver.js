var zombie = require('zombie');

var driver = function(world) {
    this.browser = new zombie({runScripts: true, debug: true});
};

driver.prototype.visit = function(url, callback) {
    this.browser.visit(url, callback);
};

driver.prototype.clickLink = function(selector, callback) {
    this.browser.clickLink(selector, callback);
};

driver.prototype.getPageTitle = function() {
    return this.browser.text("title");
};

exports.driver = driver;