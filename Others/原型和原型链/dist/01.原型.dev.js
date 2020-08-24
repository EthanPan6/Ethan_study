"use strict";

function Father(age) {
  //父类
  //构造函数首字母大写
  this.age = age;
} //每个函数都有一个prototype属性，这个属性指向函数的原型对象。


console.log(Father.prototype); //Father {}

Father.prototype.name = "Dad";
var father1 = new Father(12);
var father2 = new Father();
console.log(father1.name, father1.age); //Dad 12

console.log(father2.name, father2.age); //Dad undefined