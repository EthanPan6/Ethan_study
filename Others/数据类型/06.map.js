/*
它的方法和属性如下：

new Map() —— 创建 map。
map.set(key, value) —— 根据键存储值。每一次 map.set 调用都会返回 map 本身，所以我们可以进行“链式”调用
map.get(key) —— 根据键来返回值，如果 map 中不存在对应的 key，则返回 undefined。
map.has(key) —— 如果 key 存在则返回 true，否则返回 false。
map.delete(key) —— 删除指定键的值。
map.clear() —— 清空 map。
map.size —— 返回当前元素个数。


如果要在 map 里使用循环，可以使用以下三个方法：

map.keys() —— 遍历并返回所有的键（returns an iterable for keys），
map.values() —— 遍历并返回所有的值（returns an iterable for values），
map.entries() —— 遍历并返回所有的实体（returns an iterable for entries）[key, value]，for..of 在默认情况下使用的就是这个。
*/


let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

// 遍历所有的键（vegetables）
for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // cucumber, tomatoes, onion
}

// 遍历所有的值（amounts）
for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
}

// 遍历所有的实体 [key, value]
for (let entry of recipeMap) { // 与 recipeMap.entries() 相同
    alert(entry); // cucumber,500 (and so on)
}

// 对每个键值对 (key, value) 运行 forEach 函数
recipeMap.forEach((value, key, map) => {
    alert(`${key}: ${value}`); // cucumber: 500 etc
});

