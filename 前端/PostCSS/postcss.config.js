const postcssPresetEnv = require('postcss-preset-env');
const stylelint = require('stylelint');

module.exports = {
  plugins: [
    stylelint({ /* css语法检查 */
      fix: true, // 自动修复
    }),
    require("autoprefixer"), /* 前缀自动补全 */
    postcssPresetEnv({ /* css预处理 */
      stage: 0
    }),
    require("postcss-pxtorem"), /* 将px转换成rem */
  ]
}