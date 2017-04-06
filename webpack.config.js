const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "allstyles.css",
    disable: process.env.NODE_ENV === "development",
});

module.exports = {
  entry: {
    javascript: __dirname + "/src/redux/app.jsx",
  },

  output: {
    filename: "bundle.js",
    path: __dirname + '/src/public/',
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
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }
          ],
          // use style-loader in development
          fallback: "style-loader",
        }),
      },
    ]
  },

  plugins: [extractSass]
};