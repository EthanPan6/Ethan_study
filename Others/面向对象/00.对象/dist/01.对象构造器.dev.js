"use strict";

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
} // Person.nationality = "English";


Person.prototype.nationality = "English";
var myFather = new Person("Bill", "Gates", 62, "blue");
var myMother = new Person("Steve", "Jobs", 56, "green");
console.log(Person);
console.log(myFather.__proto__);
console.log(myFather.nationality);