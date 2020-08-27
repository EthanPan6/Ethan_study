"use strict";

/*
简单理解：
当一个函数被使用 new 操作符执行时，它按照以下步骤：

1. 一个新的空对象被创建并分配给 this。
2. 函数体执行。通常它会修改 this，为其添加新的属性。
3. 返回 this 的值。

*/
function User(name) {
  // this={}; 隐式创建
  //将属性添加给this对象
  this.name = name;
  this.isAdmin = false; // return this;隐式返回
}
/*
进阶理解：

1. 创建一个空对象obj（{}）；
2. 将obj的[[prototype]]属性指向构造函数constrc的原型（即obj.__prototype__ = constrc.prototype）。
3. 将构造函数constrc内部的this绑定到新建的对象obj，执行constrc（也就是跟调用普通函数一样，只是此时函数的this为新创建的对象obj而已，就好像执行obj.constrc()一样）
4. 若构造函数没有返回非原始值（即不是引用类型的值），则返回该新建的对象obj（默认会添加return this）。否则，返回引用类型的值。

*/