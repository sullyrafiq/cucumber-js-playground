var WebDriver = require('selenium-webdriver');

var myHooks = function () {

    this.Before(function(callback) {
        console.log("Starting up the selenium driver");

        var world = this;

        var browser = new WebDriver.Builder()
            .usingServer("http://127.0.0.1:4444/wd/hub")
            .withCapabilities({
                'browserName': 'phantomjs',
                'acceptSslCerts': true,
                'phantomjs.cli.args': ['--ignore-ssl-errors=true', '--ssl-protocol=any']
            }).build();

        browser.By = WebDriver.By;

        browser.getSession().then(
            function (session) {
                console.log("Successfully created selenium session");
                world.driver.browser = browser;
                callback();
            },
            function (err) {
                console.error(err);
                callback.fail({ message: "Failed to create a Selenium session", error: err});
            }
        );
    });

    this.After(function(callback) {
        console.log("Tearing down selenium driver");

        var world = this;

        if (world.driver.browser) {
            world.driver.browser.quit().then(callback, function (err) {
                console.error(err);
                callback.fail({message: "Error closing browser", error: err});
            });
        } else {
            callback();
        }
    });
};

module.exports = myHooks;