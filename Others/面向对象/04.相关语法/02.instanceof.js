function Foo() {

}
function Bar() { }
var o = new Foo()
console.log(o instanceof Foo);
console.log(o instanceof Bar);

function A() { }
function B() { }
A.prototype = B.prototype
var oo = new A()

console.log(oo instanceof B);//在B的原型链上查找到了
