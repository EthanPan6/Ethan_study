function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayHi = function () {
        console.log(`Hello,I'm${this.name}`);
    }
}

let jake = new Person('jake', 18, 'learner')
jake.sayHi()
console.log(jake);