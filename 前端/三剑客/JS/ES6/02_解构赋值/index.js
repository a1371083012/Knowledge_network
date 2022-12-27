// 解构赋值分别支持`数组`、`对象`、`字符串`、`数值和布尔值`、`函数参数`的解构，还需要注意`圆括号`的问题。
// 以下说明仅只是以`数组`为示例。

let [a, b, c] = [1, 2, 3];
console.log(a, b, c);

let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo); // 1
console.log(bar); // 2
console.log(baz); // 3

let [ , , third] = ["foo", "bar", "baz"];
console.log(third); // "baz"

let [x, , y] = [1, 2, 3];
console.log(x); // 1
console.log(y); // 3

let [head, ...tail] = [1, 2, 3, 4];
console.log(head); // 1
console.log(tail); // [2, 3, 4]

let [one, two, ...three] = ['a'];
console.log(one); // "a"
console.log(two); // undefined
console.log(three); // []