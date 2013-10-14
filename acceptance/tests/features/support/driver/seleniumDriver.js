var driver = function(world) {
    this.browser = world.browser;
};

driver.prototype.visit = function(url, callback) {
    console.log("Visiting " + url);

    this.browser.get(url)
        .then(function() {
            callback();
        });
};

driver.prototype.clickLink = function(selector, callback) {
    console.log("Clicking link with id " + selector);

    this.browser.findElement(this.webDriver.By.id(selector)).click()
        .then(function() {
            callback();
        });
};

driver.prototype.getPageTitle = function() {
    return this.browser.getTitle();
};

exports.driver = driver;