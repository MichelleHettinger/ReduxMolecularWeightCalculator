const path = require('path');

module.exports = {
  context: __dirname + '/src',

  entry: {
    javascript: "./redux/app.jsx",
  },

  output: {
    filename: "bundle.js",
    path: __dirname + '/src/public',
  },

  resolve: {
    extensions: ['*','.js', '.jsx', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: ["react-hot-loader", "babel-loader"]
      },
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, 'server.js', 'mock/*'],
        loader: "eslint-loader",
        enforce: "pre",
      }
    ]
  }
};