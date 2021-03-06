const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        app: './demo/index.js',
        tools: './tools/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'gh-pages'),
        filename: '[name].[chunkhash:8].js'
    },
    resolve: {
        alias: {
            'react-component-echarts': path.resolve(__dirname, 'src/index.js')
        }
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new CopyPlugin([{ from: './favicon.ico', to: './favicon.ico' }]),
        new HtmlWebpackPlugin({
            template: './demo/index.html',
            filename: './index.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            template: './tools/index.html',
            filename: './tools.html',
            chunks: ['tools']
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
