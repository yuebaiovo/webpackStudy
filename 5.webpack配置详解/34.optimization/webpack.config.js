const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    // 文件名称(指定目录+指定名称)
    filename: "js/[name].[contenthash:10].js",
    // 输出文件目录(将来所有资源输出的公共目录)
    path: resolve(__dirname, "build"),
    chunkFilename: "js/[name].[contenthash:10]_chunk.js",
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
  optimization: {
    splitChunks: {
      chunks: "all",
      // 默认值，可以不写
      /*  miniSize: 30 * 1024, // 分割的chunk最小为30kb
      maxSize: 0, // 最大没有限制
      minChunks: 1, // 要提取的chunks最少被引用一次
      maxAsyncRequests: 5, // 按需加载时并行加载的文件的最大数量
      maxInitialRequests: 3, // 入口js文件最大并行请求数量
      automaticNameDelimiter: "~", // 名称连接符
      name: true, // 可以使用命名规则
      cacheGroups: {
        // 分割chunk的组
        // node_modules文件会被打爆到vendors组的chunk中 --> vendors~xxx.js
        // 满足上面公共规则,如:大小超过30kb,至少被饮用一次
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          // 优先级
          priority: -10,
        },
        default: {
          // 要提取的chunk最少被引用2次
          minChunks: 2,
          // 优先级
          priority: -20,
          // 如果当前要打包的模块,和之前已经被提取的模块是同一个,就会复用,而不是重新打包模块
          reuseExistingChunk: true,
        },
      }, */
    },
    // 将当前模块的记录其他模块的hash单独打包为一个文件 runtime
    // 解决：修改a文件导致b文件的contenthash变化
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
    minimizer: [
      // 配置生产环境的压缩方案：js和css
      new TerserWebpackPlugin({
        // 开启缓存
        cache: true,
        // 开启多线程打包
        parallel: true,
        // 启用source-map
        sourceMap: true,
      }),
    ],
  },
};
