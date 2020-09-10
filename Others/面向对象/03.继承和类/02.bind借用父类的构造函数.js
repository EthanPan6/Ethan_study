function Father(name) {
    this.name = name;
};
Father.prototype.eat = function () {};

function Son(name, age) {
    this.age = age;
    Father.call(this, name);
};
var s1 = new Son("jack", 18)
console.log(s1);
console.log(s1.__proto__);//Object