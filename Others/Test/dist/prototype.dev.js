"use strict";

function Person(name, age, like) {
  this.name = name;
  this.age = age;
  this.like = like;
}

Person.prototype.eat = function () {
  console.log("My name is ".concat(this.name, ",I like ").concat(this.like));
};

var Xiaoming = new Person('Xiaoming', 12, 'apple');
console.log(Xiaoming);
console.log(Person.prototype);
console.log(Xiaoming.__proto__); // console.log(Xiaoming.eat());