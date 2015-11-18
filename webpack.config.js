var path = require('path');
var webpack = require('webpack');

var webpackSettings = {
    context: path.resolve('./src'),
    entry: [
        './index.js'
    ],
    output: {
        path: path.resolve('dist/'),
        publicPath: '/dist/',
        filename: 'react-tel-input.js'
    },
    module: {
        loaders: [
        ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    resolve: {
        extensions: ['', '.js']
    }
};

module.exports = webpackSettings;
