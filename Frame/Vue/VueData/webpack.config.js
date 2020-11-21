const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    outout: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    resolve: {
        modules: [path.resolve(__dirname, ''), path.resolve(__dirname, 'node_modules')]
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: path.resolve(__dirname, './public/index.html')
    //     })
    // ],
    plugin: [new HtmlWebpackPlugin({
        template: './src/index.html', //源文件
        filename: 'index.html' //生成的文件
    })]
}