"use strict";

/*

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