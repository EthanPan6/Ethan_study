var o1 = {};
var o2 = {};

Object.prototype.toString = function () {
    return String(this)
}
console.log(o1 == o2);