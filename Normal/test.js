
// 初始化变量
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// 复制 collection 以便测试
var collectionCopy = JSON.parse(JSON.stringify(collection));

// 请把你的代码写在这条注释以下
function updateRecords(id, prop, value) {
    if (value != "" && prop != "tracks") {
        collection[id][prop] = value;
    } else if (value != "" && prop == "tracks") {
        collection[id][prop] = undefined || []
        collection[id][prop].push(value)
    } else {
        delete collection[id][prop];
    }
    return collection;
}

// 你可以修改这一行来测试你的代码
updateRecords(5439, "artist", "ABBA");
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
    "use strict";
    // 在这行以下修改代码
    // const squaredIntegers = arr.map(item => item > 0 && item % 1 == 0).map(item => item ** 2);
    const squaredIntegers = arr.filter(item => item > 0 && item % 1 == 0).map(item => item ** 2);
    // 在这行以上修改代码
    return squaredIntegers;
};
// 测试你的代码
const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);
////////////////////////////////////////////////////////
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    "use strict";

    // 在这行以下修改代码
    // const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`).join(",");
    const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);
    // 在这行以上修改代码

    return resultDisplayArray;
}
/**
 * makeList(result.failure) 应该返回：
 * [ <li class="text-warning">no-var</li>,
 *   <li class="text-warning">var-on-top</li>, 
 *   <li class="text-warning">linebreak</li> ]
 **/
const resultDisplayArray = makeList(result.failure);
// console.log(resultDisplayArray)
function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
}

let results = getNine;
//   console.log(results());


///////////////////////////////
function mixedNumbers(arr) {
    // 请把你的代码写在这条注释以下
    let header = ['I', 2, 'three']
    let footer = [7, 'VIII', 9]
    arr.unshift(...header)
    arr.push(...footer)
    // 请把你的代码写在这条注释以上
    return arr;
}

// 请不要修改本行以下的代码
//   console.log(mixedNumbers(['IV', 5, 'six']));
/////////////////////////////////////////////////

function forecast(arr) {
    // 请把你的代码写在这条注释以下

    return arr.slice(2, 3);
}

// 请不要修改本行以下的代码
// console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


////////////////////////////////

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // 请把你的代码写在这条注释以下
        newArr = [...newArr, arr]
        // 请把你的代码写在这条注释以上
        num--;
    }
    return newArr;
}

// 你可以修改这行代码来测试不同的输入：
// console.log(copyMachine([true, false, true], 2));
/////////////////////////////////////

let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function countOnline(obj) {
    // 请把你的代码写在这条注释以下
    // let isHere=[]
    let count = 0;
    for (let item in obj) {
        // isHere.push(item.online)
        console.log(obj[item])
        count += obj[item].online
        // console.log(item.hasOwnProperty("online"))
    }
    return count
    // 请把你的代码写在这条注释以上
}

// console.log(countOnline(users));
///////////////////////////

function reverseString(str) {

    // return str.split().reverse().join();
    // let arr = str.match(/\w/g)
    // return arr.reverse().join("");
    return str.match(/./g).reverse().join("");
}

;
// console.log(reverseString("hello"))
//////////////////////////////////////////////
function findLongestWord(str) {
    // 第1步：将传给str的值"May the force be with you"转换成数组
    var array = str.split('');

    // 得到数组 ["May", "the", "force", "be", "with", "you"]
    var longest = 0;

    // 第2步：对数组array做遍历，并且将符合条件的值赋值给longest
    for (var i = 0; i < array.length; i++) {
        // array.length = 6

        if (array[i].length > longest) {
            // 如果为true,longest值为array[i].length;
            longest = array[i].length;
        }
    }

    return longest; // 5
}

///////////////////////////
// Math.max() 方法可以很简单的从一个数组中取出最大的那个值：

Array.prototype.max = function () {
    return Math.max.apply({}, this);
}
var arr = [1, 45, 23, 3, 6, 2, 7, 234, 56];
arr.max(); // 234
////////////////////////

function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor


    return str.substring(str.length - target.length) == target;
    // return str.substring(0 - target.length) == target;
}


// console.log(confirmEnding("Bastian", "n"))



const repeatStr = (str, num) => {
    let newStr = ""
    for (let i = 0; i < num; i++) {
        newStr += str
    }
    return newStr
}



///////////////////////////


//首字母大写其他小写
function titleCase(str) {

    return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

// console.log(titleCase("I'm a little tea pot"));
;
/////////////////////////////////////////



function frankenSplice(arr1, arr2, n) {
    let newArr1 = [...arr1];
    let newArr2 = [...arr2];
    newArr2.splice(n, 0, ...newArr1)
    return newArr2
}

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
/////////////////////////////////
/*
算法基础：去除数组中的假值
从一个数组中移除所有假值（falsy values）。

JavaScript 中的假值有 false、null、0、""、undefined和 NaN。

提示：请尝试将每一个值转换为一个布尔值（boolean）。

*/
function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    // return arr.filter(item => item != false);//null, NaN, undefined值为假，但是不等于false
    return arr.filter(item => !item == false);
}

;
// console.log(bouncer([false, null, 0, NaN, undefined, ""]));


