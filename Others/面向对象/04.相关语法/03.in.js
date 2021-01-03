function Foo() {
    this.name = 'zhangsan';
}
Foo.prototype.age = 18
var o = new Foo()

console.log('name' in o);
console.log('age' in o);