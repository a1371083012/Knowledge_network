// 常规判断
console.log("常规判断：");
let empty = null;
let under = undefined;
let nan = NaN;
let str = "NaN";

console.log(isNaN(empty));  // false
console.log(isNaN(under));  // true
console.log(isNaN(nan));    // true
console.log(isNaN(str));    // true

// 封装判断
console.log("封装判断：");
function IsNaN(e){
    return isNaN(e) && typeof e == "number";
}
console.log(IsNaN(empty));  // false
console.log(IsNaN(under));  // false
console.log(IsNaN(nan));    // false
console.log(IsNaN(str));    // true