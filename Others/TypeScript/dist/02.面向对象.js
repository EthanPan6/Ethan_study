var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.name = function () {
        console.log("Ethan");
    };
    return Person;
}());
var ethan = new Person();
ethan.name();
