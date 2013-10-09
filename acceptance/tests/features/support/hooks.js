/**
 * Created with IntelliJ IDEA.
 * User: sully.rafiq
 * Date: 10/09/2013
 * Time: 17:09
 * To change this template use File | Settings | File Templates.
 */

var myHooks = function () {

    this.Before(function(callback) {
        // Do something

        callback();
    });

    this.After(function(callback) {
        // Do something

        callback();
    });
};

module.exports = myHooks;