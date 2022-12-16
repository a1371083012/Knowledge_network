/* 自定义类型 */
type NumStr = number | string;

/* 使用自定义类型 */
let a: NumStr = 10;
a = "hello";

/* 定义固定值 */
let c: 'on' | 'off' = 'on';
c = 'on';

export{};