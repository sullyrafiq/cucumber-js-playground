var pages = function(world) {};

pages.prototype.sayHello = function() {
    console.log("It's working");
};

exports.pagesWorld = pages;