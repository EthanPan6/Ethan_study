/*
装饰器:
1*/
@sealed
class Foo {

    show() {
        console.log(111);

    }
}
function sealed(constructor) {
    // console.log(constructor);
    Object.seal(constructor.prototype)
}
let o = new Foo
o.show()