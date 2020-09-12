const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      // loader的配置
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      //   复制一个'./src/index.html'文件,并自动引入打包输出的所有资源
      template: "./src/index.html",
    }),
  ],
  mode: "production",
  externals: {
    // 拒绝jQuery被打包进来
    jquery: "jQuery",
  },
};
