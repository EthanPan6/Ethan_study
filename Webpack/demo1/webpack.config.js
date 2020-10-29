const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js", //入口文件
    output: { //输出文件
        filename: "bundle.js", //文件名
        path: path.resolve(__dirname, "dist") //文件路径,绝对路径
    },
    mode: 'development', //开发模式
    //production 生产模式
    module: { //引入某种格式的文件转化的模块
        rules: [ //规则
            {
                test: /\.css$/, //使用正则
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: "url-loader",
                options: {
                    limit: 8 * 1024,
                    esModule: false,
                    name: '[hash:10].[ext]'
                    //[hash:10]取哈希的前十位
                    //[ext]取图片的拓展名
                }
            }, {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), //项目构建路径
        compress: true, //自动gzip压缩
        port: 3000, //端口
        open: true, //自动打开浏览器
        proxy: {
            '/api/*': {
                target: "http//:localhost:3001"
            }
        }

    }
}