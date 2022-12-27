// Object
let a = {};
let b = {};
let c = {};
Object.setPrototypeOf(b, c);
Object.setPrototypeOf(a, b);
console.log(c.isPrototypeOf(a));