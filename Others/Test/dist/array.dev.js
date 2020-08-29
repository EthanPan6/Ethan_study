"use strict";

var arr1 = ["Apple", "Orange", "Plum"];
var arr2 = ["Apple", "Orange", "Plum"];
var arr3 = new Array("Apple", "Orange", "Plum");
console.log(arr1.length); //4

console.log(arr2.length); //3

console.log(arr3.length); //3

var array1 = [1, 2, 3, 4]; // fill with 0 from position 2 until position 4

console.log(array1.fill(0, 2, 4), array1);