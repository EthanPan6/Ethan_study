/*
原型链继承的主要思想是
利用原型让一个引用类型继承另一个引用类型的属性和方法。

警告：
通过原型链继承是，不能使用对象字面量创建原型方法，这样会重写原型链！
*/

function SuperType() {
    this.color = ['red', 'yellow'];
}

function SubType() { }
SubType.prototype = new SuperType()// 继承了SuperType

let result = new SubType()
console.log(result);