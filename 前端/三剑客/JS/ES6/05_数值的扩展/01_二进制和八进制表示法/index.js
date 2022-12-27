// #region 01_二进制和八进制表示法
console.log(0b111110111 === 503); // true
console.log(0o767 === 503); // true
// 严格模式
(function(){
    'use strict';
    console.log(0o11);
  })()
// #endregion


// #region 02_数值分隔符
let budget = 1_000_000_000_000;
console.log(budget === 10 ** 12); // true
// #endregion
