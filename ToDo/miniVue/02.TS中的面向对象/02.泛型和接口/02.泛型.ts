/*
泛型:可以使用变量来定义类型,从而进行统一类型操作
*/

function show<T>(arg: T): T {
    return arg
}
show<number>(123)

class Foo<T>{
    name: T;
}
let o = new Foo<string>();
o.name = '123'