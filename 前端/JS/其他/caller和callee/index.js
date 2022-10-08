// callee：返回一个函数的引用，这个函数调用了当前的函数。
// 1. 这个属性只有当函数在执行时才有用
// 2. 如果在javascript程序中，函数是由顶层调用的，则返回null
var funA = function(){
    console.log(funA.caller);
}
let funB = function(){
    funA();
}
funB();



// callee：返回正在执行的函数本身的引用，它是arguments的一个属性
// callee可以用作于递归执行
// 例子：计算n到m的累加
let result = 0;
var a = function(start, end){
    if(start<end){
        result+=++start;
        arguments.callee(start, end);
    }
    else{
        return result;
    }
}
a(0, 10);
console.log(result);