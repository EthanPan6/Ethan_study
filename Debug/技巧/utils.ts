//判断value是否为非null的对象
function isObject(value):boolean {
    return typeof value === "object" && value !== null;
}

//判断target对象中是否有key键值
function hasOwnProperty(target:object, key:string):boolean {
    return Object.hasOwnProperty.call(target, key)
}

//判断新旧值是否相等
function isEqual(newValue, oldValue):boolean {
    return newValue === oldValue
}
//根据format格式化日期
function formatDate(date, format:string) {
    if (typeof date === "string") {
        var mts = date.match(/(\/Date\((\d+)\)\/)/);
        // console.log(mts);
        if (mts && mts.length >= 3) {
            date = parseInt(mts[2])
        }
    }
    date = new Date(date);
    if (!date || date.toUTCString() == "Invalid Date") {
        return ''
    }
    var o = {
        "M": date.getMonth() + 1, //月份 
        "d": date.getDate(), //日 
        "h": date.getHours(), //小时 
        "m": date.getMinutes(), //分 
        "s": date.getSeconds(), //秒 
        "q": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };
    format = format.replace(/([yMdhmsqS])+/g, (all, t) => {
        var v = o[t];
        if (v !== undefined) { //不等于undefined
            // if (all.length > 1) {
            //     v = v > 9 ? '' + v : '0' + v;
            //     v.substr(v.length - 2);
            // }
            v = all.length == 1 ? '0' + v : '' + v;
            v.substr(v.length - 2);
            return v
        } else if (t === 'y') {
            return (date.getFullYear() + "").substr(4 - all.length)
        }
        return all
    });
    return format
}

function dateFormat(date, format) {
    var o = {
        "M+": date.getMonth() + 1, //月份 
        "d+": date.getDate(), //日 
        "h+": date.getHours(), //小时 
        "m+": date.getMinutes(), //分 
        "s+": date.getSeconds(), //秒 
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return format;
}
// console.log(dateFormat(new Date(), 'yyyy-MM-dd'));

//补零操作
function zeroize(value) :string{
    value = String(value);
    return value.length == 1 ? '0' + value : value;
}
// console.log(zeroize(8));

//判断是否是数字
function isNumber(val) {
    // isFinite(Infinity);  // false
    // isFinite(NaN);       // false
    // isFinite(-Infinity); // false
    // isFinite(0);         // true
    // isFinite(2e64);      // true, 在更强壮的Number.isFinite(null)中将会得到false
    // isFinite("0");       // true, 在更强壮的Number.isFinite('0')中将会得到false

    // 不加Number时,'123'判断为true

    //无法测试 bigInt类型的数字

    return Number.isFinite(val)
}
//生成随机字符串
function createRamdomString(len: number): string {
    //
    return Math.random().toString(36).slice(len)
}


//获取数据类型
function getType(params) {
    var type = Object.prototype.toString.call(params)
    return type.match(/\[object(.*?\]/)[1]
}

var type = function (o) {
    var s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

['Null',
    'Undefined',
    'Object',
    'Array',
    'String',
    'Number',
    'Boolean',
    'Function',
    'RegExp'
].forEach(function (t) {
    type['is' + t] = function (o) {
        return type(o) === t.toLowerCase();
    };
});





// export {
//     isObject,
//     hasOwnProperty,
//     isEqual,
//     formatDate,
//     dateFormat
// }