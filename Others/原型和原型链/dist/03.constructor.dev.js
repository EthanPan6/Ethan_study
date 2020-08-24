"use strict";

function Father() {} //每个原型都有一个constructor属性，指向该关联的构造函数。


console.log(Father == Father.prototype.constructor); //true

/*

    Father（构造函数）------------------------>father(实例对象)
    |               / \                          |
    |                |                           |
    |                |                           |
   prototype       constructor              __proto__
    |                |                           |
    |                |                           |
   \ /               |                           |
    Father.prototype(实例de原型)<-----------------

*/
//补充

var father = new Father();
console.log(father.constructor === Father); //true
//当获取father.constructor时，其实 father 中并没有constructor属性,当不能读取到constructor 属性时，会从father的原型也就是 Father.prototype 中读取，正好原型中有该属性，所以：

console.log(father.constructor === Father.prototype.constructor); //true