function foo() {
    var f2 = new foo2();
    console.log(f2);
    console.log(this);
    return !0
}
function foo2() {
    console.log(this);
    return { a: 3 };

}
var f1 = foo();
console.log(f1); // true