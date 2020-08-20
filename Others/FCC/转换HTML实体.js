//写一个转换 HTML entity 的函数。需要转换的 HTML entity 有&、<、>、"（双引号）和'（单引号）。
function convertHTML(str) {
    let entityMap = {
        '&': '$amp',
        '<': '$lt',
        '>': '$gt',
        '"': '$quot',
        '\'': '$apos'
    }
    let res = '';

    //方法一
    // for (let i of str) {
    //     console.log(res);
    //     res += entityMap.hasOwnProperty(i) ? entityMap[i] : i
    //     console.log(res);
    // }
    // // &colon;&rpar;
    // return res;


    //方法二
    for (let i of str) {
        console.log(res);
        res += entityMap[i] || i
        console.log(res);
    }
    // &colon;&rpar;
    return res;

    //方法三：遍历+if-else

    //方法四正则替换

    //方法五：转数组用reduce方法


}
convertHTML("Dolce & Gabbana");
