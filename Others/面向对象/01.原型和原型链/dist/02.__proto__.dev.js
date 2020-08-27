"use strict";

function Father() {}

var father = new Father(); //每个对象(除null外)都会有的属性，叫做__proto__，这个属性会指向该对象的原型。

console.log(father.__proto__ === Father.prototype); //true
//ES5

console.log(Object.getPrototypeOf(father) === Father.prototype); // true
// Object.getPrototype(obj)是ES5中用来获取obj对象的原型对象的标准方法。
// obj.__proto__是获取obj对象的原型对象的非标准方法。

/*

Father（构造函数）------------------------>father(实例对象)
 |                                           |
 |                                           |
 |                                           |
prototype                                __proto__
 |                                           |
 |                                           |
\ /                                          |
Father.prototype(实例de原型)<-----------------

*/