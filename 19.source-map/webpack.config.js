/* eslint-disable linebreak-style */
/* eslint-disable quotes */

/*
  
 */
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./src/js/index.js", "./src/index.html"],
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      // loader的配置
      {
        // 处理less资源
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        // 处理css资源
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        // 处理图片资源
        test: /\.(jpg|png|gif)$/,
        loader: "url-loader",
        options: {
          limit: 8 * 1024,
          name: "[hash:10].[ext]",
          outputPath: "imgs",
        },
      },
      {
        // 处理html中的img资源
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        // 处理其他资源
        exclude: /\.(html|js|css|less|jpg|png|gif)$/,
        loader: "file-loader",
        options: {
          name: "[hash:10].[ext]",
          outputPath: "media",
        },
      },
    ],
  },
  plugins: [
    // plugins的配置
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  mode: "development",
  devServer: {
    contentBase: resolve(__dirname, "build"),
    compress: true,
    port: 3000,
    open: true,
    // 开启HMR功能
    // 当修改了webpack配置,新配置想要生效,必须重新启动webpack服务
    hot: true,
  },
  devtool: "inline-source-map",
};

/*
    source-map:一种提供源代码到构建后代码映射技术(如果构建后代码出错了,通过映射关系可以追踪到源代码错误)
      [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map
      source-map:外部
        错误代码准确信息 和 源代码的错误位置
      inline-source-map: 内联
        只生成一个内联source-map
        错误代码准确信息 和 源代码的错误位置
      hidden-source-map: 外部
        隐藏源代码
        错误代码错误原因,但是没有错误位置
        不能追踪到源代码的错误,只能提示到构建后代码的错误位置
      eval-source-map: 内联
        每一个文件都生成相对应的source-map,都在eval
        错误代码准确信息 和 源代码的错误位置
      nosources-source-map:外部
        隐藏源代码
        错误代码准确信息,但是没有任何源代码信息
      cheap-source-map:外部
        错误代码准确信息 和 源代码的错误位置
        只能精确到行
      cheap-module-source-map:外部
        错误代码准确信息 和 源代码的错误位置
        module会将loader的source map加入
        
      内联 和 外部:1.外部生成了文件,内联没有 2.内联构建速度更快
      
      开发环境:速度快,调试更友好
        速度快(eval>inline>cheap>...)
          eval-cheap-source-map
          eval-source-map
        调试更友好
          source-map
          cheap-module-source-map
          cheap-source-map
          *
        --> eval-source-map / eval-cheap-module-source-map
      生产环境:源代码要不要隐藏?调试要不要更友好
        内联会让代码体积更大,所以生产环境不用内联
        nosources-source-map 全部隐藏
        hidden-source-map 只隐藏源代码,会提示构建后代码错误信息
        *
        --> source-map / cheap-module-souce-map
*/
