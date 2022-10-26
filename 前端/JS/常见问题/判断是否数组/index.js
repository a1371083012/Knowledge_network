let array = [1, 2, 3, 4, 5];
let obj = {name: "小明",sex: "男"};

// ①：通过 Object.prototype.toString.call()
console.log({}.toString.call(array) == "[object Array]");
console.log({}.toString.call(obj) == "[object Array]");

// ②：通过 instanceof
console.log(array instanceof Array);
console.log(obj instanceof Array);

// ③：通过 constructor
console.log(array.constructor == Array);
console.log(obj.constructor == Array);

// ④：通过 Array.isArray
console.log(Array.isArray(array));
console.log(Array.isArray(obj));
