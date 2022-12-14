module.exports = {
  // 继承 Eslint 规则
  extends: ["eslint:recommended"],
  parser: "@babel/eslint-parser", // 支持最新的最终 ECMAScript 标准
  // 环境配置
  env: {
    node: true, // 启用node中全局变量
    browser: true, // 启用浏览器中全局变量
  },
  // 解析选项
  parserOptions: {
    ecmaVersion: 6, // ES 语法版本
    sourceType: "module", // ES 模块化
  },
  // 检查规则
  rules: {
    "no-var": 2, // 不能使用 var 定义变量
  },
  plugins: ["import"], // 解决动态导入语法报错
};