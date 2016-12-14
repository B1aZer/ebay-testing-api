 var path = require('path');
 var webpack = require('webpack');
 var FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');

 module.exports = {
     entry: './app/main.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'main.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     },
     plugins: [
       new FlowBabelWebpackPlugin(),
     ],
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };
