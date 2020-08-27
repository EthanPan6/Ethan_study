// 当创建一个 Map 后，我们可以传入一个带有键值对的数组（或其它可迭代对象）来进行初始化

// 键值对 [key, value] 数组生产Map对象
let map = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1']
]);

alert(map.get('1')); // str1

// 键值对 [key, value] 数组生产普通对象
let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);

// 现在 prices = { banana: 1, orange: 2, meat: 4 }

alert(prices.orange); // 2

//普通对象=>Map对象
//Object.entries 返回键/值对数组：[ ["name","John"], ["age", 30] ]。
let obj = {
    name: "John",
    age: 30
};

let map2 = new Map(Object.entries(obj));

alert(map2.get('name')); // John



//Map对象=>普通对象
//调用 map.entries() 将返回一个可迭代的键/值对
let map3 = new Map();
map3.set('banana', 1);
map3.set('orange', 2);
map3.set('meat', 4);

let obj2 = Object.fromEntries(map3.entries()); // 创建一个普通对象（plain object）(*)

// 完成了！
// obj = { banana: 1, orange: 2, meat: 4 }

alert(obj2.orange); // 2

let obj3 = Object.fromEntries(map3); // 省掉 .entries()
// 因为 Object.fromEntries 期望得到一个可迭代对象作为参数，而不一定是数组