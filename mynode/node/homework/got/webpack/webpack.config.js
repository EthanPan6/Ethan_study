const path = require('path');

module.exports = {
    mode: 'development',
    //模式
    //mode 参数: development|production你可以启用相应模式下的 webpack 内置的优化

    entry: './src/index.js',
    //入口
    //入口是可以包含所有的模块(.css.sass.js.html fs http jquery request)

    output: {
        //出口
        path: path.resolve(__dirname, './dist'),//输出路径
        filename: 'bundle.js'//输出文件名(bundle:打包),打包后的模块文件
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' }
        ]
    }
};