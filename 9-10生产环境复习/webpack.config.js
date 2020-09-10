/* eslint-disable linebreak-style */
/* eslint-disable quotes */
const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commentCssLoader = [
  MiniCssExtractPlugin.loader,
  "css-loader",
  {
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
  entry: "./src/js/index.js",
  output: resolve(__dirname, "built"),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [...commentCssLoader],
      },
      {
        test: /\.less$/,
        use: [...commentCssLoader, "less-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: "pre",
        loader: "eslint-loader",
        options: {
          fix: true,
        },
      },
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
              targets: { chrome: "60", firefox: "60" },
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
        exclude: /\.(js|html|css|less|jpg|png|gif)/,
        loader: "file-loader",
        options: {
          outputPath: "media",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseInlineTagWhitespace: true,
        removeComments: true,
      },
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/built.css",
    }),
  ],
  mode: "production",
};
