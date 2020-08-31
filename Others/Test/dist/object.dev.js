"use strict";

var obj = {
  counter: 0,

  get reset() {
    this.counter = 0;
  },

  get increment() {
    this.counter++;
  },

  get decrement() {
    this.counter--;
  },

  set add(value) {
    this.counter += value;
  },

  set subtract(value) {
    this.counter -= value;
  }

}; // var obj = {
//     counter: 0
// }
// Object.defineProperty(obj, "reset", {
//     get() {
//         this.counter = 0
//     }
// })
// Object.defineProperty(obj, "increment", {
//     get() {
//         this.counter++
//     }
// })
// Object.defineProperty(obj, "decrement", {
//     get() {
//         this.counter--
//     }
// })
// Object.defineProperty(obj, "add", {
//     set(v) {
//         this.counter += v
//     }
// })
// Object.defineProperty(obj, "subtract", {
//     set(v) {
//         this.counter -= v
//     }
// })
// 操作计数器：

obj.reset;
console.log(obj);
obj.add = 5;
console.log(obj);
obj.subtract = 1;
console.log(obj);
obj.increment;
console.log(obj);
obj.decrement;
console.log(obj);
var person = {
  firstName: "Bill",
  lastName: "Gates",
  language: "en",

  get lang() {
    return this.language;
  },

  set lang(lang) {
    this.language = lang;
  },

  setLanguage: function setLanguage(lang) {
    this.language = lang;
  }
};
console.log(person.lang); //"en"

person.lang = "ch";
console.log(person.lang); //"ch"

person.setLanguage("中文");
console.log(person.lang); //"中文"