/*
接口的作用:为类型命名或代码或第三方代码定义契约
*/

interface Iperson {
    name: string,
    age?: number,
    show(): void
}


class Foo implements Iperson {
    name; age
    constructor(name, age) {
        this.name = name
    }
    show() {
        console.log(this.name);

    }
}
