//工厂模式中的函数中会创建一个对象，最后return这个对象，通过每次调用时传入的参数不同来解决创建多个相似对象的问题。

function createPerson(name, age, job) {
    var o = {};
    // var o=new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayHi = function () {
        console.log(`Hello,I'm ${this.name}`);
    }
    return o
}
let jake = createPerson('jake', 18, 'learner')
jake.sayHi()
console.log(jake);