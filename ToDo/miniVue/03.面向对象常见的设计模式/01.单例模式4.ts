/*
确保某个类只有一个实例,而且自行实例化并向整个系统提供这个实例
*/

//ES6模式

class Singleton {
    constructor(name) {
        this.name = name;
        this.instance = null
    }
    static getInstance(name) {
        if (!this.instance) {
            this.instance = new Singleton(name);
        }
        return this.instance;
    }
}
let o1 = new Singleton('zs');
let o2 = new Singleton('ls');
console.log(o1 === o2);

// var psw='ewbenyjn'