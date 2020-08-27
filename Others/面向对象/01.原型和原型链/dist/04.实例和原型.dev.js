"use strict";

/*
当读取实例的属性时
如果找不到，就会查找与对象关联的原型中的属性
如果还查不到，就去找原型的原型，一直找到最顶层为止。
*/
function Father() {}

Father.prototype.name = "Dad";
var father1 = new Father();
console.log(father1, father1.name); //Father {} Dad
//father中没有name，但仍可以得到name

father1.name = "Papa";
console.log(father1, father1.name); //Father { name: 'Papa' } Papa
//自身有name属性，即调用自身的name

delete father1.name;
console.log(father1, father1.name); //Father {} Dad
//delete只能删除自身的name属性，不能删除father.__proto__上的