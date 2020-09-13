const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
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
        user: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        // 排除node_modules下的js 文件
        exclude: /node_modules/,
        // 只检查src下的js文件
        include: resolve(__dirname, "src"),
        // 优先执行
        enforce: "pre",
        // 延后执行
        // enforce: "post",
        // 单个loader用loader
        loader: "eslint-loader",
        options: {},
      },
      {
        // 以下配置只会生效一个
        oneOf: [],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: "development",
};