///////////////////
function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    let sortArr = arr.sort((a, b) => a - b)
    let len = sortArr.length;
    for (let i = 0; i < len; i++) {
        if (num == sortArr[i]) return i
        if (num >= sortArr[i] && num < sortArr[i + 1]) return i + 1
        if (num > sortArr[len - 1]) return len
    }

    return 0
}

// console.log(getIndexToIns([2, 20, 10], 19))

///////////////////////////////////////////////

/**
输入参数是一个有两个字符串元素的数组。如果第一个字符串中包含了第二个字符串中的所有字母，则返回 true。

例如，["hello", "Hello"]应该返回 true 因为第一个字符串中包含了第二个字符串中出现的所有字母（忽略大小写）。

而 ["hello", "hey"]应该返回 false 因为第一个字符串 "hello" 没有包含字母 "y"。

最后，["Alien", "line"], 应该返回 true，因为 "line" 中的所有字母都被包含在 "Alien" 中。
 */

//自己写的
function mutation0(arr) {
    let str0 = arr[0].toLowerCase();
    let str1Arr = arr[1].toLowerCase().split("");
    let len = str1Arr.length
    let isHere = true
    for (let i = 0; i < len; i++) {
        isHere *= str0.includes(str1Arr[i])
    }
    return isHere == 1;
}
// console.log(mutation1(["hello", "hey"]));
/**
 * 问题所在：
 * 1.字符串本身就可以通过[]调用，不需要切割
 * 2.只要arr[1]中存在而arr[0]中不存在就可以直接return false
 * 3.数组使用for...in...会在尾端（max）产生一个空字符串
 * 4.includes在es6中实现
 */


//进阶版
function mutation1(arr) {
    let str1 = arr[0].toLowerCase();
    let str2 = arr[1].toLowerCase();
    let len = str2.length
    for (var i = 0; i < len; i++) {
        if (str1.indexOf(str2[i]) < 0) {
            return false;
        }
    }
    return true;
}

//大神写的
function mutation2(arr) {
    let str1 = arr[0].toLowerCase();
    let str2 = arr[1].toLowerCase();
    return ![].some.call(str2, function (n) {
        return !~str1.indexOf(n);
    });
}
///////////////////////////////////



function chunkArrayInGroups(arr, size) {
    let newArr = [];
    let len = arr.length;
    for (let i = 0; i < len; i += size) {
        if (arr.length <= size) {
            console.log(11111)
            newArr.push(arr)
            return newArr
        }
        newArr.push(arr.splice(0, size))
    }


}

// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3))


///////////////////////////////////

function Animal() { }
Animal.prototype.eat = function () {
    console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Bird.prototype.fly = function () {
    console.log("I'm flying!");
};
/*
为什么不能这样简写呢？？？
Bird.prototype = {
    constructor: Bird,
    fly() {
        console.log("I'm flying!");
    }
}
 */
let duck = new Bird();
// duck.eat(); // 输出 "nom nom nom"
// duck.fly(); // 输出 "I'm flying!"


///////////////////
let funModule = (() => {
    return {
        isCuteMixin: function (obj) {
            obj.isCute = function () {
                return true;
            };
        },
        singMixin: function (obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
            };
        }
    }

})()

///////////////////////////////////////////////
//重构代码，使全局数组bookList在函数内部不会被改变。add函数可以将指定的bookName增加到数组末尾。
//remove函数可以从数组中移除指定bookName。
//两个函数都返回数组，并且任何参数都应该添加到bookName前面。

// 全局变量
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* 这个函数应该增加一本书到列表中，并返回这个列表 */
// 新参数应在 bookName 之前

// 请在本行以下添加你的代码
function add(list, bookName) {
    let newList = [...list];
    newList.push(bookName);
    return newList
    // 请在本行以上添加你的代码
}

/* 这个函数应该移除一本书到列表中，并返回这个列表 */
// 新参数应在 bookName 之前
// 请在本行以下添加你的代码
function remove(list, bookName) {
    // console.log(list)
    let newList = [...list];

    if (list.indexOf(bookName) >= 0) {


        newList.splice(list.indexOf(bookName), 1);

        // 请在本行以上添加你的代码
    }
    return newList
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
// var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

// console.log(bookList, newBookList, newerBookList, newestBookList);
// console.log(newerBookList);


///////////////////////////
//
/**
 * 手写数组map方法
 *用法：array.map(function(currentValue,index,arr), thisValue)
 * function(currentValue, index,arr) 必须。函数，数组中的每个元素都会执行这个函数
 * currentValue	必须。当前元素的值
 * index	可选。当前元素的索引值
 * arr	可选。当前元素属于的数组对象
 * thisValue	可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。
 * 如果省略了 thisValue，或者传入 null、undefined，那么回调函数的 this 为全局对象
 * 返回值：	返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
 * map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
 * map() 方法按照原始数组元素顺序依次处理元素。
 * 注意： map() 不会对空数组进行检测。
 * 注意： map() 不会改变原始数组。
 */
Array.prototype.myMap = (fn, thisValue = this) => {
    console.log(thisValue)
    let arr = []
    for (let index in this) {
        // 执行回调函数时绑定this，并将结果push进新数组
        arr.push(fn.call(thisValue, this[index], index, this))
    }
    // 返回新数组
    return arr
}
(() => {
    let arr = [1, 2, 3, 4, 5, 6, 7]
    console.log(arr.myMap(i => i + 1));


})()