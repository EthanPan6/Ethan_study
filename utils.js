//判断value是否为非null的对象
function isObject(value) {
    return typeof value === "object" && value !== null;
}

//判断target对象中是否有key键值
function hasOwnProperty(target, key) {
    return Object.hasOwnProperty.call(target, key)
}

//判断新旧值是否相等
function isEqual(newValue, oldValue) {
    return newValue === oldValue
}
//根据format格式化日期
function formatDate(date, format) {
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
function zeroize(value) {
    value = String(value);
    return value.length == 1 ? '0' + value : value;
}
// console.log(zeroize(8));

//控制台防调试
var noDebug = (() => {
    setInterval(function () {
        check()
    }, 4000);
    var check = function () {
        function doCheck(a) {
            if (("" + a / a)["length"] !== 1 || a % 20 === 0) {
                (function () { }
                ["constructor"]("debugger")())
            } else {
                (function () { }
                ["constructor"]("debugger")())
            }
            doCheck(++a)
        }
        try {
            doCheck(0)
        } catch (err) { }
    };
    check();
})()


// export {
//     isObject,
//     hasOwnProperty,
//     isEqual,
//     formatDate,
//     dateFormat
// }