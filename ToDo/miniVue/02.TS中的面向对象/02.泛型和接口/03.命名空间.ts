/*
命名空间:防止类似命名冲突
*/
namespace QF {
    export class Foo {
        show() {
            console.log('hello');

        }
    }
}

let o = new QF.Foo();
o.show()