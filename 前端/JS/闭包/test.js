/* 简单闭包例子 */
function f1(){
    var n=999;
    return ()=>{console.log(n++);}
}
var result = f1();
result();
result();
result();
result();

function f2(){
    var n=999;
    return n++;
}
console.log(f2());
console.log(f2());
console.log(f2());
console.log(f2());

/* 闭包防抖节流 */
// 防抖
// function debounce(fn, delay = 300) {
//     let timer; //闭包引用的外界变量
//     return function () {
//       const args = arguments;
//       if (timer) {
//         clearTimeout(timer);
//       }
//       timer = setTimeout(() => {
//         fn.apply(this, args);
//       }, delay);
//     };
// }

/* 使用闭包可以在 JavaScript 中模拟块级作用域 */
// function outputNumbers(count) {
//     (function () {
//       for (var i = 0; i < count; i++) {
//         alert(i);
//       }
//     })();
//     alert(i); //导致一个错误！
// }
// outputNumbers(3);

/* 闭包可以用于在对象中创建私有变量 */
// var aaa = (function () {
//     var a = 1;
//     function bbb() {
//       a++;
//       console.log(a);
//     }
//     function ccc() {
//       a++;
//       console.log(a);
//     }
//     return {
//       b: bbb, //json结构
//       c: ccc,
//     };
//   })();
//   console.log(aaa.a); //undefined
//   aaa.b(); //2
//   aaa.c(); //3