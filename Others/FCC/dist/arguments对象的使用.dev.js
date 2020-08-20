"use strict";

function destroyer() {
  // 删掉那些值
  var _arguments = Array.prototype.slice.call(arguments),
      start = _arguments[0],
      deleteArr = _arguments.slice(1);

  console.log(start, deleteArr);
  var arr = start.filter(function (item) {
    return !deleteArr.includes(item);
  });
  return arr;
}

;
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));