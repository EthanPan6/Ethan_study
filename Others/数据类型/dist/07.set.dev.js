"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/*
Set 是一个特殊的类型集合 —— “值的集合”（没有键），它的每一个值只能出现一次。

它的主要方法如下：

new Set(iterable) —— 创建一个 set，如果提供了一个 iterable 对象（通常是数组），将会从数组里面复制值到 set 中。
set.add(value) —— 添加一个值，返回 set 本身
set.delete(value) —— 删除值，如果 value 在这个方法调用的时候存在则返回 true ，否则返回 false。
set.has(value) —— 如果 value 在 set 中，返回 true，否则返回 false。
set.clear() —— 清空 set。
set.size —— 返回元素个数。
它的主要特点是，重复使用同一个值调用 set.add(value) 并不会发生什么改变。这就是 Set 里面的每一个值只出现一次的原因。


我们可以使用 for..of 或 forEach 来遍历 Set

Map 中用于迭代的方法在 Set 中也同样支持：

set.keys() —— 遍历并返回所有的值（returns an iterable object for values），
set.values() —— 与 set.keys() 作用相同，这是为了兼容 Map，
set.entries() —— 遍历并返回所有的实体（returns an iterable object for entries）[value, value]，它的存在也是为了兼容 Map。
*/
var set = new Set(["oranges", "apples", "bananas"]);
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = set[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var value = _step.value;
    alert(value);
  } // 与 forEach 相同：

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

set.forEach(function (value, valueAgain, set) {
  alert(value);
});
/*
注意一件有趣的事儿。forEach 的回调函数有三个参数：一个 value，然后是 同一个值 valueAgain，最后是目标对象。没错，同一个值在参数里出现了两次。

forEach 的回调函数有三个参数，是为了与 Map 兼容。当然，这看起来确实有些奇怪。但是这对在特定情况下轻松地用 Set 代替 Map 很有帮助，反之亦然。
*/
//set和array互相转换
//array=>set

var myArray = ["value1", "value2", "value3"]; // 用Set构造器将Array转换为Set

var mySet = new Set(myArray); //set=>array

var newArr = _toConsumableArray(mySet);