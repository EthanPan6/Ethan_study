"use strict";var _this=void 0;function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}function _arrayWithoutHoles(r){if(Array.isArray(r)){for(var n=0,t=new Array(r.length);n<r.length;n++)t[n]=r[n];return t}}var collection={2548:{album:"Slippery When Wet",artist:"Bon Jovi",tracks:["Let It Rock","You Give Love a Bad Name"]},2468:{album:"1999",artist:"Prince",tracks:["1999","Little Red Corvette"]},1245:{artist:"Robert Palmer",tracks:[]},5439:{album:"ABBA Gold"}},collectionCopy=JSON.parse(JSON.stringify(collection));function updateRecords(r,n,t){return""!=t&&"tracks"!=n?collection[r][n]=t:""!=t&&"tracks"==n?(collection[r][n]=[],collection[r][n].push(t)):delete collection[r][n],collection}updateRecords(5439,"artist","ABBA");var realNumberArray=[4,5.6,-9.8,3.14,42,6,8.34],squareList=function(r){return r.filter(function(r){return 0<r&&r%1==0}).map(function(r){return Math.pow(r,2)})},squaredIntegers=squareList(realNumberArray),result={success:["max-length","no-amd","prefer-arrow-functions"],failure:["no-var","var-on-top","linebreak"],skipped:["id-blacklist","no-dup-keys"]};function makeList(r){return r.map(function(r){return'<li class="text-warning">'.concat(r,"</li>")})}var resultDisplayArray=makeList(result.failure);function getNine(){return 9}var results=getNine;function mixedNumbers(r){return r.unshift.apply(r,["I",2,"three"]),r.push.apply(r,[7,"VIII",9]),r}function forecast(r){return r.slice(2,3)}function copyMachine(r,n){for(var t=[];1<=n;)t=[].concat(_toConsumableArray(t),[r]),n--;return t}var users={Alan:{age:27,online:!1},Jeff:{age:32,online:!0},Sarah:{age:48,online:!1},Ryan:{age:19,online:!0}};function countOnline(r){var n=0;for(var t in r)console.log(r[t]),n+=r[t].online;return n}function reverseString(r){return r.match(/./g).reverse().join("")}function findLongestWord(r){for(var n=r.split(""),t=0,e=0;e<n.length;e++)n[e].length>t&&(t=n[e].length);return t}Array.prototype.max=function(){return Math.max.apply({},this)};var arr=[1,45,23,3,6,2,7,234,56];function confirmEnding(r,n){return r.substring(r.length-n.length)==n}arr.max();var repeatStr=function(r,n){for(var t="",e=0;e<n;e++)t+=r;return t};function titleCase(r){return r.toLowerCase().replace(/( |^)[a-z]/g,function(r){return r.toUpperCase()})}function frankenSplice(r,n,t){var e=_toConsumableArray(r),o=_toConsumableArray(n);return o.splice.apply(o,[t,0].concat(_toConsumableArray(e))),o}function bouncer(r){return r.filter(function(r){return 0==!r})}function getIndexToIns(r,n){for(var t=r.sort(function(r,n){return r-n}),e=t.length,o=0;o<e;o++){if(n==t[o])return o;if(n>=t[o]&&n<t[o+1])return o+1;if(n>t[e-1])return e}return 0}function mutation0(r){for(var n=r[0].toLowerCase(),t=r[1].toLowerCase().split(""),e=t.length,o=!0,i=0;i<e;i++)o*=n.includes(t[i]);return 1==o}function mutation1(r){for(var n=r[0].toLowerCase(),t=r[1].toLowerCase(),e=t.length,o=0;o<e;o++)if(n.indexOf(t[o])<0)return!1;return!0}function mutation2(r){var n=r[0].toLowerCase(),t=r[1].toLowerCase();return![].some.call(t,function(r){return!~n.indexOf(r)})}function chunkArrayInGroups(r,n){for(var t=[],e=r.length,o=0;o<e;o+=n){if(r.length<=n)return console.log(11111),t.push(r),t;t.push(r.splice(0,n))}}function Animal(){}function Bird(){}Animal.prototype.eat=function(){console.log("nom nom nom")},Bird.prototype=Object.create(Animal.prototype),(Bird.prototype.constructor=Bird).prototype.fly=function(){console.log("I'm flying!")};var duck=new Bird,funModule={isCuteMixin:function(r){r.isCute=function(){return!0}},singMixin:function(r){r.sing=function(){console.log("Singing to an awesome tune")}}},bookList=["The Hound of the Baskervilles","On The Electrodynamics of Moving Bodies","Philosophiæ Naturalis Principia Mathematica","Disquisitiones Arithmeticae"];function add(r,n){var t=_toConsumableArray(r);return t.push(n),t}function remove(r,n){var t=_toConsumableArray(r);return 0<=r.indexOf(n)&&t.splice(r.indexOf(n),1),t}var newBookList=add(bookList,"A Brief History of Time"),newerBookList=remove(bookList,"On The Electrodynamics of Moving Bodies");Array.prototype.myMap=function(r){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:_this;console.log(n);var t=[];for(var e in _this)t.push(r.call(n,_this[e],e,_this));return t},console.log([1,2,3,4,5,6,7].myMap(function(r){return r+1}));