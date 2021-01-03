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
function extend(subs, sups) {
    for (var attr in sups.prototype) {
        subs.prototype[attr] = sups.prototype[attr]
    }
}
extend(Son, Father)

var o1 = new Father();
var o2 = new Son()
console.log(o1);
console.log(o2);
o2.showName()