const path = require("path")


module.exports = {
    entry: "./src/index.js", //入口文件
    output: { //输出文件
        filename: "bundle.js", //文件名
        path: path.resolve(__dirname, "dist") //文件路径,绝对路径
    },
    plugins: [],
    mode: 'development', //开发模式
    //production 生产模式
    module: {
        rules:[
            {
              test:/\.css$/, 
              use:[]
            }
        ]
    }
}