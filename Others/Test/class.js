class Person {
    constructor(name, age, like) {
        this.name = name;
        this.age = age;
        this.like = like;
    }
    eat() {

        console.log(`My name is ${this.name},I like ${this.like}`);
    }
}

let Xiaoming = new Person('Xiaoming', 12, 'apple')
console.log(Xiaoming); // Person { name: 'Xiaoming', age: 12, like: 'apple' }
console.log(Person);
console.log(Person.prototype); // Person {}

console.log(Xiaoming.__proto__); // Person {}
console.log(Xiaoming.eat());