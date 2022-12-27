const postcssPresetEnv = require('postcss-preset-env');
const stylelint = require('stylelint');
const autoprefixer = require('autoprefixer');
const postcssSprites = require('postcss-sprites');

module.exports = {
  plugins: [

    /* css语法检查 */
    stylelint({
      fix: true, // 自动修复
    }),

    /* 前缀自动补全：会与postcss-cssnext冲突 */
    autoprefixer({
      overrideBrowserslist: ['>=99.5%']
    }),

    /* css预处理 */
    postcssPresetEnv({
      stage: 0
    }),

    /* 将px转换成rem */
    require("postcss-pxtorem"),

    /* css下一代语法 */
    require('postcss-cssnext'),

    /* 加入import引用命令 */
    require('postcss-import'),

    /* 对css进行压缩处理 */
    // require('cssnano'),

    /* 判断、条件语句 */
    require('precss'),

    /* 自动合成精灵图 */
    postcssSprites({
      spritePath: './images/', // 保存路径
      verbose: true,
      // image的路径或者名字中以'-sprite'关键词为结尾的进行合并，否则不合并
      filterBy (image) {
        if (/-sprite\./.test(image.url)) {
          return Promise.resolve()
        }
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject()
      },
      // 雪碧图分组，当图片较多的时候使用，通过判断路径和名字中的关键词，resolve不同的名字，reject的为默认名字
      groupBy (image) {
        if (/-page1/.test(image.url)) {
          return Promise.resolve('page1')
        }
        if (/-page2/.test(image.url)) {
          return Promise.resolve('page2')
        }
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject()
      }
    }),
  ]
}