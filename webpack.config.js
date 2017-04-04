const path = require('path');

module.exports = {
  context: __dirname,

  entry: {
    javascript: "./src/app.js"
  },

  output: {
    filename: "bundle.js",
    path: __dirname + "/public"
  },

  resolve: {
    extensions: ['*','.js', '.jsx', '.json'],
  },

  module: {
    loaders: [
      {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loaders: ["react-hot-loader", "babel-loader"]
      },
      {
          test: /\.html$/,
          loader: "file-loader?name=[name].[ext]"
      }
    ]
  }
};