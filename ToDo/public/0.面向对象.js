"use strict";
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log('面向对象');
    };
    return Site;
}());
var cls = new Site();
cls.name();
