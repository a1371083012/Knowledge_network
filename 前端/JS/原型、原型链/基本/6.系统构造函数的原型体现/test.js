Array.prototype.show = function(){
    console.log("show");
}

let arr = []; // new Array
console.log(arr.__proto__ == Array.prototype);
arr.show();

let str = ""; // new String
console.log(str.__proto__ == String.prototype);

let bool = true; // new Boolean
console.log(bool.__proto__ == Boolean.prototype);

let reg = /a/i; // new RegExp
console.log(reg.__proto__ == RegExp.prototype);

let obj = {}; // new Object
console.log(obj.__proto__ == Object.prototype); 