const path=require('path')
const HtmlwebpackPlugin=require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: './release/bundle.js'
    },
    plugins:[
        new HtmlwebpackPlugin({
            template:'./index.html'
        })
    ],
    devServer:{
        contentBase:path.join(__dirname,'./release'),
        open:true,
        port:3333
    }
}