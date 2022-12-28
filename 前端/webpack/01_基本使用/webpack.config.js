const path  = require('path'); // nodejs核心模块，专门用来处理路径问题

module.exports = {
  // 入口
  entry: "./src/main.js", // 相对路径
  // 输出
  output: {
    // 所有打包文件的输出路径
    // __dirname nodejs的变量，代表当前文件的文件夹目录
    path: path.resolve(__dirname, 'dist'), // 绝对路径
    // 文件名
    filename: 'static/js/main.js',
    // 自动清空上次打包的内容
    // 原理：在打包前，将path整个目录内容清空，再进行打包
    clean: true,
  },
  // 加载器
  module: {
    rules: [
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
        generator: {
          // 输入图片名称
          // [hash:10] hash值取前10位
          filename: "static/images/[hash:10][ext][query]"
        }
      },
      // 字体、图标配置
      {
        test: /\.(ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          // 输出名称
          filename: "static/media/[hash:10][ext][query]"
        }
      },
    ]
  },
  // 插件
  plugins: [
    // plugin的配置
  ],
  // 模式 development | production
  mode: "development"
}