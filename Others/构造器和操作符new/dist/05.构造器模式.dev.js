"use strict";

/*

new.target可以被用在函数内部，来判断该函数是被通过 new 调用的“构造器模式”，还是没被通过 new 调用的“常规模式”。

我们也可以让 new 调用和常规调用做相同的工作

*/
function User(name) {
  if (!(this instanceof User ? this.constructor : void 0)) {
    //如果没有使用new就给你加new
    return new User(name);
  }

  this.name = name;
}

var mark = new User("mark");
var marry = User("marry");
console.log(mark, marry);
/*
好处：使语法更加灵活。这样人们在调用函数时，无论是否使用了 new，程序都能工作。

缺点：因为省略了 new 使得很难观察到代码中正在发生什么。而通过 new 我们都可以知道这创建了一个新对象。

*/