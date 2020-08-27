"use strict";

// 在JS中，除了原始类型，其它的都是对象类型了，
// 对象类型和原始类型不同，原始类型存储的是值，对象类型存储的是地址（指针）。
//普通Object对象
// Object.entries
//数组对象
//Map对象-----映射---ES6
//Map 是一个带键的数据项的集合，就像一个 Object 一样。 
//但是它们最大的差别是 Map 允许任何类型（包括对象）的键（key），Object只运行类型为字符串的键。
var map = new Map(); //方法一：单个使用set方法赋值

map.set('1', 'str1'); // 字符串键

map.set(1, 'num1'); // 数字键

map.set(true, 'bool1'); // 布尔值键
//方法二：每一次 map.set 调用都会返回 map 本身，所以我们可以进行“链式”调用

map.set('2', 'str2').set(2, 'num2').set(false, 'bool2'); //“链式”调用
//方法三：传入一个带有键值对的数组（或其它可迭代对象）来进行初始化

var map2 = new Map([['1', 'str1'], [1, 'num1'], [true, 'bool1']]); // 还记得普通的 Object 吗? 它会将键转化为字符串
// Map 则会保留键的类型，所以下面这两个结果不同：

alert(map.get(1)); // 'num1'

alert(map.get('1')); // 'str1'

alert(map.size); // 3
//Set对象-----集合---ES6
//Set 是一个特殊的类型集合 —— “值的集合”（没有键），它的每一个值只能出现一次。

var set = new Set(); // 通过add方法

var john = {
  name: "John"
};
set.add(john); //传入一个数组

var set2 = new Set(["oranges", "apples", "bananas"]);