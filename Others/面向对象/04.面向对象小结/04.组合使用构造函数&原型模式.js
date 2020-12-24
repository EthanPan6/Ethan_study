function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayHi = function () {
        console.log(`Hello,I'm ${this.name}`);
    }
}
Person.prototype = {
    sayJob: function () {
        console.log(`Hello,I'm ${this.job}`);
    }
}

let jack = new Person('jack', 18, 'farmer');
jack.sayHi()
jack.sayJob()
console.log(jack.__proto__);

/*
构造函数模式用于定义实例属性，
而原型模式定义方法和共享的属性。
这种混合模式还支持向构造函数传递参数。
*/