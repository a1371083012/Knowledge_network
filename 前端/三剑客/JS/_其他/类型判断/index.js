let undefine;
let empty = null;
let bool = true;
let num = 1;
let string = "1";
let symbol = Symbol("1");
let arr = [1,2];
let fun = function(){};
let obj = {};

console.log(typeof undefine); // undefined
console.log(typeof empty);    // object
console.log(typeof bool);     // boolean
console.log(typeof num);      // number
console.log(typeof string);   // string
console.log(typeof symbol);   // symbol
console.log(typeof arr);      // object
console.log(typeof fun);      // function
console.log(typeof obj);      // object

console.log(new String instanceof String);     // true
console.log(new String instanceof Object);     // true
console.log(new Array instanceof Array);       // true
console.log(new Array instanceof Object);      // true
console.log(new Function instanceof Function); // true
console.log(new Function instanceof Object); // true
console.log(new Date instanceof Date);         // true
console.log(new Date instanceof Object);         // true
console.log(new Object instanceof Object);     // true

console.log(bool.constructor);     // Boolean
console.log(num.constructor);      // Number
console.log(string.constructor);   // String
console.log(symbol.constructor);   // Symbol
console.log(arr.constructor);      // Array
console.log(fun.constructor);      // Function
console.log(obj.constructor);      // Object

console.log(Object.prototype.toString.call(undefine));   // [object Undefined]
console.log(Object.prototype.toString.call(null));       // [object Null]
console.log(Object.prototype.toString.call(bool));       // [object Boolean]
console.log(Object.prototype.toString.call(num));        // [object Number]
console.log(Object.prototype.toString.call(string));     // [object String]
console.log(Object.prototype.toString.call(symbol));     // [object Symbol]
console.log(Object.prototype.toString.call(arr));        // [object Array]
console.log(Object.prototype.toString.call(fun));        // [object Function]
console.log(Object.prototype.toString.call(obj));        // [object Object]
