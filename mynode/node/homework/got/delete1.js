//delete annotation
const fs = require('fs')

fs.readFile('sample.js', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        var str = data.toString()

        var reg1 = /^\/\/.*$/igm;//js单行注释
        // var reg2 = /\/\*(.|\n)*\*\//igm;//js多行注释
        var reg2 = /^\/\*(.|\r\n)*\*\/$/igm;//js多行注释
        //  windows的换行是/r/n

        var reg3 = /console\.log\(.*?\)/g;//打印信息

        var reg4 = /;(?!\s*\n*\s*\()/g;//分号

        // var reg5 = /\s*\n\s*\(/g;//换行
        // 换行+去空格??编译错误
        //可以省略的换行:前面或者后面是'{'或者'}'
        //前面是';'

        //空格
        var reg6 = /(?<!(var|return|let|const))\s/g;

        // var newstr = str.replace(reg1, '').replace(reg2, '').replace(reg3, '');
        var newstr = str.replace(reg6, '')
        console.log(newstr)
    }
})