// boolean, number, string, undefined, null, any
let a = 10; // 20
console.log(a);
let b = 20;
console.log(b); // 20
b = "hello"; // 不报错，使用了any类型定义
function add(n1, n2) {
    return n1 + n2;
}
add(1, 2);
