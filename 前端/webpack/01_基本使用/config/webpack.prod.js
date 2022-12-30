const os = require("os"); // nodejs核心模块，直接使用
const path  = require('path'); // nodejs核心模块，专门用来处理路径问题
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

// cpu核数
const threads = os.cpus().length;

// 获取处理样式的Loaders
const getStyleLoaders = (preProcessor) => {
  return [
    MiniCssExtractPlugin.loader,
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [
            "postcss-preset-env", // 能解决大多数样式兼容性问题
          ],
        },
      },
    },
    preProcessor,
  ].filter(Boolean);
};

module.exports = {
  // 入口
  entry: "./src/main.js", // 相对路径
  // 输出
  output: {
    // 所有打包文件的输出路径
    // __dirname nodejs的变量，代表当前文件的文件夹目录
    path: path.resolve(__dirname, '../dist'), // 绝对路径
    // 文件名
    filename: 'static/js/main.js',
    // 自动清空上次打包的内容
    // 原理：在打包前，将path整个目录内容清空，再进行打包
    clean: true,
  },
  // 加载器
  module: {
    rules: [
      {
        oneOf: [
          // css的配置
          {
            test: /\.css$/, // 检测.css文件
            use: getStyleLoaders(),
          },
          // less的配置
          {
            test: /\.less$/, // 检测.less文件
            use: getStyleLoaders("less-loader"),
          },
          // scss/sass的配置
          {
            test: /\.s[ac]ss$/, // 检测.scss或者.sass文件
            use: getStyleLoaders("sass-loader"),
          },
          // stylus的配置
          {
            test: /\.styl$/, // 检测.stylus文件
            use: getStyleLoaders("stylus-loader"),
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
            generator: {
              // 输入图片名称
              // [hash:10] hash值取前10位
              filename: "static/images/[hash:10][ext][query]"
            }
          },
          // 其他资源配置（字体、图标、音频、视频、文档）
          {
            test: /\.(ttf|woff2?|mp3|mp4|avi|mov)$/,
            type: "asset/resource",
            generator: {
              // 输出名称
              filename: "static/media/[hash:10][ext][query]"
            }
          },
          // js的配置
          {
            test: /\.js$/,
            // exclude: /node_modules/, // 排除node_modules代码不编译
            include: path.resolve(__dirname, "../src"), // 也可以用包含
            // loader: "babel-loader",
            // options: {
            //   cacheDirectory: true, // 开启babel编译缓存
            //   cacheCompression: false, // 缓存文件不要压缩
            // },
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
      exclude: "node_modules", // 默认值
      cache: true, // 开启缓存
      // 缓存目录
      cacheLocation: path.resolve(__dirname, "../node_modules/.cache/.eslintcache"),
      threads, // 开启多进程
    }),
    new HtmlWebpackPlugin({
      // 以 public/index.html 为模板创建文件
      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    // 提取css成单独文件
    new MiniCssExtractPlugin({
      // 定义输出文件名和目录
      filename: "static/css/main.css",
    }),
  ],
  // 压缩的操作
  optimization: {
    minimize: true,
    minimizer: [
      // 压缩css：css压缩也可以写到optimization.minimizer里面，效果一样的
      new CssMinimizerPlugin(),
      // 压缩js：当生产模式会默认开启TerserPlugin，但是我们需要进行其他配置，就要重新写了
      new TerserPlugin({
        parallel: threads // 开启多进程
      })
    ],
  },
  // 模式 development | production
  mode: "production",
  // 源代码映射：设置后可以更快找到错误根源
  devtool: "source-map",
}