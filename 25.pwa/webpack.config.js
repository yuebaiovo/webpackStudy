const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
/* 
  PWA:渐进式网络开发应用程序(离线可访问)
    workbox --> workbox-webpack-plugin

 */

module.exports = {
  // 单入口
  entry: "./src/js/index.js",
  // entry: {
  //   index: "./src/js/index.js",
  //   test: "./src/js/test.js",
  // },
  output: {
    // [name]：取文件名
    filename: "js/[name].[contenthash:10].js",
    path: resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      /* 
      1.帮助serviceworker快速启动
      2.删除旧的 serviceworker
      
      生成一个 serviceworker 配置文件
    */
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  mode: "production",
};
