const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    // 文件名称(指定目录+指定名称)
    filename: "js/[name].js",
    // 输出文件目录(将来所有资源输出的公共目录)
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      // loader的配置
      {
        test: /\.css$/,
        // 多个loader用use
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: "development",
  // 解析模块的规则
  resolve: {
    // 配置解析模块路径别名:优点简写路径 缺点路径没提示
    alias: {
      $css: resolve(__dirname, "src/css"),
    },
    // 配置省略文件路径的后缀名
    extensions: [".js", ".josn", ".jsx", ".css"],
    // 告诉webpack 解析模块时去找哪个目录
    modules: [resolve(__dirname, "../../node_modules"), "node_modules"],
  },
};
