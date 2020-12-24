function SuperType(name) {
    this.name = name;
    this.color = ['red', 'blue'];
}
SuperType.prototype.sayName = function () { console.log(this.name); }
function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}
SubType.prototype = new SuperType();//这样可以继承方法

var instance1 = new SubType('tj', 22);
instance1.sayName();