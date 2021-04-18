const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    stats: 'minimal',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                //   exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }

            },
            {
                test: /\.(png|jp(e*)g|svg|wav|css)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: false,
                            name: 'static/[hash]-[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: '/index.html',
        })
    ],
}