const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-typescript'],
                    },
                },
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: 'url-loader?limit=25000',
            },
            {
                test: /\.(svg|png|jpg)$/,
                loader: 'file-loader',
            },
        ],
    },
    resolve: {
        plugins: [new TsconfigPathsPlugin()],
        extensions: ['.ts', '.tsx', '.js'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};
