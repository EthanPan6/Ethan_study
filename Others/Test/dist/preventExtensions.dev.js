"use strict";

var object1 = {};
Object.preventExtensions(object1);

try {
  object1.a = 5;
  console.log(object1);
  Object.defineProperty(object1, 'property1', {
    value: 42
  });
} catch (e) {
  console.log(e); // expected output: TypeError: Cannot define property property1, object is not extensible
}