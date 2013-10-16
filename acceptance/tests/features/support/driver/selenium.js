var driver = function() {};

driver.prototype.visit = function(url, callback) {
    console.log("Visiting " + url);

    this.browser.get(url)
        .then(function() {
            callback();
        });
};

driver.prototype.clickWithId = function(selector, callback) {
    console.log("Clicking link with id " + selector);

    this.browser.findElement(this.browser.By.id(selector)).click()
        .then(function() {
            callback();
        });
};

driver.prototype.getPageTitle = function() {
    return this.browser.getTitle();
};

exports.driver = driver;