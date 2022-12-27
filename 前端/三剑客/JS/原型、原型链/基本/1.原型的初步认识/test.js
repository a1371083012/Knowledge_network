let arr = ['abc'];
console.log(arr.__proto__); // arr数组的原型(prototype)是Array
console.log(arr.__proto__.__proto__); // Array的原型(prototype)是Object

let hd={a: '123'};
console.log(hd.__proto__); // hd对象的原型(prototype)是Object

//所以 arr 原型的原型和 hd 的原型本质就是Object
console.log(hd.__proto__ === arr.__proto__.__proto__);