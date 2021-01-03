function Foo() {

}
Foo.prototype = {
    sayHi() {
        console.log('Hello');

    },
    constructor: Foo//如果不在prototype中修正constructor,Foo的构造函数将会被修改
}
var o = new Foo();
console.log(o.constructor);

