var Person = function () {};
Person.prototype.sayHello = function () {
    console.log('hello');
};

// 假设 person 原型属性上有很多方法和变量我们需要拿来使用,比如： spell这个方法我们要拿来继续使用
Person.prototype.spell = function () {
    console.log('i can spell!');
};

var personA = new Person();
var personB = new Person();
var personC = new Person();
var personD = new Person();
var personE = new Person();
var personF = new Person();
var personG = new Person();
var personH = new Person();
personA.sayHello();//hello
personA.spell();//i can spell!
personB.sayHello();//hello
personB.spell();//i can spell!

// ...
// 之前应项目需求 实例化了很多对象， 现在需要 实例化 n 个说中文的对象，同时要具备之前的 spell相同能力 

Person.prototype.sayHello = function () {
    console.log('你好');
};

var chinaPersonA = new Person();
var chinaPersonB = new Person();
var chinaPersonC = new Person();
var chinaPersonD = new Person();
var chinaPersonE = new Person();
chinaPersonA.sayHello();//你好
chinaPersonA.spell();//i can spell!
chinaPersonB.sayHello();//你好
chinaPersonB.spell();//i can spell!


// ...
// 之前的对象还能说英文 hello 吗? 显然不能了
personA.sayHello(); // 你好
personA.spell();//i can spell!
personB.sayHello(); // 你好
personB.spell();//i can spell!

// 显然我们对已存在的原型对象修改，对别人使用的的或者说以前构建的对象产生了影响