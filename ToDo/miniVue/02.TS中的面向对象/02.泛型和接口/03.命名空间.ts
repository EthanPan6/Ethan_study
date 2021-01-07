/*
命名空间:防止类似命名冲突
*/

class Foo {
    show() {
        console.log('hello');

    }
}
let o = new Foo();
o.show()