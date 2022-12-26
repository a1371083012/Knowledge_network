/* 自定义类型 */
type NumStr = number | string;

/* 使用自定义类型 */
let ns: NumStr = 10;
ns = "hello";

/* 定义固定值 */
let c: 'on' | 'off' = 'on';
c = 'on';