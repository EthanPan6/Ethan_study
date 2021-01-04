var foo = {
    name: 'zhangsan'
}
var b = extend(foo)

function extend(sups) {
    function f() { }
    f.prototype = sups;
    return new f()
}
console.log(b);
b.name = "ss"
console.log(b);
console.log(foo);