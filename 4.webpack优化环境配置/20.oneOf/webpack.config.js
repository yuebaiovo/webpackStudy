/* eslint-disable linebreak-style */
/* eslint-disable quotes */
const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 定义nodejs环境变量:决定使用browserslist的哪个环境
process.env.NODE_ENV = "production";

// 复用loader
const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  //
  "css-loader",
  {
    //   还需要在package.json中定义browserslist
    loader: "postcss-loader",
    options: {
      ident: "postcss",
      plugins: () => {
        require("postcss-preset-env")();
      },
    },
  },
];

module.exports = {
  entry: "/src/js/index.js",
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        // 在package.json中eslintConfig --> airbnb
        test: /\.js$/,
        exclude: /node_modules/,
        // 优先执行
        enforce: "pre",
        loader: "eslint-loader",
        options: {
          // 自动修复
          fix: true,
        },
      },
      {
        // 以下loader只会匹配一个
        // 注意: 不能有两个配置处理同一种类型的文件
        oneOf: [
          {
            test: /\.css$/,
            use: [...commonCssLoader],
          },
          {
            test: /\.less$/,
            use: [...commonCssLoader, "less-loader"],
          },
          /*       正常来讲一个文件只能被一个loader处理
      当一个文件要被多个loader处理,那么一定要指定loader执行的先后顺序 
      限制性eslint 再执行babel
      */
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: { version: 3 },
                  targets: {
                    chrome: "60",
                    firefox: "60",
                  },
                },
              ],
            },
          },
          {
            test: /\.(jpg|png|gif)/,
            loader: "url-loader",
            options: {
              limit: 8 * 1024,
              name: "[hash:10].[ext]",
              outputPath: "imgs",
            },
          },
          {
            test: /\.html$/,
            loader: "html-loader",
          },
          {
            exclude: /\.(js|css|less|html|jpg|png|gif)/,
            loader: "file-loader",
            options: {
              outputPath: "media",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/built.css",
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseInlineTagWhitespace: true,
        removeComments: true,
      },
    }),
  ],
  mode: "production",
};
