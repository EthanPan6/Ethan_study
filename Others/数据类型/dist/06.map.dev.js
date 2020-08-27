"use strict";

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
var recipeMap = new Map([['cucumber', 500], ['tomatoes', 350], ['onion', 50]]); // 遍历所有的键（vegetables）

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = recipeMap.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var vegetable = _step.value;
    alert(vegetable); // cucumber, tomatoes, onion
  } // 遍历所有的值（amounts）

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = recipeMap.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var amount = _step2.value;
    alert(amount); // 500, 350, 50
  } // 遍历所有的实体 [key, value]

} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = recipeMap[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var entry = _step3.value;
    // 与 recipeMap.entries() 相同
    alert(entry); // cucumber,500 (and so on)
  } // 对每个键值对 (key, value) 运行 forEach 函数

} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
      _iterator3["return"]();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}

recipeMap.forEach(function (value, key, map) {
  alert("".concat(key, ": ").concat(value)); // cucumber: 500 etc
});