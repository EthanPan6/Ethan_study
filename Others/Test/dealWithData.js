let data = ["⼿机号码归属地API接⼝：juhe.cn/docs/api/id/11", "历史上的今天API接⼝：juhe.cn/docs/api/id/63", "股票数据API接⼝：juhe.cn/docs/api/id/21", "全国WIFI接⼝：juhe.cn/docs/api/id/18", "星座运势接⼝：juhe.cn/docs/api/id/58", "⻩⾦数据接⼝：juhe.cn/docs/api/id/29", "语⾳识别接⼝：juhe.cn/docs/api/id/134", "周公解梦接⼝：juhe.cn/docs/api/id/64", "天⽓预报API接⼝：juhe.cn/docs/api/id/73", "身份证查询API接⼝：juhe.cn/docs/api/id/38", "笑话⼤全API接⼝：juhe.cn/docs/api/id/95", "邮编查询接⼝：juhe.cn/docs/api/id/66", "⽼⻩历接⼝：juhe.cn/docs/api/id/65", "⽹站安全检测接⼝：juhe.cn/docs/api/id/19", "⼿机固话来电显示接⼝：juhe.cn/docs/api/id/72", "基⾦财务数据接⼝：juhe.cn/docs/api/id/28", "成语词典接⼝：juhe.cn/docs/api/id/157", "新闻头条接⼝：juhe.cn/docs/api/id/235", "IP地址接⼝：juhe.cn/docs/api/id/1", "问答机器⼈接⼝：juhe.cn/docs/api/id/112", "汇率API接⼝：juhe.cn/docs/api/id/80", "电影票房接⼝：juhe.cn/docs/api/id/44", "万年历API接⼝：juhe.cn/docs/api/id/177", "NBA赛事接⼝：juhe.cn/docs/api/id/92"]
let apiObj = {};
data.forEach(item => {
    let itemArr = item.split("：");
    // console.log(itemArr)
    Object.defineProperty(apiObj, itemArr[0], {
        value: itemArr[1],
        writable: true
    })
    console.log(apiObj)
    // apiObj[itemArr[0]] = itemArr[1]
})
console.log(apiObj['基⾦财务数据接⼝'])