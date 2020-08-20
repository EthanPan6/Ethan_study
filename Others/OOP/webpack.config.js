const path = require('path');//手动配置出口的需要
const HtmlWebPackPlugin =require('html-webpack-plugin')
//暴露配置对象
module.exports = {
    mode: 'development',
    //必须
    //development 开发模式,不压缩输出文件
    //production  生产模式,会压缩输出文件

    // entry:{} 入口
    //output:{} 出口
    //webpack4.x不需要配置入口和出口
    //约定大于配置,尽量减少了配置
    //约定了默认的打包入口为src->index.js

    //手动配置入口
    entry: {
        entry: './src/index.js'
    },
    //手动配置出口
    output: {
        //输出的路径，用了Node语法
        path: path.resolve(__dirname, 'dist'),
        //输出的文件名称
        filename: 'bundle.js'
    },

    module: {},
    //插件，用于生产模版和各项功能
    plugins: [new HtmlWebpackPlugin({
        // template: './src/index.html', //源文件
        // filename:'index.html'//生成的文件
    })],
    //配置webpack开发服务功能
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        // 压缩
        compress: true,
        // 端口
        port: 9000
    }
}