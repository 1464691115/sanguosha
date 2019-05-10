const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
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
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: '《三国杀Online》官方网站_风靡全球的游卡社交桌游_星火燎原重燃三国',           //标题
            filename: 'index.html',                     //dist目录下生成的文件名
            template: './src/html/index.html',          //写html代码的地方
            favicon: './src/image/favicon.ico'           //给生成的html生成一个 favicon，也就是网址旁边的图标
        }),
        new CleanWebpackPlugin()
    ],

    //服务器配置
    devServer: {
        contentBase: './dist',
        publicPath: '/'
    }
};