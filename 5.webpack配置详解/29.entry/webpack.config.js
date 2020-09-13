const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/* 
    entry: 入口七点
        1. string  --> './src/index.js'
            单入口
            打包形成一个chunk,输出一个bundle文件
            此时chunk的名称默认是main
        2. array -- >["./src/index.js", "./src/add.js"]
            多入口
            所有入口文件最终只会形成一个chunk,输出出去只有一个bundle文件
              --> 只有在HMR功能中让html文件热更新失效
        3. object
            多入口
            有几个入口文件就形成几个chunk,同时输出几个bundle
            此时chunk的名称是key的值
            
            -- 特殊用法
            {
                // 所有入口文件最终只会形成更一个chunk,输出出去只有一个bundle文件
                index:['./src/index.js','./src/count.js']
                // 形成一个chunk,输出一个bundle文件
                add: './src/add.js'
            }
 */

module.exports = {
  entry: {
    index: "./src/index.js",
    add: "./src/add.js",
  },
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "build"),
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: "development",
};
