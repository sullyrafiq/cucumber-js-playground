var WebDriver = require('selenium-webdriver');

var myHooks = function () {

    this.Before(function(callback) {
        console.log("Setting stuff up for tests");

        var world = this;

        var browser = new WebDriver.Builder()
            .usingServer("http://127.0.0.1:4444/wd/hub")
            .withCapabilities({
                'browserName': 'phantomjs'/*,
                 'acceptSslCerts': true,
                 'phantomjs.cli.args': ['--ignore-ssl-errors=true', '--ssl-protocol=any']*/
            }).build();
        browser.By = WebDriver.By;

        browser.getSession().then(
            function (session) {
                world.browser = browser;
                callback();
            },
            function (err) {
                console.error(err);
                callback.fail({ message: "Failed to create a Selenium session", error: err});
            }
        );
    });

    this.After(function(callback) {
        console.log("Tearing stuff down");

        var world = this;

        if (world.browser) {
            world.browser.quit().then(callback, function (err) {
                console.error(err);
                callback.fail({message: "Error closing browser", error: err});
            });
        } else {
            callback();
        }
    });
};

module.exports = myHooks;