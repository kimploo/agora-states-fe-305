const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const json = require('./file.json');
// require('index.css');
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"), // './dist'의 절대 경로를 리턴합니다.
    filename: "app.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_module/,
      },
      {
        test: /\.(sass|scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        //외부라이브러리를 가져와서 css를 구성할 경우(ex @stackoverflow/~), 그 라이브러리는 
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        exclude: /node_module/,
      },
      { test: /\.txt$/, use: "raw-loader", exclude: /node_module/},
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_module/,
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        exclude: /node_module/,
      },
    ],
  },  
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: ['node_modules'],
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "public", "index.html")
  })]
};
