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
      /*
        语法检查: eslint_loader eslint
        注意:只检查自己写的源代码,第三方库是不用检查的
        设置检查规则:
        package.json中eslintConfig中配置
        "eslintConfig": {
            "extends": "airbnb-base"
        }
        airbnb --> eslint-loader eslint eslint-config-airbnb-base eslint-plugin-import
        */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          // 自动修复eslint的错误
          fix: true,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
