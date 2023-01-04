const os = require("os"); // nodejs核心模块，直接使用
const path  = require('path'); // nodejs核心模块，专门用来处理路径问题
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

// cpu核数
const threads = os.cpus().length;

module.exports = {
  // 入口
  entry: "./src/main.js", // 相对路径
  // 输出
  output: {
    // 所有打包文件的输出路径
    // __dirname nodejs的变量，代表当前文件的文件夹目录
    path: undefined,
    // 入口文件打包输出文件名
    filename: "static/js/[name].js",
    // 给打包输出的其他文件命名
    chunkFilename: "static/js/[name].chunk.js",
    // 图片、字体等通过type:asset处理资源命名方式
    assetModuleFilename: "static/media/[hash:10][ext][query]",
  },
  // 加载器
  module: {
    rules: [
      {
        oneOf: [
          // css的配置
          {
            test: /\.css$/, // 检测.css文件
            use: [ // 执行顺序：从右到左（从下到上）
              "style-loader", // 将js中css通过创建style标签添加html文件中生效
              "css-loader", // 将css资源编译成commonjs的模块到js中
            ],
          },
          // less的配置
          {
            test: /\.less$/, // 检测.less文件
            use: [
              "style-loader",
              "css-loader",
              "less-loader", // 将less资源编译成css
            ],
          },
          // scss/sass的配置
          {
            test: /\.s[ac]ss$/, // 检测.scss或者.sass文件
            use: [
              "style-loader",
              "css-loader",
              "sass-loader", // 将scss或者sass资源编译成css
            ],
          },
          // stylus的配置
          {
            test: /\.styl$/, // 检测.stylus文件
            use: [
              "style-loader",
              "css-loader",
              "stylus-loader", // 将stylus资源编译成css
            ],
          },
          // 图片资源配置
          {
            test: /\.(png|jpe?g|gif|webp|svg)$/,
            type: "asset",
            parser: {
              dataUrlCondition: {
                maxSize: 10 * 1024 // 小于10kb的图片会被base64处理
              }
            },
            // generator: {
            //   // 输入图片名称
            //   // [hash:10] hash值取前10位
            //   filename: "static/images/[hash:10][ext][query]"
            // }
          },
          // 其他资源配置（字体、图标、音频、视频、文档）
          {
            test: /\.(ttf|woff2?|mp3|mp4|avi|mov)$/,
            type: "asset/resource",
            // generator: {
            //   // 输出名称
            //   filename: "static/media/[hash:10][ext][query]"
            // }
          },
          // js的配置
          {
            test: /\.js$/,
            exclude: /node_modules/, // 排除node_modules代码不编译
            use: [
              {
                loader: "thread-loader", // 开启多进程
                options: {
                  workers: threads, // 数量
                },
              },
              {
                loader: "babel-loader",
                options: {
                  cacheDirectory: true, // 开启babel编译缓存
                  cacheCompression: false, // 缓存文件不要压缩
                  plugins: ["@babel/plugin-transform-runtime"], // 减少代码体积
                },
              },
            ],
          },
        ]
      }
    ]
  },
  // 插件
  plugins: [
    new ESLintPlugin({
      // 检测哪些文件
      context: path.resolve(__dirname, "../src"),
      threads, // 开启多进程
    }),
    new HtmlWebpackPlugin({
      // 以 public/index.html 为模板创建文件
      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
  // 压缩的操作
  optimization: {
    minimizer: [
      // 压缩图片
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              [
                "svgo",
                {
                  plugins: [
                    "preset-default",
                    "prefixIds",
                    {
                      name: "sortAttrs",
                      params: {
                        xmlnsOrder: "alphabetical",
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),
    ]
  },
  // 开发服务器：不会输出资源，在内存中编译打包的
  devServer: {
    host: "localhost", // 启动服务器域名
    port: "3000", // 启动服务器端口号
    open: true, // 是否自动打开浏览器
    hot: true, // 开启HMR（默认值）
  },
  // 模式 development | production
  mode: "development",
  // 源代码映射：设置后可以更快找到错误根源
  devtool: "cheap-module-source-map",
}