function Person() { }
Person.prototype.name = "Anonymous";
Person.prototype.age = 0;
Person.prototype.job = 'unkonwn';
Person.prototype.sayHi = function () {
    console.log(`Hello,I'm ${this.name}`);
}

let ming = new Person()
console.log(ming.name);
ming.sayHi()
/*
使用原型对象的好处是可以让所有对象实例共享他所包含的属性和方法。
不必在构造函数中定义对象实例的信息，
而是可以将这些信息直接添加到原型对象中。
*/