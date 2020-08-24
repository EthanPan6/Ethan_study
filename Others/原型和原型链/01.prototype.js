function Father(age) {//父类
    //构造函数首字母大写
    this.age = age

}
//每个函数都有一个prototype属性，这个属性指向函数的原型对象。
console.log(Father.prototype);//Father {}

Father.prototype.name = "Dad";

var father1 = new Father(12)
var father2 = new Father()
console.log(father1.name, father1.age);//Dad 12
console.log(father2.name, father2.age);//Dad undefined
//函数的prototype指向了一个对象，而这个对象正是调用构造函数时创建的实例的原型，也就是father1和father2的原型。
//原型的概念：每一个javascript对象(除null外)创建的时候，就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型中“继承”属性。


/*

Father（构造函数）
 |
 |
 |
prototype
 |
 |
\ /
Father.prototype(实例de原型)

*/