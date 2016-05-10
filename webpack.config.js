var webpack = require('webpack');
var rucksack = require('rucksack-css');
var cssnext = require('postcss-cssnext');
var path = require('path');

module.exports = {
    context: path.join(__dirname, './app'),
    entry: {
        jsx: './index.js',
        html: './index.html'
    },
    output: {
        path: path.join(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        preloaders: preloaders(),
        loaders: loaders()
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
    postcss: postcss
};

function preloaders() {
    return [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loaders: [
                'eslint-loader'
            ]
        }
    ];
}

function loaders() {
    return [
        {
            test: /\.html$/,
            loaders: [
                'file?name=[name].[ext]'
            ]
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loaders: [
                'react-hot',
                'babel-loader'
            ]
        },
        {
            test: /\.css$/,
            loaders: [
                'style-loader',
                'css-loader?modules&importLoaders=1',
                'postcss-loader'
            ]
        }
    ];
}

function postcss() {
    return [
        cssnext,
        rucksack
    ];
}
