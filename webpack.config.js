var path = require("path");
var BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  context: __dirname,

  entry: {
    main: "./fe_challenge/static/js/pages/home",
    csv: "./fe_challenge/static/js/pages/csv",
    form: "./fe_challenge/static/js/pages/form"
  },

  output: {
    path: path.resolve("./fe_challenge/static/bundles/"),
    filename: "[name]-[hash].js"
  },

  plugins: [new BundleTracker({ filename: "./webpack-stats.json" })],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  }
};
