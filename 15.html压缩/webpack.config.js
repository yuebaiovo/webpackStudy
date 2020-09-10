/* eslint-disable linebreak-style */
/* eslint-disable quotes */
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        // 移除空格
        collapseInlineTagWhitespace: true,
        // 移除注释
        removeComments: true,
      },
    }),
  ],
  mode: "production",
};
