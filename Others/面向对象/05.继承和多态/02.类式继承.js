function Father() {
    this.name = "李白"
}
Father.prototype.showName = function () {
    console.log(this.name);
}
function Son() {
    Father.call(this);
    this.age = 18;
}
Son.prototype.showAge = function () {
    console.log(this.age);
}
extend(Son, Father)

function extend(subs, sups) {
    var F = function () { };
    F.prototype = sups.prototype
    subs.prototype = new F();
    subs.prototype.constructor = subs;
}



var o1 = new Father();
var o2 = new Son()
console.log(o1);
console.log(o2);
o2.showName()