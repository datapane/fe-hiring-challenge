var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,

  entry: './react/js/index.js',

  output: {
      path: path.resolve('./react/js/static/bundles/'),
      filename: "[name]-[hash].js",
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader", 
        query:{
              presets:['@babel/preset-react']
              }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};