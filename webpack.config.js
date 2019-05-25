const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/js/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'aa',           //标题
            filename: 'index.html',                     //dist目录下生成的文件名
            template: './src/html/index.html',          //写html代码的地方
            favicon: './src/image/favicon.ico',          //给生成的html生成一个 favicon，也就是网址旁边的图标
            inject : true
        }),

        new CleanWebpackPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

    //服务器配置
    devServer: {
        overlay: {
            errors: true, //编译过程中如果有任何错误，都会显示到页面上
        },
        open: true, //自动帮你打开浏览器
        hot: true
    }
};
