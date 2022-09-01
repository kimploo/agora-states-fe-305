const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const json = require('./file.json');
// require('index.css');
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"), // './dist'의 절대 경로를 리턴합니다.
    filename: "app.bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.(sass|scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        exclude: /node_modules/,
      },
      { test: /\.txt$/, use: "raw-loader", exclude: /node_modules/ },
      {
        test: /\.json$/,
        loader: "json-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
  ],
};
