"use strict";

/*
进阶理解：

1. 创建一个空对象obj（{}）；
2. 将obj的[[prototype]]属性指向构造函数constrc的原型（即obj.__proto__ = constrc.prototype）。
3. 将构造函数constrc内部的this绑定到新建的对象obj，执行constrc（也就是跟调用普通函数一样，只是此时函数的this为新创建的对象obj而已，就好像执行obj.constrc()一样）
4. 若构造函数没有返回非原始值（即不是引用类型的值），则返回该新建的对象obj（默认会添加return this）。否则，返回引用类型的值。

*/
function newNew(fn) {
  //fn:构造函数
  //...args:输入fn的参数
  var obj = {};
  obj.__proto__ = fn.prototype; // 或者使用自带方法：Object.setPrototypeOf(obj, constrc.prototype)

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var result = fn.apply(obj, args);
  return result instanceof Object ? result : obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

var person1 = newNew(Person, 'Tom', 20);
console.log(person1);