var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    entry: [
        __dirname + '/app/scripts/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: '/bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.(png|jpg|gif)$/, loader: "url-loader" }
        ]
    },
    plugins: [
    	new HtmlWebpackPlugin({template: __dirname + "/app/index.html"}),
      new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new ExtractTextPlugin("[name]-[hash].css")
    ]
};
