var Person = function () {}
Person.prototype.sayHello = function () {
    console.log('hello');
};
Person.prototype.spell = function () {
    console.log('i can spell!');
};
var personA = new Person();
var personB = new Person();
personA.sayHello();
personA.spell();

var grailMode = (function () {
    return function (Origin, Target) {
        var Temp = function () {}; // 临时构造函数
        Temp.prototype = Origin.prototype;
        Target.prototype = new Temp(); // 这里不是明白，为什么要加个临时构造函数
        Target.prototype.constructor = Target; // 目标构造函数原型属性constructor指向 目标构造函数
        Target.prototype.ancestor = Origin; // target 的生父
    }
})();


// 我们定制的构造函数

var ChinaPerson = function () {}
grailMode(Person, ChinaPerson);

ChinaPerson.prototype.sayHello = function () {
    console.log('你好');
}
var ChinaPersonA = new ChinaPerson();
ChinaPersonA.sayHello();
ChinaPersonA.spell();

personA.sayHello();
personA.spell();

/*
圣杯模式是通过 已经存在的构造函数(Factory)构建一个实例对象(P)，然后我们定制一个构造函数(C)，让这个构造函数(C)的原型属性指向这个实例对象(P)（临时构造函数的实例对象），这样我们改变定制的构造函数(C)原型属性是的属性成员时候，其实改变的只不过是实例对象(P) 中的属性成员

原型链访问的原则是： 先在当前对象中遍历是否存在该成员，若存在，则直接访问，若不存在则访问其原型对象…。原型链上没遍历到则返回 undefined。

实例可以访问原型对象中的属性成员，却不可以 实例.成员 = value去修改原型对象中的成员， 实例.成员相当于是对当前的实例添加一个属性成员并赋值。
*/