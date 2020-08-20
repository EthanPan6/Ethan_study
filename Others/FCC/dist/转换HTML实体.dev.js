"use strict";

//写一个转换 HTML entity 的函数。需要转换的 HTML entity 有&、<、>、"（双引号）和'（单引号）。
function convertHTML(str) {
  var entityMap = {
    '&': '$amp',
    '<': '$lt',
    '>': '$gt',
    '"': '$quot',
    '\'': '$apos'
  };
  var res = ''; //方法一
  // for (let i of str) {
  //     console.log(res);
  //     res += entityMap.hasOwnProperty(i) ? entityMap[i] : i
  //     console.log(res);
  // }
  // // &colon;&rpar;
  // return res;
  //方法二

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;
      console.log(res);
      res += entityMap[i] || i;
      console.log(res);
    } // &colon;&rpar;

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

  return res; //方法三：遍历+if-else
  //方法四正则替换
  //方法五：转数组用reduce方法
}

convertHTML("Dolce & Gabbana");