const path = require("path");
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map',
    mode:'development',
    entry: {
        index: "./src/index.js" //入口文件，若不配置webpack4将自动查找src目录下的index.js文件
    },
    output: {
        filename: "[name].[hash].js",//输出文件名，[name]表示入口文件js名
        path: path.join(__dirname, "dist")//输出文件路径
    },
    module:{
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude:/node_modules/,
                query:{
                    presets:['react','es2015']
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template:'src/index.html'
    })], //第三步，实例化后放在plugins这个数组中就行
    devServer:{
        contentBase: path.join(__dirname, "dist"),
        port: 9000, //端口改为9000
        open:true // 自动打开浏览器，适合懒人
    }
}